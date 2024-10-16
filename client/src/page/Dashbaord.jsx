import { Avatar, Button, Card, Space, Typography } from 'antd';
import React from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { UserOutlined } from '@ant-design/icons';

const Dashboard = () => {
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <Card className='profile-card'>
      <Space direction="vertical" size="small" align='center'>
        <Avatar size={150} icon={<UserOutlined />} className='avatar' />
        <Typography.Title level={2} strong className='username'>
           {userData.name}
        </Typography.Title>
        <Typography.Text type='secondary' strong>
          Email: {userData.email}
        </Typography.Text>
        <Typography.Text type='secondary'>
          Role: {userData.role}
        </Typography.Text>
        <Button size="large" type="primary" className='Profile-btn' onClick={handleLogout}>
          Logout
        </Button>
      </Space>
    </Card>
  );
};

export default Dashboard;
