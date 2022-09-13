import { Button, Navbar } from 'components';
import React from 'react';

type HeaderFooterProps = {
  children: React.ReactNode;
};

export const HeaderFooter: React.FC<HeaderFooterProps> = ({ children }) => {
  const logo = {
    url: 'https://collectingcars.com/',
    alt: 'Collecting Cars logo',
  };
  return (
    <div>
      <Navbar>
        <Button label="sell with us" onClick={() => console.log('sell')} />
        <Button
          label="login"
          variant="secondary"
          onClick={() => console.log('login')}
        />
      </Navbar>
      {children}
    </div>
  );
};
