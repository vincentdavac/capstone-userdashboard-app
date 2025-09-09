import React from 'react';
import RecoverAccount from './RecoverAccount';

interface AccountRecoveryModalProps {
  show: boolean;
  onClose: () => void;
  onOpenLogin?: () => void;
  onOpenRegister?: () => void;
}

const ModalRecoverAccount: React.FC<AccountRecoveryModalProps> = ({
  show,
  onClose,
  onOpenLogin,
  onOpenRegister,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Gray background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose} // close when clicking outside
      ></div>

      {/* Modal content */}
      <div className="relative z-10 w-3/4 max-h bg-white rounded-lg shadow-lg overflow-auto flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <RecoverAccount
          onOpenLogin={onOpenLogin}
          onOpenRegister={onOpenRegister}
        />
      </div>
    </div>
  );
};

export default ModalRecoverAccount;
