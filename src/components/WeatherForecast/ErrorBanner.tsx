import React from 'react';

export const ErrorBanner: React.FC<{ message: string; onRetry?: () => void }> = ({ message, onRetry }) => (
  <div className="error flex" role="alert">
    <span>{message}</span>
    {onRetry && <button onClick={onRetry}>Retry</button>}
  </div>
);