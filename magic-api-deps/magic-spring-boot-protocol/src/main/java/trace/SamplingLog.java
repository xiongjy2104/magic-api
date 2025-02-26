package trace;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class SamplingLog {
    private static final Logger logger = LoggerFactory.getLogger(SamplingLog.class);
    private static String hostname;

    static {
        hostname = System.getenv("HOSTNAME");
        hostname = (hostname == null || "".equalsIgnoreCase(hostname)) ? "" : hostname;
        if (hostname == null || "".equalsIgnoreCase(hostname)) {
            InetAddress inetadd = null;
            try {
                inetadd = InetAddress.getLocalHost();
            } catch (UnknownHostException e) {
                throw new RuntimeException(e);
            }
            hostname = inetadd.getHostName();
        }
    }

    public static void log() {
        log(SamplingLog.class.getName(), "");
    }

    public static void log(String className, String methodJoint) {
        long threadId = Thread.currentThread().getId();
//        if(SamplingRatio.getRatio()==1 || (SamplingRatio.getRatio()>0 && threadId%(SamplingRatio.getRatio())==1)) {
//        if(SamplingNumber.getSamplingThreadNo()== threadId) {
//        if (SamplingPool.getSamplingThreadId() == threadId) {
            logger.info("timeCounter#host-{}-threadId-{}-time-{}  running to {}.{}", hostname, threadId, System.currentTimeMillis() % 1000000, className, methodJoint);
//        }
    }
}

