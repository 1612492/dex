'use client';

import { Fragment, useState } from 'react';

import SlippageModal from '~/components/modal/slippage-modal';
import EditIcon from '~/images/edit.svg';

export default function Slippage() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="my-4 flex items-center justify-between px-2 text-sm">
        <div className="flex items-center gap-x-1">
          <span className="text-sm text-gray-900">Slippage Tolerance</span>
          <button
            aria-label="edit"
            onClick={() => setOpen(true)}
            className="rounded-lg p-1 text-blue-800 hover:bg-gray-100"
          >
            <EditIcon className="h-4 w-4" />
          </button>
        </div>
        <span className="text-sm text-gray-900">0.5%</span>
      </div>
      <SlippageModal open={open} onClose={() => setOpen(false)} />
    </Fragment>
  );
}
