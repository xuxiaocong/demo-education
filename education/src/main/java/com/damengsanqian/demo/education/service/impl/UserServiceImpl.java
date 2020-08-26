package com.damengsanqian.demo.education.service.impl;

import com.damengsanqian.demo.education.entity.User;
import com.damengsanqian.demo.education.mapper.UserMapper;
import com.damengsanqian.demo.education.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> findAll() {
        return userMapper.findAll();
    }

    @Override
    public User find(String name, String password) throws Exception {
        User user = userMapper.findByName(name, password);
        if (user == null) {
            throw new Exception("账户名或密码错误");
        }
        return user;
    }

    @Override
    public User find(Long id) {
        return userMapper.findById(id);
    }

    @Override
    public Long register(String name, String password) {
        User user = new User(name, password);
        userMapper.insertUser(user);
        return user.getId();
    }
}
