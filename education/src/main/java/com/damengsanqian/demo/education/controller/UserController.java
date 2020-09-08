package com.damengsanqian.demo.education.controller;

import com.damengsanqian.demo.education.configs.auth.AuthToken;
import com.damengsanqian.demo.education.configs.auth.PassToken;
import com.damengsanqian.demo.education.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PassToken
    @RequestMapping("/login")
    public String login(@RequestParam("name") String name, @RequestParam("password") String password) throws Exception {
        return userService.login(name, password);
    }

    @RequestMapping("/check")
    public String Check() {
        return "需要验证";
    }


//    @RequestMapping("/findAll")
//    public List<User> findAll() {
//        return userService.findAll();
//    }
//
//    @RequestMapping("/findById")
//    public User findById(Long id) {
//        return userService.find(id);
//    }
//
//
//    @PostMapping("/register")
//    public Long Register(@RequestBody() VmUser vmUser) {
//        return userService.register(vmUser.getName(), vmUser.getPassword());
//    }
}
