import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

import { calculateOrbitPosition } from "@/core";
import type { Planet } from "@/core/types";

type PlanetOrbitProps = {
  planet: Planet;
  children: React.ReactNode;
};

export function PlanetOrbit({
  planet,
  children,
}: PlanetOrbitProps) {
  const groupRef = useRef<Group>(null);

  const angle = useRef(planet.initialAngle);

  useFrame((_, delta) => {
    angle.current += delta * planet.orbitSpeed;

    const position = calculateOrbitPosition(
      planet.orbitRadius,
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
      planet.orbitRadius,
      planet.initialAngle
    );
  }, [planet]);

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