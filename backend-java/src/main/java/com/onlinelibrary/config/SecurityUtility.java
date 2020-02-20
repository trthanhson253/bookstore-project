package com.onlinelibrary.config;

import org.springframework.context.annotation.Bean;

import java.util.Random;

public class SecurityUtility {
    @Bean
    public static String randomPassword() {
        String SALTCHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();

        while(salt.length() < 18) {
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }

        String saltStr = salt.toString();
        return saltStr;
    }
}
