"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const ELECTRIC = "#1265F5";

/** Símbolo flutuante genérico (código, git, etc.) num painel de vidro. */
function GlassBadge({
  position,
  children,
  color = ELECTRIC,
  floatSpeed = 1.5,
}: {
  position: [number, number, number];
  children: string;
  color?: string;
  floatSpeed?: number;
}) {
  return (
    <Float speed={floatSpeed} rotationIntensity={0.4} floatIntensity={0.8}>
      <group position={position}>
        <RoundedBox args={[0.7, 0.7, 0.08]} radius={0.14} smoothness={4}>
          <meshStandardMaterial
            color={"#06162E"}
            metalness={0.5}
            roughness={0.25}
            emissive={color}
            emissiveIntensity={0.12}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.05]}
          fontSize={0.28}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {children}
        </Text>
      </group>
    </Float>
  );
}

/** Elementos geométricos flutuantes (dodecaedro, torus, etc.). */
function Shape({
  position,
  geometry,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: "ico" | "torus" | "octa";
  scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry === "ico" && <icosahedronGeometry args={[0.4, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.3, 0.12, 16, 32]} />}
        {geometry === "octa" && <octahedronGeometry args={[0.4, 0]} />}
        <meshStandardMaterial
          color={ELECTRIC}
          metalness={0.4}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/** Conjunto de objetos flutuantes: código, git, github e geometria. */
export function FloatingObjects() {
  return (
    <group>
      <GlassBadge position={[-3.2, 1.4, -0.5]} color="#7ba4ff">
        {"</>"}
      </GlassBadge>
      <GlassBadge position={[3.1, 1.1, -0.4]} color="#F05032" floatSpeed={1.8}>
        {"git"}
      </GlassBadge>
      <GlassBadge position={[2.9, -1.4, 0.2]} color="#ffffff" floatSpeed={1.3}>
        {"GH"}
      </GlassBadge>
      <GlassBadge position={[-3.0, -1.2, 0.1]} color="#12C4F5" floatSpeed={1.6}>
        {"{ }"}
      </GlassBadge>

      <Shape position={[-2.2, 2.1, -1]} geometry="ico" scale={1.1} />
      <Shape position={[2.4, 2.0, -1.2]} geometry="octa" scale={0.9} />
      <Shape position={[0, -2.3, -0.8]} geometry="torus" scale={1.2} />
      <Shape position={[3.6, 0, -1.5]} geometry="ico" scale={0.7} />
      <Shape position={[-3.7, 0.2, -1.4]} geometry="torus" scale={0.6} />
    </group>
  );
}
