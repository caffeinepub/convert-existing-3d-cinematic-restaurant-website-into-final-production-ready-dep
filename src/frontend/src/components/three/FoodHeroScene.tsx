import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from './useReducedMotion';

export default function FoodHeroScene() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <>
      {/* Warm Ambient Light */}
      <ambientLight intensity={0.4} color="#ffa726" />
      
      {/* Key Light - Warm */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#ffb74d"
        castShadow
      />
      
      {/* Fill Light - Softer Warm */}
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#ff9800" />
      
      {/* Rim Light - Golden */}
      <pointLight position={[0, -3, -5]} intensity={0.8} color="#ffd54f" />

      {/* Fog for Cinematic Depth */}
      <fog attach="fog" args={['#000000', 5, 15]} />

      {/* 3D Food Elements */}
      <group ref={groupRef}>
        {/* Main Sphere - Represents a dish/plate */}
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#ff6f00"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>

        {/* Torus - Decorative element */}
        <Torus args={[1.5, 0.2, 32, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#ffab00"
            roughness={0.3}
            metalness={0.7}
            emissive="#ff6f00"
            emissiveIntensity={0.2}
          />
        </Torus>

        {/* Small accent spheres */}
        <Sphere args={[0.3, 32, 32]} position={[2, 0.5, 0]}>
          <meshStandardMaterial
            color="#ffd54f"
            roughness={0.1}
            metalness={0.9}
            emissive="#ffab00"
            emissiveIntensity={0.3}
          />
        </Sphere>

        <Sphere args={[0.25, 32, 32]} position={[-2, -0.3, 0.5]}>
          <meshStandardMaterial
            color="#ffb74d"
            roughness={0.1}
            metalness={0.9}
            emissive="#ff9800"
            emissiveIntensity={0.3}
          />
        </Sphere>

        {/* Box element for variety */}
        <Box args={[0.4, 0.4, 0.4]} position={[-1.5, 1, -0.5]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color="#ff8a65"
            roughness={0.2}
            metalness={0.8}
          />
        </Box>
      </group>
    </>
  );
}
