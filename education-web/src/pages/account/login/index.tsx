import React, { FC } from 'react';
import styles from './index.less';
import { getUsername, getPassword, setUsername, setPassword, login } from './service';
import { Button, Checkbox, Modal, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login: FC = () => {
    const onFinish = (form: any) => {
        setUsername(form.username);
        setPassword(form.remember ? form.password : '');
        login(form.username, form.password).then((value) => console.log(value));
    }
    return (
        <Modal
            title="XX管理系统"
            visible={true}
            footer={null}
        >
            <Form
                initialValues={{
                    username: getUsername(),
                    password: getPassword(),
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

export default Login;