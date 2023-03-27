import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import useKeyboard from './useKeyboard';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Klingon(props) {
  const ref = useRef();
  const keyMap = useKeyboard();

  useFrame((_, delta) => {
    keyMap['ArrowRight'] && (ref.current.position.x -= 20 * delta);
    keyMap['ArrowLeft'] && (ref.current.position.x += 20 * delta);
    keyMap['ArrowDown'] && (ref.current.position.z -= 20 * delta);
    keyMap['ArrowUp'] && (ref.current.position.z += 20 * delta);
    keyMap['Numpad4'] && (ref.current.position.y += 20 * delta);
    keyMap['Numpad6'] && (ref.current.position.y -= 20 * delta);
    keyMap['Numpad3'] && (ref.current.rotation.y += delta);
    keyMap['Numpad1'] && (ref.current.rotation.y -= delta);
  });

  const gltf = useLoader(GLTFLoader, './scena.gltf');
  return (
    <mesh ref={ref} {...props}>
      <primitive position={[0, 0, -10]} object={gltf.scene} scale={1} />
    </mesh>
  );
}
