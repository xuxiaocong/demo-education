package com.damengsanqian.demo.education.entity;

import java.io.Serializable;

/**
 * 用户表
 */
public class User implements Serializable {

    private Long id;
    private String name;
    private String password;
    private Long gmt_create;
    private Long gmt_modified;

    public User() {
        this.id = null;
        this.name = "";
        this.password = "";
        this.gmt_create = System.currentTimeMillis();
        this.gmt_modified = System.currentTimeMillis();
    }

    /**
     * 初始化
     *
     * @param name     用户名
     * @param password 密码密码，未加密
     */
    public User(String name, String password) {
        this.name = name;
        this.password = password;
        this.gmt_create = System.currentTimeMillis();
        this.gmt_modified = System.currentTimeMillis();
    }

    /**
     * 加密
     */
    public void EncryptPassword(){

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getGmt_create() {
        return gmt_create;
    }

    public void setGmt_create(Long gmt_create) {
        this.gmt_create = gmt_create;
    }

    public Long getGmt_modified() {
        return gmt_modified;
    }

    public void setGmt_modified(Long gmt_modified) {
        this.gmt_modified = gmt_modified;
    }
}
