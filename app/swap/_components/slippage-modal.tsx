import ChevronIcon from '_components/icon/chevron';
import InfoIcon from '_components/icon/info';
import QuickSelect from '_components/input/quick-select';
import BaseModal from '_components/modal/base';
import BaseTooltip from '_components/tooltip/base';

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
          <ChevronIcon direction="left" />
        </button>
        <span className="text-lg">Settings</span>
      </header>
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <h2>Slippage Tolerance</h2>
            <BaseTooltip
              hint="Your transaction will revert if the price changes unfavorably by more than this
          percentage."
            >
              <InfoIcon className="text-gray-900" />
            </BaseTooltip>
          </div>
          <QuickSelect />
        </div>
        <section className="mb-4">
          <input
            placeholder="Search by name or address"
            className="w-full rounded-lg border border-gray-400 px-4 py-3"
          />
        </section>
        <button className="w-full rounded-xl bg-blue-500 py-3 text-lg text-white hover:bg-blue-400">
          Save
        </button>
      </div>
    </BaseModal>
  );
}
