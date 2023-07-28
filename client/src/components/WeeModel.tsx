import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

function setupModel(data: GLTFResult) {
  let model = null;
  const child = data.scene.children[0];
  model = child.isMesh && child;
  return model;
}

function WeeModel() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta / 3));
  const gltf = useGLTF('default_cube-transformed.glb') as GLTFResult;
  const model = setupModel(gltf);
  const geometry = model.geometry;

  return (
    geometry && (
      <mesh geometry={geometry} ref={meshRef}>
        <meshStandardMaterial color={'rgb(40,40,40)'} />
      </mesh>
    )
  );
}

export default WeeModel;

useGLTF.preload('/default_cube-transformed.glb');