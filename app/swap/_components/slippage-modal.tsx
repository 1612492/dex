import QuickSelect from '_components/input/quick-select';
import BaseModal from '_components/modal/base';
import BaseTooltip from '_components/tooltip/base';
import ChevronIcon from '_images/chevron.svg';
import InfoIcon from '_images/info.svg';

type SlippageModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SlippageModal({ open, onClose }: SlippageModalProps) {
  return (
    <BaseModal open={open} onClose={onClose}>
      <header className="relative p-4 text-center text-gray-900">
        <button
          onClick={onClose}
          className="absolute bottom-2 left-2 top-2 rounded-lg px-3 hover:bg-gray-100"
        >
          <ChevronIcon className="h-4 w-4 -rotate-90 text-gray-900 md:h-5 md:w-5" />
        </button>
        <span className="text-base text-gray-900 sm:text-lg">Settings</span>
      </header>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <div className="text-sm sm:text-base">Slippage Tolerance</div>
            <BaseTooltip
              content="Your transaction will revert if the price changes unfavorably by more than this
          percentage."
            >
              <InfoIcon className="h-3 w-3 text-gray-900 md:h-5 md:w-5" />
            </BaseTooltip>
          </div>
          <QuickSelect options={['0.5', '1', '2']} />
        </div>
        <section className="mb-4">
          <input className="w-full rounded-lg border border-gray-400 px-4 py-3 text-sm sm:text-lg" />
        </section>
        <button className="w-full rounded-xl bg-blue-800 py-3 text-xs text-white hover:bg-blue-900 sm:text-sm lg:text-base">
          Save
        </button>
      </div>
    </BaseModal>
  );
}
