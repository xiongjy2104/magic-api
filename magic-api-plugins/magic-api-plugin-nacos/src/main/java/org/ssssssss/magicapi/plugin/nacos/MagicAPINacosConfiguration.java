package org.ssssssss.magicapi.plugin.nacos;

import cn.amaake.magicplugin.module.RpcModule;
import org.springframework.context.annotation.Bean;
import org.ssssssss.magicapi.core.config.MagicPluginConfiguration;
import org.ssssssss.magicapi.core.model.Plugin;

public class MagicAPINacosConfiguration implements MagicPluginConfiguration {

    @Override
    public Plugin plugin() {
        return new Plugin("Nacos");
    }

    @Bean
    public RpcModule rpcFunction(){
        RpcModule rpcModule = new RpcModule();
        return rpcModule;
    }
}
