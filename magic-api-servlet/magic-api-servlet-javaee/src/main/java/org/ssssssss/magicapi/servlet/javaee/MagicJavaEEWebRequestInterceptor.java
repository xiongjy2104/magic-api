package org.ssssssss.magicapi.servlet.javaee;

import org.slf4j.MDC;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.ssssssss.magicapi.core.config.MagicCorsFilter;
import org.ssssssss.magicapi.core.interceptor.AuthorizationInterceptor;
import org.ssssssss.magicapi.core.interceptor.MagicWebRequestInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.UUID;

public class MagicJavaEEWebRequestInterceptor extends MagicWebRequestInterceptor implements HandlerInterceptor {


	public MagicJavaEEWebRequestInterceptor(MagicCorsFilter magicCorsFilter, AuthorizationInterceptor authorizationInterceptor) {
		super(magicCorsFilter, authorizationInterceptor);
	}

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String requestUUID = MDC.get("requestUUID");
		if (requestUUID == null || "".equals(requestUUID)) {
			String uuid = UUID.randomUUID().toString().replaceAll("-", "").toLowerCase();
			MDC.put("requestUUID", uuid);
			MDC.put("uuid", uuid);
			MDC.put("qid", uuid);
		}
		super.handle(handler, new MagicJavaEEHttpServletRequest(request, null), new MagicJavaEEHttpServletResponse(response));
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,@Nullable ModelAndView modelAndView) throws Exception {
		// 线程结束后需要清除,否则当前线程会一直占用这个requestId值
		MDC.remove("requestUUID");
		MDC.remove("uuid");
		MDC.remove("qid");
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,@Nullable  Exception ex) throws Exception {
		// 整个请求线程结束后需要清除,否则当前线程会一直占用这个requestId值
		MDC.clear();
	}
}
