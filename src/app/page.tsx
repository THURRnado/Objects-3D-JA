import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-[#712E6D] to-[#312727]">
        <div className="w-full flex justify-center pt-10 relative">
            <h1 className={`customUnderline text-3xl text-white`}>
                Inicio
            </h1>
        </div>
        <div className="w-full flex pl-3 justify-start pt-10 relative">
            <h1 className={`text-3xl text-white`}>
                2018:
            </h1>
        </div>
        <div className="w-full pt-5 overflow-x-auto">
            <div className="flex gap-3 px-3 pb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                <Link href={`/objeto/${i + 1}`} key={i} className="flex-shrink-0">
                  <img
                      key={i}
                      src={`https://placehold.co/300x200?text=Objeto+${i + 1}`}
                      alt={`Imagem ${i + 1}`}
                      className="w-30 h-30 object-cover rounded-lg shadow-md flex-shrink-0"
                  />
                </Link>
                ))}
            </div>
        </div>
        <div className="w-full flex pl-3 justify-start pt-10 relative">
            <h1 className={`text-3xl text-white`}>
                2022:
            </h1>
        </div>
        <div className="w-full pt-5 overflow-x-auto">
            <div className="flex gap-3 px-3 pb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                <Link href={`/objeto/${i + 6}`} key={i} className="flex-shrink-0">
                  <img
                      key={i}
                      src={`https://placehold.co/300x200?text=Objeto+${i + 6}`}
                      alt={`Imagem ${i + 6}`}
                      className="w-30 h-30 object-cover rounded-lg shadow-md flex-shrink-0"
                  />
                </Link>
                ))}
            </div>
        </div>
    </div>
  );
}
