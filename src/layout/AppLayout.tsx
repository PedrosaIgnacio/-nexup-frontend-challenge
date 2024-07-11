import React from 'react';
import { AppHeader } from '../components/AppHeader';

interface AppLayoutProps {
  children: JSX.Element;
}

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="bg-[#EFF2F8] min-h-screen w-full">
      <AppHeader />
      <div className="px-2 md:px-20 lg:px-40">{children}</div>
    </div>
  );
};
