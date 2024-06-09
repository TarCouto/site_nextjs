import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative flex items-center justify-start w-full min-h-[120vh]">
            <Image
                src="/Banner.webp"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-70 z-10"></div>
            <div className="relative z-20 text-white max-w-2xl p-10 text-left ml-10">
                <h1 className="text-5xl md:text-6xl font-bold">Assistência Técnica de Máquinas de Lavar e Secar</h1>
                <p className="mt-4 text-xl md:text-2xl">Serviço rápido, confiável e de qualidade.</p>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">
                    Contate-nos
                </button>
            </div>
        </section>
    );
}
