import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full flex items-center p-8 bg-pink-400 fixed top-0 left-0">
            <Link href="/">
                <Image
                    src={"/cupcake.svg"}
                    alt={"Logo"}
                    width={70}
                    height={70}
                    className="mr-4 transition-transform duration-300 hover:scale-110"
                />
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