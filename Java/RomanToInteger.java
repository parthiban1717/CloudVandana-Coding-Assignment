package com.example;


import java.util.HashMap;
import java.util.Map;

public class RomanToInteger {
    public static void main(String[] args) {
        String romanNumeral = "XI"; // Replace with your Roman numeral
        int result = romanToInt(romanNumeral);
        System.out.println("Integer representation: " + result);
    }

    public static int romanToInt(String s) {
        // Create a map to store the values of Roman numerals
        Map<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        // Iterate through the Roman numeral string from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int value = romanValues.get(c);

            // Check if the current value is less than the previous value
            if (value < prevValue) {
                result -= value; // Subtract the current value
            } else {
                result += value; // Add the current value
            }
            prevValue = value;
        }

        return result;
    }
}
