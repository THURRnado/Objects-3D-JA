import styles from './style.module.css';
import { IoArrowBack } from 'react-icons/io5'; // ícone de seta para voltar

export default function Objeto() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-[#712E6D] to-[#312727]">
      
        <div className="w-full flex justify-center pt-10 relative">
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4D3353] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition">
                <IoArrowBack size={20} />
            </button>

            <h1 className={`${styles.customUnderline} text-3xl text-white`}>
                Lorem
            </h1>
        </div>

        <div className="w-full mt-12 flex flex-col items-center">
            <img
                src="https://placehold.co/150x150"
                alt="Imagem de exemplo"
                className="w-[80%] h-50 object-cover rounded-lg shadow-lg"
            />

            <p className="mt-5 text-white text-left w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquam laboriosam architecto illo unde esse nam asperiores error commodi debitis. Optio ullam voluptate ex aliquid ducimus qui officia eaque iure?
            </p>
        </div>

        <div className="w-full flex justify-center pt-10 relative">
            <h1 className={`${styles.customUnderline} text-3xl text-white`}>
            Proximos
            </h1>
        </div>

    </div>
  );
}
