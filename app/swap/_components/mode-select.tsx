import cl from '_utils/cl';
import { useState } from 'react';

export default function ModeSelect() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-x-1">
      {['Swap', 'Limit'].map((mode, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={cl(
            'px-1',
            active === index ? 'text-blue-500' : 'text-gray-500 hover:text-blue-400'
          )}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
