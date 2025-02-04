package org.ssssssss.magicapi.utils;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.Locale;
import java.util.TreeSet;

public class ULIDGeneratorV2 {
    private static final SecureRandom RANDOM = new SecureRandom();
    public static final String[] ENCODING = {"9", "8", "7",
            "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L",
            "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
            "Y", "Z", "2", "3", "4", "5", "6"};
    public static final int START_YEAR = 2024;

    public static String genULID() {
        // 获取当前日期
        LocalDate today = LocalDate.now();
        int year = (today.getYear() - START_YEAR);
        // 设置周的起始日为星期一
        WeekFields weekFields = WeekFields.of(Locale.getDefault());
        // 获取本年的第几周,
        int week = today.get(weekFields.weekOfWeekBasedYear());
        int dayofWeek = today.getDayOfWeek().getValue();

        long timeBatch = dayofWeek + (week << 3) + (year << 9);
        byte[] timebytes = new byte[2];
        timebytes[1] = (byte) (timeBatch >> 8);
        timebytes[0] = (byte) timeBatch;

        byte[] randomBytes = new byte[8];
        RANDOM.nextBytes(randomBytes);
        return encodeULID(timebytes, randomBytes);
    }

    private static String encodeULID(byte[] part1, byte[] part2) {
        StringBuilder out = new StringBuilder();
        //notice: not consider indivisible situations, add later if necessary.
        int length = ((part1.length + part2.length) << 3) / 5;
        int pos, bpos, inpos;

        for (int i = length - 1; i >= 0; i--) {
            int value = 0;
            for (int j = 0; j < 5; j++) {
                pos = (i * 5 + j);
                inpos = pos & 0x7;
                bpos = (pos >> 3) - ((pos >= part2.length << 3) ? part2.length : 0);
                value = ((which(part1, part2, pos)[bpos] & (0x1 << inpos)) != 0) ? (value << 1) + 1 : value << 1;
            }
            out = out.append(ENCODING[value]);
            if (i == 12 || i == 8 || i == 4)
                out.append('-');
        }
        return out.toString();
    }

    private static byte[] which(byte[] part1, byte[] part2, int pos) {
        return pos >= part2.length * 8 ? part1 : part2;
    }

    public static void main(String[] args) {
        byte[] part1 = {0x63, (byte) 0x8c};
        byte[] part2 = {0x31, (byte) 0xc6, 0x18, 0x63, (byte) 0x8c, 0x31, (byte) 0xc6, 0x18};
        System.out.println(encodeULID(part1,part2));
        int size = 10;
        TreeSet<String> s=new TreeSet<>();
        long st = System.currentTimeMillis();
        for (int i = 0; i < size; i++) {
            String ulid = ULIDGeneratorV2.genULID();
            s.add(ulid);
            System.out.println(ulid);
        }
        System.out.println("not duplicated?"+(s.size()==size));
        System.out.println("time spend--" + (System.currentTimeMillis() - st));

    }
}