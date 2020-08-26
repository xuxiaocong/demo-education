package com.damengsanqian.demo.education.controller;

import com.damengsanqian.demo.education.entity.User;
import com.damengsanqian.demo.education.service.UserService;
import com.damengsanqian.demo.education.viewmodel.user.VmUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/findAll")
    public List<User> findAll() {
        return userService.findAll();
    }

    @RequestMapping("/findById")
    public User findById(Long id) {
        return userService.find(id);
    }

    @RequestMapping("/find")
    public User find(@RequestParam("name") String name, @RequestParam("password") String password) throws Exception {
        return userService.find(name, password);
    }

    @PostMapping("/register")
    public Long Register(@RequestBody() VmUser vmUser) {
        return userService.register(vmUser.getName(), vmUser.getPassword());
    }
}
