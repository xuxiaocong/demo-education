import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';

const NotFoundPage: FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="糟糕了，页面被外星人抓走了"
        extra={
            <Button type="primary" onClick={() => history.push("/")}>
                返回首页
        </Button>
        }
    />
);

export default NotFoundPage;