'use client';

import { Dropdown, MenuProps } from 'antd';
import React from 'react';

const NavDropdown = () => {
  const items: MenuProps['items'] = [
    'About',
    'Skills',
    'Experience',
    'Recommendations',
    'Products',
  ].map((name) => ({
    key: name,
    label: name,
  }));
  return (
    <>
      <Dropdown
        className='nav-dropdown'
        menu={{ items }}
        placement='bottomLeft'
      >
        <div>Links</div>
      </Dropdown>
    </>
  );
};

export default NavDropdown;
