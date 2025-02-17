import Image from 'next/image';

interface ProductCardProps {
    image: string;
    alt: string;
    description: string;
    reverse?: boolean;
}

export default function ProductCard({ image, alt, description, reverse = false }: ProductCardProps) {
    return (
        <div className={`flex flex-row items-center justify-center gap-8 px-16 ${reverse ? 'flex-row-reverse' : ''}`}>
            <Image src={image} alt={alt} width={300} height={300} />
            <h2 className="text-2xl text-justify px-8 max-w-6xl mx-auto">{description}</h2>
        </div>
    );
}