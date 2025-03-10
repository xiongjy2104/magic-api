package org.ssssssss.magicapi.doris;


import org.apache.flink.api.java.utils.ParameterTool;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
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
public class FlinkDorisStarterDemoV1 {

    public static int DEFAULT_PARALLELISM = 2;

    private static final Logger logger = LoggerFactory.getLogger(FlinkDorisStarterDemoV1.class);

    public static void main(String[] args) throws Exception {
//        ParameterTool parameterTool = ParameterTool.fromArgs(args);
//        String taskName = parameterTool.get("sqlfile");
        String taskName;
        if(args.length<1){
            System.out.print("\n\tplease input your sqlfile path: ");
            Scanner scanner =new Scanner(System.in);
            taskName=scanner.nextLine();
        }else
         taskName = args[0];

//        Properties awsRuntimeProperties = readAwsRuntimeProperties("datasource_group");
        Properties awsRuntimeProperties = new Properties();

        String sqlstr ="";
        try {
            sqlstr = readSqlFileAsString(taskName);
            if(sqlstr == null || "".equalsIgnoreCase(sqlstr)){
                logger.error("FlinkTaskStarterError-sqlstr is empty");
                return;
            }
        }catch (Exception e){
            logger.error("FlinkTaskStarterError-readSqlFile-{}",e);
            return;
        }

        List<String> list = replaceTokenAndOutputList(sqlstr, awsRuntimeProperties);

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
                    logger.info("FlinkTaskStarterLog-sql-{}", sqlrun);
                    tabEnv.executeSql(sqlrun);
                    stringBuilder = new StringBuilder("");
                    continue;
                }
                stringBuilder.append("\n");

            }
        }
        if (stringBuilder.toString().trim().length() > 0) {
            System.out.println(sqlrun);
            logger.info("FlinkTaskStarterLog-sql-{}", sqlrun);
            tabEnv.executeSql(sqlrun);
        }
    }

    private static String readSqlFileAsString(String sqlfile) throws IOException {
        // Read a local file to inputstream
        InputStream inputStream = new FileInputStream(new File(sqlfile));
        String sqlstr = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))
                .lines().collect(Collectors.joining("\n"));
//        List<String> list = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))
//                .lines().collect(Collectors.toList());
        logger.info("FlinkTaskStarterLog-sqlstr-{}",sqlstr);
        inputStream.close();
        return sqlstr;
    }

    private static List<String> replaceTokenAndOutputList(String sqlstr, Properties awsRuntimeProperties) throws IOException {
        for (Object key: awsRuntimeProperties.keySet()){
            sqlstr=sqlstr.replaceAll("#\\{"+key+"\\}",(String) awsRuntimeProperties.get(key));
        }
        logger.info("FlinkTaskStarterLog-replaced-sqlstr-{}",sqlstr);
        if(sqlstr.contains("#\\{"))
            logger.error("FlinkTaskStarterLog-someNotReplaced-{}",sqlstr);
        List<String> list = Arrays.asList(sqlstr.trim().split("\n"));

        return list;
    }
}