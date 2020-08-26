package com.damengsanqian.demo.education.service;

import com.damengsanqian.demo.education.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();

    User find(String name, String password) throws Exception;

    User find(Long id);

    Long register(String name,String password);
}
