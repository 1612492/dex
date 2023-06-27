import { ReactNode, useState } from 'react';
import { merge } from '_utils/classes';

type BaseTooltipProps = {
  hint: ReactNode;
  children: ReactNode;
};

export default function BaseTooltip({ children, hint }: BaseTooltipProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <button
      onMouseMove={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative flex items-center justify-center"
    >
      {children}
      <div
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        className={merge(
          'absolute -right-2 top-6 z-10 min-w-[10rem] select-text rounded bg-gray-400 p-2 text-left text-xs text-gray-100 duration-300',
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        )}
      >
        {hint}
      </div>
    </button>
  );
}
