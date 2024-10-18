package com.github.netty.nrpc;

import com.github.netty.core.util.IOUtil;
import com.github.netty.nrpc.client.NRpcClientBootstrap;
import com.github.netty.nrpc.server.NRpcServerBootstrap;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Objects;

/**
 * rpc test
 * 先启动客户端， 再启动服务端， 然后测试异步接口
 * <p>
 * start app {@link NRpcClientBootstrap}
 * start app {@link NRpcServerBootstrap}
 *
 * @author wangzihaogithub
 */
@SpringBootTest(classes = NRpcTests.class)
public class NRpcTests {

    public static void main(String[] args) throws IOException, InterruptedException {
        int error = 0;
        int total = 0;
        while (true) {
            Thread.sleep(1000);
            URL url = new URL("http://localhost:8081/sayHelloAsync?name=xiaowang");
            try {
                InputStream inputStream = url.openStream();
                String responseBody = IOUtil.readInput(inputStream);
                if (!Objects.equals("{\"say\":\"hi! xiaowang\"}", responseBody)) {
                    error++;
                }
            } catch (IOException e) {
                error++;
            }
            total++;
            System.out.println("total = " + total + ", error = " + error);
        }
    }

    @Test
    public void sayHello() throws IOException {
        URL url = new URL("http://localhost:8081/sayHello?name=xiaowang");
        InputStream inputStream = url.openStream();
        String responseBody = IOUtil.readInput(inputStream);
        Assert.isTrue(Objects.equals("{\"say\":\"hi! xiaowang\"}", responseBody));
    }

    @Test
    public void sayHelloAsync() throws IOException {
        URL url = new URL("http://localhost:8081/sayHelloAsync?name=xiaowang");
        InputStream inputStream = url.openStream();
        String responseBody = IOUtil.readInput(inputStream);
        Assert.isTrue(Objects.equals("{\"say\":\"hi! xiaowang\"}", responseBody));
    }

    @Test
    public void sayHelloRxjava3Async() throws IOException {
        URL url = new URL("http://localhost:8081/sayHelloRxjava3Async?name=xiaowang");
        InputStream inputStream = url.openStream();
        String responseBody = IOUtil.readInput(inputStream);
        Assert.isTrue(Objects.equals("{\"say\":\"hi! xiaowang\"}", responseBody));
    }
}
