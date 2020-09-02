package com.damengsanqian.demo.education.service;

import com.damengsanqian.demo.education.entity.User;

import java.util.List;

public interface UserService {
    /**
     * 创建管理员账户
     */
    void createRootAccount();

    /**
     * 登录
     * @param name 用户名
     * @param password 密码
     * @return 用户
     * @throws Exception
     */
    User login(String name, String password) throws Exception;



//    List<User> findAll();
//
//
//    User find(Long id);
//
//    Long register(String name, String password);

}
