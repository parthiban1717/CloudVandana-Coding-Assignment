package com.example;


public class PangramChecker {
    public static void main(String[] args) {
        String sentence = "The quick brown Fox jumps over the lazy dog";
        boolean isPangram = isPangram(sentence.toLowerCase());
        System.out.println("Is it a pangram? " + isPangram);
    }

    public static boolean isPangram(String sentence) {
        for (char c = 'a'; c <= 'z'; c++) {
            if (sentence.indexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }
}
