import Link from 'next/link';

import Routes from '~/components/routes';
import Logo from '~/images/logo.svg';
import OptionIcon from '~/images/option.svg';

export default function Footer() {
  return (
    <footer className="container fixed bottom-0 left-0 right-0 mx-auto h-20 p-4 md:hidden">
      <Routes className="mx-auto min-w-fit max-w-md rounded-xl bg-white p-2" />
    </footer>
  );
}
