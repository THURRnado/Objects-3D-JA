import { Object3D, Box3, Vector3 } from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

//useGLTF.preload('/modelos3d/adamHeadGlb.glb');

export function Modelo3D() {
  const { scene } = useGLTF('/modelos3d/vierge.glb');
  const ref = useRef<Object3D>(null);

  useEffect(() => {
  if (ref.current) {
    ref.current.position.set(0, -1, 0);
    ref.current.scale.set(1, 1, 1);
  }
}, []);

  return <primitive ref={ref} object={scene} />;
}