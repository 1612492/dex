import { useState } from 'react';

import { merge } from '~/utils/classes';

type Option<T> = {
  display: string;
  value: T;
};

type ModeSelectProps<T> = {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
};

export default function ModeSelect<T>({ value, options, onChange }: ModeSelectProps<T>) {
  return (
    <div className="flex gap-x-1">
      {options.map((mode, index) => (
        <button
          key={index}
          onClick={() => onChange(options[index].value)}
          className={merge(
            'px-1',
            'text-sm sm:text-base',
            value === mode.value ? 'text-blue-800' : 'text-gray-900 hover:text-blue-800'
          )}
        >
          {mode.display}
        </button>
      ))}
    </div>
  );
}
