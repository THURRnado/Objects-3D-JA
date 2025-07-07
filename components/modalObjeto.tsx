'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export function Modelo3D({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

export default function ModalObjeto({
  isOpen,
  onClose,
  title,
  descricao,
  glbUrl
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  descricao: string;
  glbUrl: string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-tr from-[#712E6D] to-[#312727] backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/50 rounded-lg shadow-2xl p-6 flex flex-col lg:flex-row gap-6 max-w-6xl w-[95%] h-[90%]"
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            transition={{ duration: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/10 flex-1 h-[300px] lg:h-full rounded-lg overflow-hidden cursor-grab active:cursor-grabbing">
              <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[0, 5, 5]} intensity={1} />
                <Modelo3D url={glbUrl} />
                <OrbitControls />
              </Canvas>
            </div>

            <div className="flex-1 text-white overflow-y-auto">
              <h2 className="text-2xl mb-4">{title}</h2>
              <p>{descricao}</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#712E6D] hover:bg-black cursor-pointer rounded"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
