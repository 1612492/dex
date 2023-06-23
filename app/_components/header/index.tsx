import Image from 'next/image';
import Link from 'next/link';
import OptionIcon from '_components/icon/option';
import logo from '_images/logo.png';
import Balance from './balance';
import Address from './address';
import Network from './network';
import Routes from './routes';

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between py-4 ">
      <nav className="flex gap-x-8">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-10" />
        </Link>
        <Routes />
      </nav>
      <div className="flex items-center gap-x-2">
        <Network />
        <Balance />
        <Address />
        <button className="flex items-center justify-center rounded-full p-1 hover:bg-white">
          <OptionIcon />
        </button>
      </div>
    </header>
  );
}
