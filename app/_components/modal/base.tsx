import { ReactNode } from 'react';
import { merge } from '_utils/classes';

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function BaseModal({ open, onClose, children }: BaseModalProps) {
  return (
    <div
      style={{ visibility: open ? 'visible' : 'hidden' }}
      className={merge(
        'fixed inset-0 z-10 flex items-start justify-center bg-gray-500 bg-opacity-75 duration-300',
        open ? 'opacity-100' : 'opacity-0'
      )}
      onClick={onClose}
    >
      <div
        className={merge(
          'min-h-min w-full max-w-md overflow-y-auto rounded-lg bg-white shadow-xl duration-300 sm:my-8',
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
