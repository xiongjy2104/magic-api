package org.ssssssss.magicapi.servlet.javaee;

import org.ssssssss.magicapi.core.config.MagicCorsFilter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MagicJavaEECorsFilter extends MagicCorsFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		super.process(new MagicJavaEEHttpServletRequest((HttpServletRequest) request, null), new MagicJavaEEHttpServletResponse((HttpServletResponse) response));
		chain.doFilter(request, response);
	}
}
