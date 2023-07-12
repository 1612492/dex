import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import ChevronIcon from '~/images/chevron.svg';
import { merge } from '~/utils/classes';

type AccordionProps = {
  children: ReactNode | ((isOpen: boolean) => ReactNode);
};

export default function Accordion({ children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded bg-white">
      <div className="flex p-4">
        <div
          className={merge(
            'flex-1 transition-[max-height] duration-300 ease-in',
            isOpen ? 'max-h-80' : 'max-h-0'
          )}
        >
          {typeof children === 'function' ? children(isOpen) : children}
        </div>
        <button
          aria-label="toggle"
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="self-start rounded-lg p-2 text-gray-900 hover:bg-gray-100"
        >
          <ChevronIcon
            className={merge('h-5 w-5 duration-300', isOpen ? 'rotate-0' : 'rotate-180')}
          />
        </button>
      </div>
    </div>
  );
}
