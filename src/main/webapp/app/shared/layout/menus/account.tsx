import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';
import { Translate } from 'react-jhipster';
import { useNavigate } from 'react-router';

const accountMenuItemsAuthenticated = [
  {
    key: 'settings',
    icon: 'wrench',
    label: <Translate contentKey="global.menu.account.settings">Settings</Translate>,
  },
  {
    key: 'passwordItem',
    icon: 'lock',
    label: <Translate contentKey="global.menu.account.password">Settings</Translate>,
  },
  {
    key: 'logout',
    icon: 'sign-out-alt',
    label: <Translate contentKey="global.menu.account.logout">Settings</Translate>,
  },
];

const accountMenuItems = [
  {
    key: 'login',
    label: <Translate contentKey="global.menu.account.login">Sign in</Translate>,
  },
  {
    key: 'register',
    label: <Translate contentKey="global.menu.account.register"> Register</Translate>,
  },
];

export const AccountMenu = ({ isAuthenticated = false }) => {
  const navigate = useNavigate();

  const handleMenuClick = (event: any) => {
    const key = event.key;
    switch (key) {
      case 'login':
        navigate('login');
        break;
      case 'register':
        navigate('register');
        break;
      case 'logout':
        navigate('logout');
        break;
      case 'settings':
        navigate('settings');
        break;
      case 'passwordItem':
        navigate('password');
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown
      menu={{ items: !isAuthenticated ? accountMenuItems : accountMenuItemsAuthenticated, onClick: handleMenuClick }}
      trigger={['click']}
    >
      <Space>
        <span
          className="text-white"
          onClick={e => {
            e.preventDefault();
          }}
        >
          <Translate contentKey="global.menu.account.main">Account</Translate>
          <DownOutlined />
        </span>
      </Space>
    </Dropdown>
  );
};

export default AccountMenu;
