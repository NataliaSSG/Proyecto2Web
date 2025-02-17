import Link from 'next/link';
import Header from './components/header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
       <Header />
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl">Texto</h1>
        <h2 className="text-4xl">Subtexto</h2>
        <div className="bg-pink-300 p-8 w-32 h-16 flex items-center justify-center hover:bg-pink-400">Boton</div>
      </div>
    </div>
  );
}