import React from 'react';
import PasswordReset from './PasswordReset';

const PasswordResetLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 px-4 dark:bg-boxdark">
      {/* Logo + tagline */}
      <div className="flex  flex-col items-center text-center p-6 ">
        <img
          src="/logo/Logo_light_mode.svg"
          alt="Logo"
          className="h-12 mb-2 block md:hidden"
        />
        <p className="text-sm text-gray-700 max-w-md dark:text-white block md:hidden">
          Stay Informed, Stay Safe, Stay Ahead
        </p>
      </div>

      {/* Main content here */}
      <div className="flex items-center justify-center">
        <PasswordReset />
      </div>
    </div>
  );
};
export default PasswordResetLayout;
