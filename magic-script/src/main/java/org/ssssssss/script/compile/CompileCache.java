package org.ssssssss.script.compile;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.ssssssss.script.MagicScript;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.function.Supplier;

public class CompileCache{
	private static final Logger logger = LoggerFactory.getLogger(CompileCache.class);
	private static final Map<String, Object> EMPTY_MAP = new HashMap<>();

	private final Cache<String, MagicScript> cacheMap;

	public CompileCache(int capacity) {
//		cacheMap = Caffeine.newBuilder()
//				.maximumSize(capacity)
//				.refreshAfterWrite(1, TimeUnit.MINUTES)
//				.build((key ) -> get(key));

		cacheMap = Caffeine.newBuilder()
				.maximumSize(capacity)
				.build( );

	}

	public void put(String key, MagicScript script) {
			cacheMap.put(key, script);
	}

	public MagicScript get(String key) {
			return cacheMap.getIfPresent(key);
	}

	public MagicScript get(String key, Supplier<MagicScript> value) {
		MagicScript script = cacheMap.getIfPresent(key);
		if (script == null) {
			script = value.get();
			key=key.trim();
			cacheMap.put(key, script);
			int firstline =key.indexOf("\n");
			firstline = (firstline ==-1)? key.length() :( firstline<=80 ? firstline : 80);
			String keysubstr = key.substring(0, firstline);
			logger.info("CompileCache not hit:"+keysubstr+"/"+cacheMap.stats());
		}
		return script;
	}

}
