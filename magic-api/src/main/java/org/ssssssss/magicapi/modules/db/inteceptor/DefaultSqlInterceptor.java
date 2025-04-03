package org.ssssssss.magicapi.modules.db.inteceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.ssssssss.magicapi.core.context.RequestEntity;
import org.ssssssss.magicapi.modules.db.BoundSql;
import org.ssssssss.magicapi.modules.db.inteceptor.SQLInterceptor;
import trace.SamplingLog;

import java.util.Arrays;
import java.util.stream.Collectors;

/**
 * 默认打印SQL实现
 *
 * @author mxd
 */
public class DefaultSqlInterceptor implements SQLInterceptor {

	private void handleLog(BoundSql boundSql, RequestEntity requestEntity){
		SamplingLog.log(this.getClass().getName(),"handleLog");
		Logger logger = LoggerFactory.getLogger(requestEntity == null ? "Unknown" : requestEntity.getMagicScriptContext().getScriptName());
		String parameters = Arrays.stream(boundSql.getParameters()).map(it -> {
			if (it == null) {
				return "null";
			}
			return it + "(" + it.getClass().getSimpleName() + ")";
		}).collect(Collectors.joining(", "));
		String dataSourceName = boundSql.getSqlModule().getDataSourceName();
		logger.info("timeCounter#threadId-{}-接口{} {},查询数据库源：{}，待执行SQL：{}; --参数：{}", Thread.currentThread().getId(),
				requestEntity.getApiInfo().getMethod(), requestEntity.getApiInfo().getPath(),
				dataSourceName, boundSql.getSql().replaceAll("\n", " ").replaceAll("    ", " "),
				(parameters.length() > 0) ? parameters : "");
	}
	@Override
	public Object postHandle(BoundSql boundSql, Object result, RequestEntity requestEntity) {
		handleLog(boundSql, requestEntity);
		return result;
	}

	@Override
	public void handleException(BoundSql boundSql, Throwable throwable, RequestEntity requestEntity) {
		handleLog(boundSql, requestEntity);
	}
}
