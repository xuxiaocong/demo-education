import React, { FC, useState } from 'react';
import './Login.css';
import { Form, Input, Checkbox, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AccessStore from '../../store/AccessStore';

const Login: FC = () => {
    const onFinish = (form: any) => {
        AccessStore.setUsername(form.username);
        AccessStore.setPassword(form.remember ? form.password : '');
    }

    return (
        <Modal
            title="XX管理系统"
            visible={true}
            footer={null}
        >
            <Form
                name="normal_login"
                initialValues={{
                    username: AccessStore.getUsername(),
                    password: AccessStore.getPassword(),
                    remember: true
                }}
                onFinish={onFinish}
            >
                <Form.Item name="username"
                    rules={[{ required: true, message: '请填写账号!' }]}
                >
                    <Input
                        placeholder="账号"
                        prefix={<UserOutlined />}
                        size="large"
                    />
                </Form.Item>
                <Form.Item name="password"
                    rules={[{ required: true, message: '请填写密码!' }]}
                >
                    <Input
                        placeholder="密码"
                        prefix={<LockOutlined />}
                        size="large"
                        type="password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Login