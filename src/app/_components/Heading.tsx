import React, { CSSProperties, ReactNode } from 'react';

const Heading = ({
  style,
  children,
}: {
  style?: CSSProperties;
  children?: ReactNode;
}) => {
  return (
    <p
      className='fw-600 c0'
      style={{ fontSize: '2rem', padding: '18px 0px', ...style }}
    >
      {children}
    </p>
  );
};

export default Heading;
