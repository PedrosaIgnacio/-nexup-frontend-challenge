import React from 'react';
import NexupLogo from '../assets/nexup-health.png';

export const AppHeader: React.FC = () => {
  return (
    <div className="w-full py-2 px-3 bg-white">
      <img src={NexupLogo} alt="nexup-logo" className="w-24" />
    </div>
  );
};
