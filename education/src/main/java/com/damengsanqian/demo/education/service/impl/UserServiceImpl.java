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
}
