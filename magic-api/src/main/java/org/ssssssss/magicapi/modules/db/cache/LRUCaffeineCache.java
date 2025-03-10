package org.ssssssss.magicapi.modules.db.cache;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import java.util.concurrent.TimeUnit;

/**
 * CaffeineLRU缓存实现
 *
 * @author george
 */
public class LRUCaffeineCache  {

	private final String separator = ":";

	private final Cache<String, Object> cacheMap;

	public LRUCaffeineCache(int capacity, long expire) {
		cacheMap = Caffeine.newBuilder()
				.maximumSize(capacity)
				.expireAfterWrite(expire, TimeUnit.MILLISECONDS)
				.build();
	}

	public void put(String name, String key, Object value) {
		cacheMap.put(name + separator + key, value);
	}

	public void put(String name, String key, Object value, long ttl) {
		cacheMap.put(name + separator + key, value);
	}

	public Object get(String name, String key) {
		key = name + separator + key;
		Object val= cacheMap.getIfPresent(key);
		return val;
	}

	public void delete(String name) {
		cacheMap.invalidateAll();//TODO: filter with name prefix
//		cacheMap.invalidate(name);
	}

	public long size() {
		return cacheMap.stats().loadCount();
	}

}
