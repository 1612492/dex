import Link from 'next/link';

import Logo from '~/images/logo.svg';
import OptionIcon from '~/images/option.svg';

import Routes from './routes';

export default function Footer() {
  return (
    <footer className="container fixed bottom-0 left-0 right-0 mx-auto h-20 p-4 md:hidden">
      <nav className="mx-auto min-w-fit max-w-md rounded-xl bg-white p-4">
        <Routes />
      </nav>
    </footer>
  );
}
