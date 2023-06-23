'use client';

import { useState } from 'react';
import cl from '_utils/cl';

export default function QuickSelect() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-x-1">
      {['25%', '50%', '100%'].map((value, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={cl(
            'rounded-lg border-gray-100 px-2 py-1 text-xs',
            active === index
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-900 hover:bg-blue-400 hover:text-white'
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
