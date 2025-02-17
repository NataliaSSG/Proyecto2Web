import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center p-8 bg-pink-400 fixed top-0 left-0">
      <Link href="/">
        <div className="h-16 w-16 mr-4 bg-white rounded-full flex items-center justify-center hover:font-bold">Logo</div>
      </Link>
      <Link href="/">
        <h1 className="text-white text-xl p-4 hover:font-bold">Home Page</h1>
      </Link>
      <Link href="/page1">
        <h1 className="text-white text-xl p-4 hover:font-bold">Pag 1</h1>
      </Link>
      <Link href="/page2">
        <h1 className="text-white text-xl p-4 hover:font-bold">Pag 2</h1>
      </Link>
    </header>
  );
}