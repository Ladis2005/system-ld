"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { Laptop, Tablet, Phone } from "./Devices";
import { FloatingObjects } from "./FloatingObjects";
import {
  usePrefersReducedMotion,
  useWebGLSupport,
  useIsMobile,
} from "@/lib/hooks";

/**
 * Grupo central que reage suavemente ao movimento do cursor (parallax).
 */
function InteractiveRig({ enableParallax }: { enableParallax: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    if (enableParallax) {
      // Interpolação suave para acompanhar o cursor sem brusquidão.
      const targetY = pointer.x * 0.35;
      const targetX = -pointer.y * 0.25;
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetY,
        3,
        delta,
      );
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        targetX,
        3,
        delta,
      );
    } else {
      // Leve balanço ambiente.
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
        <group scale={0.95}>
          <Laptop position={[0, -0.1, 0]} />
          <Tablet position={[1.9, -0.3, 0.6]} />
          <Phone position={[-1.9, -0.35, 0.7]} />
        </group>
      </Float>
      <FloatingObjects />
    </group>
  );
}

function SceneContent({ parallax }: { parallax: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -2, 3]} intensity={2} color="#1265F5" />
      <pointLight position={[5, 3, -3]} intensity={1.5} color="#12C4F5" />
      <Suspense fallback={null}>
        <InteractiveRig enableParallax={parallax} />
        <Environment preset="city" />
      </Suspense>
    </>
  );
}

/**
 * Fallback estático mostrado quando não há WebGL ou o utilizador
 * prefere movimento reduzido. Mantém a identidade visual sem 3D.
 */
function StaticFallback() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="grid w-full max-w-md gap-4">
        <div className="glass-strong flex h-40 items-center justify-center rounded-2xl shadow-glow">
          <span className="font-display text-4xl font-bold text-electric">
            LSN
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass flex h-28 items-center justify-center">
            <span className="font-mono text-sm text-brand-200">Tablet</span>
          </div>
          <div className="glass flex h-28 items-center justify-center">
            <span className="font-mono text-sm text-brand-200">App</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroScene() {
  const reduce = usePrefersReducedMotion();
  const webgl = useWebGLSupport();
  const isMobile = useIsMobile();

  // Sem WebGL ou com movimento reduzido → fallback estático leve.
  if (!webgl || reduce) {
    return <StaticFallback />;
  }

  return (
    <div className="h-full min-h-[340px] w-full">
      <Canvas
        // dpr limitado melhora bastante a performance em telemóveis.
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <SceneContent parallax={!isMobile} />
      </Canvas>
    </div>
  );
}
