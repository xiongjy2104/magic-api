package org.ssssssss.magicapi.plugin.nacos;

import cn.hutool.http.HttpRequest;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.nacos.api.annotation.NacosInjected;
import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.NamingService;
import com.alibaba.nacos.api.naming.pojo.Instance;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.ssssssss.magicapi.core.annotation.MagicModule;
import org.ssssssss.script.annotation.Comment;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@MagicModule("nacos")
public class RpcModule {


    @NacosInjected
    private NamingService namingService;

    @Comment("访问rpc服务")
    public JSONObject to(@Comment("selectName(服务名称)")String selectName, @Comment("path(请求路径)")String path
            , @Comment("method(请求方式)") String method, @Comment("ifhedler(是否将头部token设置到请求中)") boolean ifhandler) throws NacosException {
        HttpRequest httpRequest = apiinit(selectName,method,path,ifhandler);
        String restr = httpRequest.timeout(20000).execute().body();//表单内容
        return JSON.parseObject(restr);
    }

    @Comment("访问rpc服务表单提交")
    public JSONObject toform(@Comment("selectName(服务名称)")String selectName, @Comment("path(请求路径)")String path, @Comment("paramMap(请求数据map格式)") Map<String,Object> paramMap
            , @Comment("method(请求方式)") String method, @Comment("ifhedler(是否将头部token设置到请求中)") boolean ifhandler) throws NacosException {
        HttpRequest httpRequest = apiinit(selectName,method,path,ifhandler);
        String restr = httpRequest.form(paramMap).timeout(20000).execute().body();//表单内容
        return JSON.parseObject(restr);
    }

    @Comment("访问rpc服务body方式")
    public JSONObject tobody(@Comment("selectName(服务名称)")String selectName, @Comment("path(请求路径)")String path, @Comment("body(请求数据json格式)") String body
            , @Comment("method(请求方式)") String method, @Comment("ifhedler(是否将头部token设置到请求中)") boolean ifhandler) throws NacosException {
        HttpRequest httpRequest = apiinit(selectName,method,path,ifhandler);
        String restr = httpRequest.body(body).timeout(20000).execute().body();//表单内容
        return JSON.parseObject(restr);
    }

    private HttpRequest apiinit(String selectName,String method,String path,boolean ifhandler) throws NacosException {
        Instance instance = namingService.selectOneHealthyInstance(selectName);
        HttpRequest httpRequest = null;
        if(method.compareToIgnoreCase("post")==0){
            httpRequest = HttpRequest.post(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("get")==0){
            httpRequest = HttpRequest.get(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("head")==0){
            httpRequest = HttpRequest.head(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("options")==0){
            httpRequest = HttpRequest.options(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("put")==0){
            httpRequest = HttpRequest.put(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("patch")==0){
            httpRequest = HttpRequest.patch(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("delete")==0){
            httpRequest = HttpRequest.delete(instance.getIp()+":"+instance.getPort()+path);
        }else if(method.compareToIgnoreCase("trace")==0){
            httpRequest = HttpRequest.trace(instance.getIp()+":"+instance.getPort()+path);
        }
        if(ifhandler){
            RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
            //RequestContextHolder.getRequestAttributes();
            HttpServletRequest request = ((ServletRequestAttributes)requestAttributes).getRequest();
            //HttpServletResponse response = ((ServletRequestAttributes)requestAttributes).getResponse();
            String token = request.getHeader("token");
            httpRequest.header("token",token);
        }
        return httpRequest;
    }
}
