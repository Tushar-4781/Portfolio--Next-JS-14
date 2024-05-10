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
        menu={{
          items,
          onClick: (e) => {
            const targetElement = document.getElementById(e.key.toLowerCase());
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          },
        }}
        placement='bottomLeft'
      >
        <button
          type='button'
          className='fw-600'
          style={{
            background: '#ffdb6d',
            border: 'none',
            borderRadius: 6,
            padding: '0 32px',
          }}
        >
          Links
        </button>
      </Dropdown>
    </>
  );
};

export default NavDropdown;
