package com.damengsanqian.demo.education.viewmodel.user;

import com.damengsanqian.demo.education.entity.User;

public class VmToken {
    private String token;

    private VmUser user;

    public VmToken(String token, VmUser user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public VmUser getUser() {
        return user;
    }

    public void setUser(VmUser user) {
        this.user = user;
    }

}
