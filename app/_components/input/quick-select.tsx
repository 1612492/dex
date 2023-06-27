import { useState } from 'react';

import { merge } from '_utils/classes';

export default function QuickSelect() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-x-2">
      {['25%', '50%', '100%'].map((value, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={merge(
            'rounded-md px-2 py-1 text-xs',
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
