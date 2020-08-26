package com.damengsanqian.demo.education.mapper;

import com.damengsanqian.demo.education.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    /**
     * 返回所以用户
     * @return 用户列表
     */
    List<User> findAll();

    User findByName(String name,String password);

    User findById(Long id);

    Long insertUser(User user);
}
