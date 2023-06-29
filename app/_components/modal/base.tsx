import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { merge } from '_utils/classes';

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function BaseModal({ open, onClose, children }: BaseModalProps) {
  return (
    <div
      aria-hidden={!open}
      role="presentation"
      onClick={onClose}
      className={merge(
        'fixed inset-0 z-10 flex items-start justify-center bg-gray-500 bg-opacity-75 duration-300',
        open ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <div
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        className={merge(
          'mx-2 my-2 min-h-min w-full max-w-md overflow-y-auto rounded-lg bg-white shadow-xl duration-300 sm:my-8',
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
}
