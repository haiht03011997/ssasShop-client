import './header.scss';

import React, { useState } from 'react';

import { Dropdown, Menu, MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { useAppDispatch } from 'app/config/store';
import { Container } from 'reactstrap';
import { AccountMenu, AdminMenu } from '../menus';
import LanguageDropdown from '../menus/language-dropdown';
import Search from 'antd/es/input/Search';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isOpenAPIEnabled: boolean;
  currentLocale: string;
}

const HeaderComponent = (props: IHeaderProps) => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
      children: [
        {
          label: '1st menu item',
          key: '1',
          icon: <UserOutlined />,
        },
      ],
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = e => {
    // eslint-disable-next-line no-console
    console.log('click', e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const handleSearch = (searchText: string) => {
    // eslint-disable-next-line no-console
    console.log('search:', searchText);
  };

  return (
    <Header className="header">
      <Container className="d-flex gap-3 justify-content-center align-items-center">
        <div className="demo-logo">Website-demo.com.vn</div>
        <Dropdown.Button size="large" className="w-auto" menu={menuProps}>
          Danh mục
        </Dropdown.Button>
        <Search className="w-50" size="large" placeholder="Nhập giá trị tìm kiếm" onSearch={handleSearch} enterButton />
        {props.isAuthenticated && props.isAdmin && <AdminMenu showOpenAPI={props.isOpenAPIEnabled} />}
        <LanguageDropdown currentLocale={props.currentLocale} />
        <AccountMenu isAuthenticated={props.isAuthenticated} />
      </Container>
    </Header>
  );
};

export default HeaderComponent;
