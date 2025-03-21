import React, { useState } from 'react';
import { languages, locales } from 'app/config/translation';
import { Button, Dropdown, Menu, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Storage, Translate } from 'react-jhipster';
import { useAppDispatch } from 'app/config/store';
import { setLocale } from 'app/shared/reducers/locale';

interface LanguageDropdownProps {
  currentLocale: string;
}

const LanguageDropdown = ({ currentLocale }: LanguageDropdownProps) => {
  const dispatch = useAppDispatch();
  const handleMenuClick = (event: any) => {
    const langKey = event.key;
    Storage.session.set('locale', langKey);
    dispatch(setLocale(langKey));
  };

  const items: MenuProps['items'] = locales.map(locale => ({
    label: languages[locale].name,
    key: locale,
  }));

  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['click']}>
      <Space>
        <span
          className="text-white"
          onClick={e => {
            e.preventDefault();
          }}
        >
          <Translate contentKey="global.menu.language">{currentLocale}</Translate>
          <DownOutlined />
        </span>
      </Space>
    </Dropdown>
  );
};

export default LanguageDropdown;
