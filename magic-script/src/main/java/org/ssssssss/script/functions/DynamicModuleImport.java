package org.ssssssss.script.functions;

import org.ssssssss.script.MagicScriptContext;

import java.util.function.Function;

public class DynamicModuleImport {

	private final Class<?> targetClass;

	private final Function<MagicScriptContext, Object> finder;

	public DynamicModuleImport(Class<?> targetClass, Function<MagicScriptContext, Object> finder) {
		this.targetClass = targetClass;
		this.finder = finder;
	}

	public Object getDynamicModule(MagicScriptContext context){
		return finder.apply(context);
	}

	public Class<?> getTargetClass() {
		return targetClass;
	}
}
