import { useState } from 'react';

import { merge } from '_utils/classes';

export default function ModeSelect() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-x-1">
      {['Swap', 'Limit'].map((mode, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={merge(
            'px-1',
            'text-sm sm:text-base',
            active === index ? 'text-blue-800' : 'text-gray-900 hover:text-blue-800'
          )}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
