import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model';
import Klingon from './Klingon';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 10, -20] }}>
      <Suspense>
        <Stars />
        <ambientLight intensity={1} />

        <OrbitControls />
        <Klingon />
        <Model />
      </Suspense>
    </Canvas>
  );
}
