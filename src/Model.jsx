import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import useKeyboard from './useKeyboard';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerspectiveCamera } from '@react-three/drei';

export default function Model(props) {
  const ref = useRef();
  const keyMap = useKeyboard();

  useFrame((_, delta) => {
    keyMap['KeyD'] && (ref.current.position.x -= 20 * delta);

    keyMap['KeyA'] && (ref.current.position.x += 20 * delta);
    keyMap['KeyS'] && (ref.current.position.z -= 20 * delta);
    keyMap['KeyW'] && (ref.current.position.z += 20 * delta);
    keyMap['Digit1'] && (ref.current.position.y += 20 * delta);
    keyMap['Digit2'] && (ref.current.position.y -= 20 * delta);
    keyMap['KeyQ'] && (ref.current.rotation.y += delta);
    keyMap['KeyE'] && (ref.current.rotation.y -= delta);
  });

  const gltf = useLoader(GLTFLoader, './scene.gltf');
  return (
    <PerspectiveCamera position={[0, 0, 15]}>
      <mesh ref={ref} {...props}>
        <primitive position={[0, 0, 10]} object={gltf.scene} scale={1} />
      </mesh>
    </PerspectiveCamera>
  );
}
