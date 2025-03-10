package org.ssssssss.magicapi.doris;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.kinesisanalytics.runtime.KinesisAnalyticsRuntime;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.S3Object;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.TableResult;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

/*
//必填参数（AorB二选一)
//A：
//        datasource_group    sql			(直接贴SQL内容。但不支持太长，因为aws上输入框长度限制)
//B:
//        datasource_group    sqlfile			(贴SQLfile在s3上的路径)
//        datasource_group    s3_bucket_name	(s3上的bucket)

//选填参数
//        datasource_group    parallelism	(专设本任务并行度）
//        datasource_group    s3_access_key
//        datasource_group    s3_secret_key
//        datasource_group    s3_region

//SQL内容里存在占位则填，变量名可自由定义，和占位符对应的上就行
//        datasource_group    doris_fenodes
//        datasource_group    doris_jdbc
//        datasource_group    doris_password
//        datasource_group    doris_username
//        datasource_group    kafka_url
//        datasource_group    kafka_topic
//        datasource_group    kafka_group
 */
public class FlinkDorisStarterDemo {

    public static int DEFAULT_PARALLELISM = 2;

    private static final Logger logger = LoggerFactory.getLogger(FlinkDorisStarterDemo.class);


    public static void main(String[] args) throws Exception {
        logger.info("FlinkTaskStarterLog-StartingFlinkTask");
        Properties awsRuntimeProperties = readAwsRuntimeProperties("datasource_group");

        String sql = (String) awsRuntimeProperties.get("sql");
        String sqlfile = (String) awsRuntimeProperties.get("sqlfile");
        if (sql == null && sqlfile == null) {
            logger.error("FlinkTaskStarterError-runtime config not configured: datasource_group::sqlfile");
            return;
        }
        if (sqlfile != null && awsRuntimeProperties.get("s3_bucket_name") == null) {
            logger.error("FlinkTaskStarterError-runtime config not configured: datasource_group::s3_bucket_name");
            return;
        }
        String sqlstr = sql != null ? sql : "";
        try {
            sqlstr = readS3FileAsString(sqlfile, awsRuntimeProperties);
            if (sqlstr == null || "".equalsIgnoreCase(sqlstr)) {
                logger.error("FlinkTaskStarterError-sqlstr is empty");
                return;
            }
        } catch (Exception e) {
            logger.error("FlinkTaskStarterError-readS3File-{}", e);
            return;
        }

        List<String> list = replaceTokenAndOutputList(sqlstr, awsRuntimeProperties);
        // List<String> list = FileUtils.readLines(new File(path),"UTF-8");

        //1.创建一个 flink stream 程序的执行环境
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        int parallelism = DEFAULT_PARALLELISM;
        if (awsRuntimeProperties.get("parallelism") != null && !"".equalsIgnoreCase((String) awsRuntimeProperties.get("parallelism"))) {
            try {
                parallelism = Integer.parseInt((String) awsRuntimeProperties.get("parallelism"));
            } catch (Exception e) {
                logger.info("FlinkTaskStarterLog-parallelism-{}", " no set, use default 2");
            }
        }
        env.setParallelism(parallelism);
        env.enableCheckpointing(60000); // Enable checkpointing every 60 seconds
        StreamTableEnvironment tabEnv = StreamTableEnvironment.create(env);

        StringBuilder stringBuilder = new StringBuilder("");
        String sqlrun = "";
        for (String var : list) {
            if (!(var == null || "".equalsIgnoreCase(var.trim()) || var.trim().startsWith("--") || var.trim().startsWith("%"))) {
                if (var.trim().startsWith("SET ") || var.trim().startsWith("set ")) {
                    //SET 'execution.checkpointing.interval' = '10s';
                    //set("execution.checkpointing.interval","10s");
                    var = var.trim().replace(";", "");
                    System.out.println(var);
                    logger.info("FlinkTaskStarterLog-sql-{}", var);
                    String[] kv = var.substring(3).split("=");
                    tabEnv.getConfig().set(kv[0].trim().substring(1, kv[0].trim().length() - 1), kv[1].trim().substring(1, kv[1].trim().length() - 1));
                    stringBuilder = new StringBuilder("");
                    continue;
                }

                stringBuilder.append(var);
                if (var.contains(";")) {
                    sqlrun = stringBuilder.toString().replace(";", "");
                    System.out.println(sqlrun);
                    TableResult tableResult=tabEnv.executeSql(sqlrun);
                    logger.info("FlinkTaskStarterLog-sqlresult-{}-with-sql-{}", tableResult.getResultKind().toString(), sqlrun);
                    tableResult.print();
                    stringBuilder = new StringBuilder("");
                    continue;
                }
                stringBuilder.append("\n");
            }
        }
        if (stringBuilder.toString().trim().length() > 0) {
            System.out.println(sqlrun);
            TableResult tableResult=tabEnv.executeSql(sqlrun);
            logger.info("FlinkTaskStarterLog-sqlresult-{}-with-sql-{}", tableResult.getResultKind().toString(), sqlrun);
            tableResult.print();
        }

        logger.info("FlinkTaskStarterLog-FlinkTaskCompleted");
    }

