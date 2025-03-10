package trace;

import java.util.concurrent.CopyOnWriteArrayList;

public class SamplingPool {

    private static CopyOnWriteArrayList<Long> threadList = new CopyOnWriteArrayList<>();

    public static Long getSamplingThreadId() {
        int num = threadList.size();
        if (num == 0)
            return 0L;
        return threadList.get((num >= 2) ? 1 : 0);
    }

    public static void addThreadId(Long threadList) {
        SamplingPool.threadList.add(threadList);
    }

}

