import Link from 'next/link';
import tw from 'twin.macro';

export default function Home() {
  return (
    <div>
      <h1 tw="text-yellow-400 font-bold text-2xl uppercase tracking-widest text-center mt-12">
        Star Wars Characters
      </h1>
      <div tw="max-w-lg m-auto">
        <input
          tw="w-full text-center text-gray-400 p-4 my-4 bg-[rgba(0, 0, 0, .2)] rounded-full uppercase text-sm tracking-widest"
          type="search"
          name="search"
          placeholder="Search by name..."
        />
      </div>
      <nav tw="border-b-2 border-[rgba(0, 0, 0, .2)]">
        <ul tw="flex gap-8 font-bold text-gray-500 justify-center">
          <li tw="py-3 hover:text-yellow-400 transition-colors">
            <Link href="/">I</Link>
          </li>
          <li tw="py-3 hover:text-yellow-400 text-yellow-400 transition-colors">
            <Link href="/">II</Link>
          </li>
          <li tw="py-3 hover:text-yellow-400 transition-colors">
            <Link href="/">III</Link>
          </li>
          <li tw="py-3 hover:text-yellow-400 transition-colors">
            <Link href="/">IV</Link>
          </li>
          <li tw="py-3 hover:text-yellow-400 transition-colors">
            <Link href="/">V</Link>
          </li>
          <li tw="py-3 hover:text-yellow-400 transition-colors">
            <Link href="/">VI</Link>
          </li>
          <li tw="py-3 hover:text-yellow-400 transition-colors">
            <Link href="/">VII</Link>
          </li>
        </ul>
      </nav>
      <main tw="mt-3 grid md:grid-cols-3 gap-3 max-w-5xl m-auto">
        <div tw="text-white p-6 bg-[rgba(0,0,0,.2)] rounded-md">
          <h2 tw="text-lg font-bold text-center mb-4">Character Name</h2>
          <div tw="mt-2">
            <h3 tw="font-bold uppercase text-xs tracking-widest mb-1">
              About Me
            </h3>
            <ul tw="text-xs">
              <li>Height:</li>
              <li>Weight:</li>
              <li>Hair Color:</li>
              <li>DOB:</li>
              <li>Species:</li>
            </ul>
          </div>
          <div tw="mt-2">
            <h3 tw="font-bold uppercase text-xs tracking-widest mb-1">
              Films Appeared In
            </h3>
            <div tw="text-xs">Film Title, Film Title</div>
          </div>
          <div tw="mt-2">
            <h3 tw="font-bold uppercase text-xs tracking-widest mb-1">
              Starships Flown
            </h3>
            <div tw="text-xs flex">Ship name, Ship name</div>
          </div>
        </div>
      </main>
    </div>
  );
}
