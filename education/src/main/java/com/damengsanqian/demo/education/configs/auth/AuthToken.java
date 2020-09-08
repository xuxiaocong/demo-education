package com.damengsanqian.demo.education.configs.auth;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 检查Token
 * 过滤器中默认启用，目前该字段不使用
 * 如要使用请同步修改权限过滤器
 */
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface AuthToken {
    boolean required() default true;
}
