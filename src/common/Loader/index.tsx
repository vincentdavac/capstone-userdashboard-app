import React from 'react';

interface LoaderProps {
  title?: string;
  description?: string;
}

const Loader: React.FC<LoaderProps> = ({ title, description }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white space-y-4 dark:bg-gray-900 ">
      {/* Loader GIF */}
      <img
        src="/loader/Loader.gif"
        alt="Loading..."
        className="h-35 w-35 object-contain"
      />

      {/* Title */}
      {/* <h2 className="text-xl font-semibold text-gray-800">{title}</h2> */}
      <img
        className="dark:hidden h-10 mx-auto"
        src="/logo/x-stream-text-logo.svg"
        alt="Logo"
      />

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-500 text-center px-4 dark:text-white">
          {description}
        </p>
      )}
    </div>
  );
};

export default Loader;
