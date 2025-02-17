import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <header className="w-full flex items-center p-8 bg-pink-400 fixed top-0 left-0">
        <Link href="/">
          <div className="h-16 w-16 mr-4 bg-white rounded-full flex items-center justify-center hover:font-bold">Logo</div>
        </Link>
        <Link href="/">
          <h1 className="text-white text-xl p-4 hover:font-bold">Home Page</h1>
        </Link>
        <Link href="/">
          <h1 className="text-white text-xl p-4 hover:font-bold">Pag 1</h1>
        </Link>
        <Link href="/">
          <h1 className="text-white text-xl p-4 hover:font-bold">Pag 2</h1>
        </Link>
      </header>
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl">Texto</h1>
        <h2 className="text-4xl">Subtexto</h2>
        <div className="bg-pink-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-pink-400">Boton</div>
      </div>
    </div>
  );
}