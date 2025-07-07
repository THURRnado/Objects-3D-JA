'use client'

import styles from './style.module.css';
import { IoArrowBack } from 'react-icons/io5';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react'; 
import Link from 'next/link';

export function Modelo3D() {
  const { scene } = useGLTF('/modelos3d/rusty_diving_helmet_-_4096px2.glb');
  return <primitive object={scene} scale={1.5} />;
}

export default function Objeto() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-[#712E6D] to-[#312727]">
      
        <div className="w-full flex justify-center pt-10 relative">
            <Link href="/">
                <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4D3353] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer">
                    <IoArrowBack size={20} />
                </button>
            </Link>

            <h1 className={`${styles.customUnderline} text-3xl text-white`}>
                Titulo
            </h1>
        </div>

        <div className="w-full mt-12 flex flex-col items-center">
            <div className="bg-white/10 w-[80%] h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing">
                <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[0, 5, 5]} intensity={1} />
                    <Suspense fallback={null}>
                    <Modelo3D />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>

            <p className="mt-5 text-white text-left w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aliquam laboriosam architecto illo unde esse nam asperiores error commodi debitis. Optio ullam voluptate ex aliquid ducimus qui officia eaque iure?
            </p>
        </div>

        <div className="w-full flex justify-center pt-10 relative">
            <h1 className={`${styles.customUnderline} text-3xl text-white`}>
            Proximos
            </h1>
        </div>

        <div className="w-full mt-12 overflow-x-auto">
            <div className="flex gap-3 px-3 mb-5">
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

    </div>
  );
}
