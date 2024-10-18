//package org.ssssssss.magicapi.redis;
//
//import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
//import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.ssssssss.magicapi.core.config.MagicAPIProperties;
//import org.ssssssss.magicapi.core.config.MagicPluginConfiguration;
//import org.ssssssss.magicapi.core.config.Resource;
//import org.ssssssss.magicapi.core.model.Plugin;
//
//@Configuration
//public class MagicFeignConfiguration implements MagicPluginConfiguration {
//
//	private final MagicAPIProperties properties;
//
//	public MagicFeignConfiguration(MagicAPIProperties properties) {
//		this.properties = properties;
//	}
//
//	/**
//	 */
//	@Bean
//	@ConditionalOnMissingBean
//	@ConditionalOnProperty(prefix = "magic-api", name = "resource.type", havingValue = "feign")
//	public org.ssssssss.magicapi.core.resource.Resource magicFeignResource(FeignConnectionFactory connectionFactory) {
//		Resource resource = properties.getResource();
//		return new FeignResource(new StringRedisTemplate(connectionFactory), resource.getPrefix(), resource.isReadonly());
//	}
//
//	/**
//	 */
//	@Bean
//	public FeignModule feignFunctions(FeignConnectionFactory connectionFactory) {
//		return new FeignModule(connectionFactory);
//	}
//
//	@Override
//	public Plugin plugin() {
//		return new Plugin("Feign");
//	}
//}
