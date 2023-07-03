'use client';

import { useState } from 'react';

import pools from '_config/pools.json';
import CardsIcon from '_images/cards.svg';
import RowsIcon from '_images/rows.svg';
import { merge } from '_utils/classes';

import Cards from './_components/cards';
import Rows from './_components/rows';

enum Mode {
  Row,
  Card,
}

export default function Page() {
  const [mode, setMode] = useState(Mode.Card);
  const View = mode === Mode.Row ? Rows : Cards;

  return (
    <section className="mx-auto px-4 py-4 md:container">
      <header className="my-4 flex items-center justify-end">
        <button
          aria-label="rows"
          onClick={() => setMode(Mode.Row)}
          className={merge(
            'flex items-center justify-center rounded p-1 hover:bg-white',
            mode === Mode.Row ? 'text-blue-800' : 'text-gray-400'
          )}
        >
          <RowsIcon className="h-5 w-5" />
        </button>
        <button
          aria-label="cards"
          onClick={() => setMode(Mode.Card)}
          className={merge(
            'flex items-center justify-center rounded p-1 hover:bg-white',
            mode === Mode.Card ? 'text-blue-800' : 'text-gray-400'
          )}
        >
          <CardsIcon className="h-5 w-5" />
        </button>
      </header>
      <section>
        <View />
      </section>
    </section>
  );
}
