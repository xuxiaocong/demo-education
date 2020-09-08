package com.damengsanqian.demo.education.mapper;

import com.damengsanqian.demo.education.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    User findByName(String name);

    User findByNameAndPassword(String name, String password);

    Long insertUser(User user);

    User findById(Long id);

//    /**
//     * 返回所以用户
//     *
//     * @return 用户列表
//     */
//    List<User> findAll();

}
