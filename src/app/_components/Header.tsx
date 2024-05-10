'use client';

import Link from 'next/link';
import React from 'react';
import NavDropdown from './NavDropdown';

const Header = () => {
  return (
    <div
      style={{
        background: '#FFEDC8',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
      }}
    >
      <div
        className='d-flex justify-sb'
        style={{
          gap: '2rem',
          maxWidth: 1512,
          padding: '20px 32px',
          margin: 'auto',
        }}
      >
        <p className='fw-500 ff-qs c0' style={{ fontSize: '1.5rem' }}>
          Portfolio
        </p>
        <div id='nav-links' className='d-flex' style={{ gap: '4rem' }}>
          {['About', 'Skills', 'Experience', 'Recommendations', 'Products'].map(
            (e) => (
              <button
                type='button'
                onClick={() => {
                  const targetElement = document.getElementById(
                    e.toLowerCase()
                  );
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                key={e}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className='place-middle ff-qs fw-500 fs-md'
              >
                {e}
              </button>
            )
          )}
        </div>
        <NavDropdown />
      </div>
    </div>
  );
};

export default Header;
