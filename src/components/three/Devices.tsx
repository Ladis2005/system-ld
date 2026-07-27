"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

const ELECTRIC = "#1265F5";
const DEEP = "#06162E";
const DARK = "#020817";

/**
 * Ecrã de dispositivo com um "website" estilizado renderizado
 * a partir de planos coloridos (leve, sem texturas pesadas).
 */
function Screen({
  width,
  height,
  label,
}: {
  width: number;
  height: number;
  label: string;
}) {
  const pad = 0.06;
  const innerW = width - pad * 2;
  return (
    <group position={[0, 0, 0.031]}>
      {/* Fundo do ecrã */}
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color={DARK} />
      </mesh>
      {/* Barra de navegação */}
      <mesh position={[0, height / 2 - 0.12, 0.001]}>
        <planeGeometry args={[innerW, 0.14]} />
        <meshBasicMaterial color={ELECTRIC} />
      </mesh>
      {/* Bloco "hero" */}
      <mesh position={[-innerW / 4, height / 2 - 0.4, 0.001]}>
        <planeGeometry args={[innerW / 2, 0.3]} />
        <meshBasicMaterial color={"#0d4fc9"} />
      </mesh>
      {/* Cartões */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[
            -innerW / 3 + (i * innerW) / 3,
            -height / 2 + 0.35,
            0.001,
          ]}
        >
          <planeGeometry args={[innerW / 3.6, 0.4]} />
          <meshBasicMaterial color={"#0a3d9c"} />
        </mesh>
      ))}
      {/* Etiqueta do dispositivo */}
      <Text
        position={[0, 0, 0.002]}
        fontSize={0.14}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

/** Portátil com ecrã e base. */
export function Laptop({ position = [0, 0, 0] as [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
  });
  return (
    <group ref={group} position={position}>
      {/* Ecrã */}
      <group position={[0, 0.5, 0]} rotation={[-0.08, 0, 0]}>
        <RoundedBox args={[2.2, 1.4, 0.06]} radius={0.05} smoothness={4}>
          <meshStandardMaterial
            color={DEEP}
            metalness={0.6}
            roughness={0.3}
          />
        </RoundedBox>
        <Screen width={2.0} height={1.2} label="LSN" />
      </group>
      {/* Base / teclado */}
      <mesh position={[0, -0.22, 0.42]} rotation={[Math.PI / 2.6, 0, 0]}>
        <boxGeometry args={[2.3, 1.4, 0.06]} />
        <meshStandardMaterial color={"#0a1a33"} metalness={0.7} roughness={0.35} />
      </mesh>
    </group>
  );
}

/** Tablet inclinado. */
export function Tablet({
  position = [0, 0, 0] as [number, number, number],
}) {
  return (
    <group position={position} rotation={[0.1, -0.4, 0.12]}>
      <RoundedBox args={[1.15, 1.55, 0.07]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color={DEEP} metalness={0.6} roughness={0.3} />
      </RoundedBox>
      <Screen width={1.0} height={1.4} label="Tablet" />
    </group>
  );
}

/** Smartphone inclinado. */
export function Phone({
  position = [0, 0, 0] as [number, number, number],
}) {
  return (
    <group position={position} rotation={[0.1, 0.45, -0.1]}>
      <RoundedBox args={[0.7, 1.4, 0.07]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color={DEEP} metalness={0.6} roughness={0.3} />
      </RoundedBox>
      <Screen width={0.6} height={1.28} label="App" />
    </group>
  );
}
