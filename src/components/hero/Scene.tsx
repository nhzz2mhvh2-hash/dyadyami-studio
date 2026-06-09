"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  args: [number, number, number];
  rotation?: [number, number, number];
}

function FloatingShape({ position, color, args, rotation = [0, 0, 0] }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={args} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 1000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const geoRef = useRef<THREE.BufferGeometry>(null);

  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    for (let i = 0; i < count; i++) {
      p[i * 3] = (random(i * 123.4) - 0.5) * 20;
      p[i * 3 + 1] = (random(i * 567.8) - 0.5) * 20;
      p[i * 3 + 2] = (random(i * 910.1) - 0.5) * 20;
    }
    return p;
  }, [count]);

  useEffect(() => {
    if (geoRef.current) {
      geoRef.current.setAttribute('position', new THREE.BufferAttribute(points, 3));
    }
  }, [points]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geoRef} />
      <pointsMaterial size={0.02} color="#D4AF37" transparent opacity={0.4} />
    </points>
  );
}

export default function Scene() {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(camera.position, {
        z: 2,
        y: 1,
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });

      gsap.to(camera.rotation, {
        x: -0.2,
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    });

    return () => ctx.revert();
  }, [camera]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.mouse;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.05);
  });

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 5, 20]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#D4AF37" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />

      <group ref={groupRef}>
        <FloatingShape position={[-3, 1.5, -4]} color="#1a1a1a" args={[1.2, 3, 0.6]} rotation={[0.2, 0.4, 0.1]} />
        <FloatingShape position={[4, -1, -5]} color="#0a0a0a" args={[3, 0.8, 1.5]} rotation={[0.5, -0.2, 0.3]} />
        <FloatingShape position={[-5, -2, -6]} color="#D4AF37" args={[0.3, 6, 0.3]} rotation={[-0.3, 0.1, 0.5]} />
        <FloatingShape position={[6, 3, -7]} color="#1a1a1a" args={[2, 2, 2]} rotation={[0.1, 0.1, 0.1]} />

        <Particles count={3000} />
      </group>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        <Noise opacity={0.05} />
        <Vignette offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
