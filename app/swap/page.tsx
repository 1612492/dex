import ReloadIcon from '_components/icon/reload';
import CoinInput from '_components/input/coin';
import ModeSelect from './_components/mode-select';

export default function Page() {
  return (
    <section className="container mx-auto flex justify-center">
      <section className="mt-8 w-[420px] rounded-xl bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <ModeSelect />
          <div className="flex items-center">
            <button>
              <ReloadIcon />
            </button>
          </div>
        </div>
        <CoinInput label="From" quickSelect />
        <CoinInput label="To" />
        <div className="mb-4 flex items-center justify-between text-sm font-light">
          <span>Slippage Tolerance</span>
          <span>0.5%</span>
        </div>
        <button className="w-full rounded-xl bg-blue-500 py-3 text-white hover:bg-blue-400">
          Swap
        </button>
      </section>
    </section>
  );
}
