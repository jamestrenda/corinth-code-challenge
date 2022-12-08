import Link from 'next/link';
import tw from 'twin.macro';
import { NavLink } from './navLink';

// TODO: add active link

export const Nav = () => {
  return (
    <nav>
      <ul tw="flex gap-8 font-bold text-gray-500 justify-center">
        <NavLink>
          <Link href="/films/1">I</Link>
        </NavLink>
        <NavLink>
          <Link href="/films/2">II</Link>
        </NavLink>
        <NavLink>
          <Link href="/films/3">III</Link>
        </NavLink>
        <NavLink>
          <Link href="/films/4">IV</Link>
        </NavLink>
        <NavLink>
          <Link href="/films/5">V</Link>
        </NavLink>
        <NavLink>
          <Link href="/films/6">VI</Link>
        </NavLink>
      </ul>
    </nav>
  );
};
