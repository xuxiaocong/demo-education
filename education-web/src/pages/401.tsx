import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';

const UnauthorizedPage: FC = () => (
    <Result
        status="403"
        title="401"
        subTitle="未登陆或身份信息已过期，请重新登陆！"
        extra={
            <Button type="primary" onClick={() => history.push("/account/login")}>
                去登录
        </Button>
        }
    />
);

export default UnauthorizedPage;