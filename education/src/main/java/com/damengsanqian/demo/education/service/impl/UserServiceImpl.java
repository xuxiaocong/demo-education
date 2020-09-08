package com.damengsanqian.demo.education.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.damengsanqian.demo.education.entity.User;
import com.damengsanqian.demo.education.mapper.UserMapper;
import com.damengsanqian.demo.education.service.UserService;
import com.damengsanqian.demo.education.viewmodel.user.VmToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public void createRootAccount() {
        User rootUser = userMapper.findByName("root");
        if (rootUser == null) {
            userMapper.insertUser(new User("root", "123456"));
        }
    }

    @Override
    public VmToken login(String name, String password) throws Exception {
        User user = userMapper.findByNameAndPassword(name, password);
        if (user == null) {
            throw new Exception("账户名或密码错误");
        }
        Long expiresTime = System.currentTimeMillis() + 6 * 60 * 60 * 1000;//有效期6小时
        String token = JWT.create()
                .withIssuer("damengsanqian-education")
                .withSubject("damengsanqian-education-web")
                .withAudience(user.getId().toString())
                .withExpiresAt(new Date(expiresTime))
                .withIssuedAt(new Date())
                .sign(Algorithm.HMAC256(user.getPassword()));
        return new VmToken(token, user);
    }

    @Override
    public User find(Long id) {
        return userMapper.findById(id);
    }


//    @Override
//    public List<User> findAll() {
//        return userMapper.findAll();
//    }
//
//
//    @Override
//    public Long register(String name, String password) {
//        User user = new User(name, password);
//        userMapper.insertUser(user);
//        return user.getId();
//    }

}
