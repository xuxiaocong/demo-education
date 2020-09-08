package com.damengsanqian.demo.education.viewmodel.user;

import com.damengsanqian.demo.education.entity.User;

public class VmToken {
    private String token;

    private User user;

    public VmToken(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
