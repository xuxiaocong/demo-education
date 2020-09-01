import React, { FC, useState } from 'react';
import './App.css';
import { Layout, Menu, Row } from 'antd';
import { UserOutlined, MenuUnfoldOutlined, UploadOutlined, VideoCameraOutlined, MenuFoldOutlined } from '@ant-design/icons'

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="max-height">
      <Layout className="max-height">
        <Layout.Sider trigger={null} collapsible collapsed={collapsed} className="max-height">
          <div className="layout-logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header className="layout-header" style={{ padding: 0 }}>
            <Row justify="space-between">
              <MenuUnfoldOutlined hidden={!collapsed} onClick={() => setCollapsed(!collapsed)} className="trigger" />
              <MenuFoldOutlined hidden={collapsed} onClick={() => setCollapsed(!collapsed)} className="trigger" />
              <span>LaoWang</span>
            </Row>
          </Layout.Header>
          <Layout.Content
            className="layout-content"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 580,
            }}
          >
            Content
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App;
