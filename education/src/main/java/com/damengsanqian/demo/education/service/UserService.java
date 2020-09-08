package com.damengsanqian.demo.education.service;

import com.damengsanqian.demo.education.entity.User;
import com.damengsanqian.demo.education.viewmodel.user.VmToken;

public interface UserService {
    /**
     * 创建管理员账户
     */
    void createRootAccount();

    /**
     * 登录
     *
     * @param name     用户名
     * @param password 密码
     * @return 返回 jwt token对象
     * @throws Exception
     */
    VmToken login(String name, String password) throws Exception;

    User find(Long id);

//    List<User> findAll();


//    Long register(String name, String password);

}
