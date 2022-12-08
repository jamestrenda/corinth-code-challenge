import Image from 'next/image';
import Link from 'next/link';
import tw from 'twin.macro';
import { Nav } from './nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header>
      <h1 tw="text-yellow-400 font-bold text-2xl uppercase tracking-widest text-center mt-12">
        <Link href="/" tw="max-w-sm block m-auto">
          <Image
            src="/StarWarsOpeningLogo.svg"
            width="1920"
            height="1080"
            alt="Star Wars logo"
          />
        </Link>
      </h1>
      <Search />
      <Nav />
    </header>
  );
};
