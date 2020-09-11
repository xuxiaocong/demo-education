import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';

const UnauthorizedPage: FC = () => (
    <Result
        status="403"
        title="401"
        subTitle="身份认证失效或权限不足！"
        extra={
            <Button type="primary" onClick={() => history.push("/account/login")}>
                去登录
        </Button>
        }
    />
);

export default UnauthorizedPage;