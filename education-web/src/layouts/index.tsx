import React, { FC } from 'react';
import { connect, ConnectProps, LayoutState } from 'umi';
import { Layout, Menu, Row, Col, Dropdown } from 'antd';
import styles from './index.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    TeamOutlined,
    DownOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

interface PageProps extends ConnectProps {
    layout: LayoutState;
}

const BasicLayout: FC<PageProps> = ({ layout, dispatch, children }) => {
    if (!layout.showLayout) {
        return <>{children}</>
    }

    const changCollapsed = (collapsed: boolean) => {
        dispatch!({
            type: 'layout/saveState',
            payload: { collapsed }
        })
    }

    const userMenuClick = (e: any) => {
        switch (e.key) {
            case 'logout':
                dispatch!({
                    type: 'layout/logout'
                });
                break;
        }
    }

    return (
        <Layout className={styles.layout}>
            <Layout.Sider collapsed={layout.collapsed}>
                <div className={styles.title}>
                    <img className={layout.collapsed ? styles.logoCollapsed : styles.logo} />
                    <h1 className={layout.collapsed ? styles.siteNameCollapsed : styles.siteName}>网站名称</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<TeamOutlined />}>
                        用户管理
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{ padding: 0 }}>
                    <div className={styles.header}>
                        <Row justify="space-between">
                            <Col span={1} className={styles.left}>
                                <MenuUnfoldOutlined hidden={!layout.collapsed} onClick={() => changCollapsed(false)} />
                                <MenuFoldOutlined hidden={layout.collapsed} onClick={() => changCollapsed(true)} />
                            </Col>
                            <Col span={4} className={styles.right}>
                                <Dropdown
                                    overlay={
                                        <Menu onClick={userMenuClick}>
                                            <Menu.Item key="logout">
                                                <LogoutOutlined />
                                                <span>退出登录</span>
                                            </Menu.Item>
                                        </Menu>
                                    }
                                >
                                    <a onClick={e => e.preventDefault()}>
                                        <span>Hi, {layout.user?.name} !</span>
                                        <DownOutlined className={styles.userDropdown} />
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </Layout.Header>
                <Layout.Content className={styles.content}>
                    <div className={styles.path}>
                        面包屑路径
                    </div>
                    <div className={styles.page}>
                        {children}
                    </div>
                </Layout.Content>
                <Layout.Footer className={styles.footer}>
                    ©2020 Create by damengsanqian - {process.env.VERSION}
                </Layout.Footer>
            </Layout>
        </Layout>
    )
}

export default connect(({ layout }: { layout: LayoutState }) => ({ layout }))(BasicLayout);