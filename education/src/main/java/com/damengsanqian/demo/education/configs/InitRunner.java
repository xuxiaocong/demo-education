package com.damengsanqian.demo.education.configs;

import com.damengsanqian.demo.education.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * 创建root账户
 */
@Component
public class InitRunner implements CommandLineRunner {
    @Autowired
    private UserService userService;

    @Override
    public void run(String... args) {
        userService.createRootAccount();
    }
}
