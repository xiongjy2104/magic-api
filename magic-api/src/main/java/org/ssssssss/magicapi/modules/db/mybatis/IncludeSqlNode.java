package org.ssssssss.magicapi.modules.db.mybatis;

import org.apache.commons.lang3.StringUtils;
import org.ssssssss.magicapi.utils.ScriptManager;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * 对应XML中 <include>
 *
 */
public class IncludeSqlNode extends SqlNode {
	/**
	 * 数据集合，支持Collection、数组
	 */
	private String refid;

	public void setRefid(String refid) {
		this.refid = refid;
	}


	public String getRefid( ) {
		return this.refid;
	}

	@Override
	public String getSql(Map<String, Object> paramMap, List<Object> parameters) {
		// 提取集合
		Object value = ScriptManager.executeExpression(this.refid, paramMap);
		// 如果集合为空，则过滤该节点
		if (value == null) {
			return "";
		}
		// 开始拼接SQL,
		StringBuilder sqlBuilder = new StringBuilder();
		sqlBuilder.append(executeChildren(paramMap, parameters));
		return sqlBuilder.toString();
	}
}
