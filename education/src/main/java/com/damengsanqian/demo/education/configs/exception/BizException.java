package com.damengsanqian.demo.education.configs.exception;

import org.springframework.http.HttpStatus;

/**
 * 错误处理类
 */
public class BizException extends RuntimeException {

    private HttpStatus status;
    private String message;

    public BizException(HttpStatus status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

    public BizException(HttpStatus status) {
        this(status, status.getReasonPhrase());
    }

    public HttpStatus getStatus() {
        return status;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
