"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";


export default function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  const lightRef = useRef<THREE.PointLight>(null!);
  const starTexture = useTexture("/star.png");
  const { mouse, viewport } = useThree();

  const particleCount = 700;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const targetX = mouse.x * viewport.width * 0.2;
    const targetY = mouse.y * viewport.height * 0.2;

    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;

    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.4;

    const distance = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
    const scale = 1 + (0.3 - distance) * 0.2;
    meshRef.current.scale.set(scale, scale, scale);

    lightRef.current.position.x = meshRef.current.position.x;
    lightRef.current.position.y = meshRef.current.position.y;

    particlesRef.current.rotation.y = time * 0.02;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1} />

      <pointLight
        ref={lightRef}
        intensity={1.5}
        color="#7f5cff"
        distance={10}
      />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.4, 2]} />
          <meshStandardMaterial
            color="orange"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </Float>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          map={starTexture}
          transparent
          size={0.20}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          color="#9befff"
          sizeAttenuation
        />
      </points>
    </>
  );
}