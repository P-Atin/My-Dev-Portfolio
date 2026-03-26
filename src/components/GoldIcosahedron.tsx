import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float } from "@react-three/drei";
import * as THREE from "three";

const RotatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[2, 1]}>
        <meshBasicMaterial
          color="#C9A84C"
          wireframe
          transparent
          opacity={0.6}
        />
      </Icosahedron>
    </Float>
  );
};

const GoldIcosahedron = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#C9A84C" intensity={1} />
        <RotatingIcosahedron />
      </Canvas>
    </div>
  );
};

export default GoldIcosahedron;
