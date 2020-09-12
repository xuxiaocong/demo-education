package com.damengsanqian.demo.education.viewmodel.user;

import com.damengsanqian.demo.education.entity.User;

public class VmUser {
    private String name;

    public VmUser(User user) {
        this.name = user.getName();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
