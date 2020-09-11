import React, { FC } from 'react';
import { connect, ConnectProps, LoginState } from 'umi';
import { Button, Checkbox, Modal, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface PageProps extends ConnectProps {
    login: LoginState;
}

const Login: FC<PageProps> = ({ login, dispatch }) => {
    const onFinish = (form: any) => {
        dispatch!({
            type: 'login/loginRequest',
            payload: { ...form }
        })
    }
    return (
        <Modal
            title="XX管理系统"
            visible={true}
            footer={null}
        >
            <Form
                initialValues={{ ...login }}
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

export default connect(({ login }: { login: LoginState }) => (({ login })))(Login);