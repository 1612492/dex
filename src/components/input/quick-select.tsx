import { useState } from 'react';

import { merge } from '~/utils/classes';

type QuickSelectProps = {
  options: string[];
};

export default function QuickSelect({ options }: QuickSelectProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-x-2">
      {options.map((value, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={merge(
            'w-10 rounded p-1 text-xs',
            active === index
              ? 'bg-blue-800 text-white'
              : 'bg-white text-gray-900 hover:bg-blue-800 hover:text-white'
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
