'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import Modal from '_components/modal';
import dai from '_images/dai.png';
import QuickSelect from '_components/input/quick-select';
import ChevronIcon from '_components/icon/chevron';

type CoinInputProps = {
  label: string;
  quickSelect?: boolean;
};

export default function CoinInput({ label, quickSelect = false }: CoinInputProps) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <article className="mb-4 rounded-lg bg-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-light text-gray-900">{label}</div>
          {quickSelect ? <QuickSelect /> : null}
        </div>
        <article className="mb-1 mt-3 flex">
          <input placeholder="0" className="text-bold flex-1 bg-gray-100 text-2xl outline-0" />
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-x-2 rounded-lg px-2 py-1 hover:bg-white"
          >
            <div className="flex items-center gap-x-2">
              <Image src={dai} alt="dai" className="h-8 w-8" />
              <span className="text-lg">DAI</span>
            </div>
            <ChevronIcon direction="down" />
          </button>
        </article>
        <div className="text-sm font-light text-gray-400">Balance: 0</div>
      </article>
      <Modal open={open} onClose={() => setOpen(false)}>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </Fragment>
  );
}
