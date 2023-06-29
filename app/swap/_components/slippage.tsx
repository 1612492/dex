'use client';

import { Fragment, useState } from 'react';

import EditIcon from '_images/edit.svg';

import SlippageModal from './slippage-modal';

export default function Slippage() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="my-4 flex items-center justify-between px-2 text-sm">
        <div className="flex items-center gap-x-1">
          <span className="text-xs text-gray-900 sm:text-sm">Slippage Tolerance</span>
          <button
            aria-label="edit"
            onClick={() => setOpen(true)}
            className="rounded-lg p-1 text-blue-800 hover:bg-gray-100"
          >
            <EditIcon className="h-3 w-3 md:h-4 md:w-4" />
          </button>
        </div>
        <span className="text-xs text-gray-900 sm:text-sm">0.5%</span>
      </div>
      <SlippageModal open={open} onClose={() => setOpen(false)} />
    </Fragment>
  );
}
