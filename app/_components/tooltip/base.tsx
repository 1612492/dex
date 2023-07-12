import { ReactNode, useState } from 'react';

import { merge } from '_utils/classes';

type BaseTooltipProps = {
  content: ReactNode;
  children: ReactNode;
};

export default function BaseTooltip({ children, content }: BaseTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      aria-label="tooltip"
      onMouseMove={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative flex items-center justify-center"
    >
      {children}
      <div
        className={merge(
          'absolute right-0 top-6 z-10 min-w-[10rem] select-text rounded bg-gray-400 p-2 text-left text-xs text-gray-100 duration-300',
          isOpen ? 'visible scale-100 opacity-100' : 'invisible scale-75 opacity-0'
        )}
      >
        {content}
      </div>
    </button>
  );
}
