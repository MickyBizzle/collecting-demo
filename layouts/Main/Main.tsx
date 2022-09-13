import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <p>Main layout</p>
      {children}
    </div>
  );
};