    private static Properties readAwsRuntimeProperties(String groupName) {

        //read variables from aws application.
        Map<String, Properties> applicationProperties = null;
        try {
            applicationProperties = KinesisAnalyticsRuntime.getApplicationProperties();
        } catch (Exception e) {
            logger.error("FlinkTaskStarterError-awsApplicationProperties-{}", e);
        }
        Properties properties = applicationProperties.get(groupName);
        logger.info("FlinkTaskStarterLog-{}-{}", groupName, properties);
        if(properties== null )
            properties = new Properties();
        return properties;
    }

    private static String readS3FileAsString(String sqlfile, Properties awsRuntimeProperties) throws IOException {
        // AWS S3 client setup
        AmazonS3ClientBuilder s3ClientBuilder = AmazonS3ClientBuilder
                .standard();

        if (awsRuntimeProperties.get("s3_region") != null ) {
            s3ClientBuilder.withRegion(Regions.fromName((String)awsRuntimeProperties.get("s3_region")));
        }else {
            s3ClientBuilder.withRegion(Regions.AP_SOUTHEAST_1);
        }

        if (awsRuntimeProperties.get("s3_access_key") != null && awsRuntimeProperties.get("s3_secret_key") != null)
        {
            s3ClientBuilder.withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials((String) awsRuntimeProperties.get("s3_access_key"), (String) awsRuntimeProperties.get("s3_secret_key"))));
//                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(S3_ACCESS_KEY_ID, S3_SECRET_KEY )))
        }
        AmazonS3 s3Client = s3ClientBuilder.build();
        logger.info("FlinkTaskStarterLog-s3Client-{}", s3Client);

        S3Object s3Object = s3Client.getObject((String) awsRuntimeProperties.get("s3_bucket_name"), sqlfile);
        logger.info("FlinkTaskStarterLog-s3Object-{}", s3Object);
//        S3Object s3Object = s3Client.getObject(S3_BUCKET, sqlfile);
        InputStream inputStream = s3Object.getObjectContent();
        String sqlstr = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))
                .lines().collect(Collectors.joining("\n"));
//        List<String> list = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))
//                .lines().collect(Collectors.toList());
        logger.info("FlinkTaskStarterLog-sqlstr-{}", sqlstr);
        inputStream.close();
        s3Object.close();
        return sqlstr;
    }

    private static List<String> replaceTokenAndOutputList(String sqlstr, Properties awsRuntimeProperties) throws IOException {
        for (Object key : awsRuntimeProperties.keySet()) {
            sqlstr = sqlstr.replaceAll("#\\{" + key + "\\}", (String) awsRuntimeProperties.get(key));
        }
        logger.info("FlinkTaskStarterLog-replaced-sqlstr-{}", sqlstr);
        if (sqlstr.contains("#\\{"))
            logger.error("FlinkTaskStarterLog-someNotReplaced-{}", sqlstr);
        List<String> list = Arrays.asList(sqlstr.trim().split("\n"));

        return list;
    }

}