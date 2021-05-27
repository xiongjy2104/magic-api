package org.ssssssss.magicapi.script;

import org.ssssssss.magicapi.cache.DefaultSqlCache;
import org.ssssssss.magicapi.exception.MagicAPIException;
import org.ssssssss.magicapi.utils.MD5Utils;
import org.ssssssss.script.MagicScript;
import org.ssssssss.script.MagicScriptContext;

import javax.script.*;

public class ScriptManager {

	private static final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();


	/**
	 * 编译缓存
	 */
	private static final DefaultSqlCache compileCache = new DefaultSqlCache(500, -1);

	/**
	 * 编译脚本
	 *
	 * @param script 脚本内容
	 */
	public static CompiledScript compile(String engine, String script) {
		String key = MD5Utils.encrypt(script);    //先对脚本MD5作为key
		CompiledScript scriptObject = (CompiledScript) compileCache.get("default", key);
		if (scriptObject == null) {
			ScriptEngine scriptEngine = scriptEngineManager.getEngineByName(engine);
			if (scriptEngine != null) {
				if (scriptEngine instanceof Compilable) {    //判断是否支持编译
					Compilable compilable = (Compilable) scriptEngine;
					try {
						scriptObject = compilable.compile(script);
					} catch (Exception e) {
						throw new MagicAPIException(String.format("编译%s出错", engine), e);
					}
				} else {
					scriptObject = new UnCompileScript(script, scriptEngine);
				}
				compileCache.put("default", key, scriptObject, -1);
			}
		}
		return scriptObject;
	}

	/**
	 * 执行脚本
	 */
	public static Object executeScript(String script, MagicScriptContext context) {
		SimpleScriptContext simpleScriptContext = new SimpleScriptContext();
		simpleScriptContext.setAttribute(MagicScript.CONTEXT_ROOT, context, ScriptContext.ENGINE_SCOPE);
		// 执行脚本
		try {
			return compile("MagicScript", script).eval(simpleScriptContext);
		} catch (ScriptException e) {
			throw new MagicAPIException(e.getMessage(), e);
		}
	}

	/**
	 * 执行脚本
	 */
	public static Object executeExpression(String script, MagicScriptContext context) {
		return executeScript("/* generated by execute expression */ return " + script, context);
	}
}