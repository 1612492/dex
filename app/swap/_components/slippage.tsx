'use client';

import { Fragment, useState } from 'react';
import PenIcon from '_components/icon/pen';
import SlippageModal from './slippage-modal';

export default function Slippage() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="my-4 flex items-center justify-between px-2 text-sm">
        <div className="flex items-center gap-x-1">
          <span>Slippage Tolerance</span>
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-blue-500 hover:bg-gray-100"
          >
            <PenIcon />
          </button>
        </div>
        <span>0.5%</span>
      </div>
      <SlippageModal open={open} onClose={() => setOpen(false)} />
    </Fragment>
  );
}
