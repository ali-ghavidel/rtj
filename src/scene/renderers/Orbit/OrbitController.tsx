import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

import { calculateOrbitPosition } from "@/core";

type OrbitControllerProps = {
  orbitRadius: number;
  orbitSpeed: number;
  initialAngle?: number;
  children: React.ReactNode;
};

export function OrbitController({
  orbitRadius,
  orbitSpeed,
  initialAngle = 0,
  children,
}: OrbitControllerProps) {
  const groupRef = useRef<Group>(null);

  const angle = useRef(initialAngle);

  useFrame((_, delta) => {
    angle.current += delta * orbitSpeed;

    const position = calculateOrbitPosition(
      orbitRadius,
      angle.current
    );

    groupRef.current?.position.set(
      position.x,
      position.y,
      position.z
    );
  });

  const initialPosition = useMemo(() => {
    return calculateOrbitPosition(
      orbitRadius,
      initialAngle
    );
  }, [orbitRadius, initialAngle]);

  return (
    <group
      ref={groupRef}
      position={[
        initialPosition.x,
        initialPosition.y,
        initialPosition.z,
      ]}
    >
      {children}
    </group>
  );
}