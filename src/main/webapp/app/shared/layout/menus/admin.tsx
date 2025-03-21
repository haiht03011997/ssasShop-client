import { Dropdown, Space } from 'antd';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';

import { Translate, translate } from 'react-jhipster';
import { useNavigate } from 'react-router-dom';

const adminMenuItems = [
  {
    key: 'userManagement',
    icon: 'users',
    label: <Translate contentKey="global.menu.admin.userManagement">User management</Translate>,
  },
  {
    key: 'metrics',
    icon: 'tachometer-alt',
    label: <Translate contentKey="global.menu.admin.metrics">Metrics</Translate>,
  },
  {
    key: 'health',
    icon: 'heart',
    label: <Translate contentKey="global.menu.admin.health">Health</Translate>,
  },
  {
    key: 'configuration',
    icon: 'cogs',
    label: <Translate contentKey="global.menu.admin.configuration">Configuration</Translate>,
  },
  {
    key: 'logs',
    icon: 'tasks',
    label: <Translate contentKey="global.menu.admin.logs">Logs</Translate>,
  },
];

export const AdminMenu = ({ showOpenAPI }) => {
  const navigate = useNavigate();

  const handleMenuClick = (event: any) => {
    const key = event.key;
    switch (key) {
      case 'userManagement':
        navigate('/admin/user-management');
        break;
      case 'logs':
        navigate('/admin/logs');
        break;
      default:
        break;
    }
  };

  return (
    <Dropdown menu={{ items: adminMenuItems, onClick: handleMenuClick }} trigger={['click']}>
      <Space>
        <span
          className="text-white"
          onClick={e => {
            e.preventDefault();
          }}
        >
          <Translate contentKey="global.menu.admin.main" />
          <DownOutlined />
        </span>
      </Space>
    </Dropdown>
  );
};

export default AdminMenu;
