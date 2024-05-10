import Link from 'next/link';
import React from 'react';
import NavDropdown from './NavDropdown';

const Header = () => {
  return (
    <div
      style={{
        background: '#FFEDC8',
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
        <p className='fw-500 ff-qs' style={{ fontSize: '1.5rem' }}>
          Portfolio
        </p>
        <div id='nav-links' className='d-flex' style={{ gap: '4rem' }}>
          {['About', 'Skills', 'Experience', 'Recommendations', 'Products'].map(
            (e) => (
              <Link
                href={`/${e.toLowerCase()}`}
                key={e}
                style={{ color: '#000' }}
                className='place-middle ff-qs fw-500 fs-md'
              >
                {e}
              </Link>
            )
          )}
        </div>
        <NavDropdown />
      </div>
    </div>
  );
};

export default Header;
