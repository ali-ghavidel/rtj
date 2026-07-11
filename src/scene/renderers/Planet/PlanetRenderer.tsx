import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

import { calculateOrbitPosition } from "@/core";
import type { Planet } from "@/core/types";

import { PlanetMesh } from "./PlanetMesh";

type Props = {
  planet: Planet;
};

export function PlanetRenderer({
  planet,
}: Props) {
  const meshRef = useRef<Mesh>(null);

  const angle = useRef(
    planet.initialAngle
  );

  useFrame((_, delta) => {
    angle.current += delta * planet.orbitSpeed;

    const pos = calculateOrbitPosition(
      planet.orbitRadius,
      angle.current
    );

    meshRef.current?.position.set(
      pos.x,
      pos.y,
      pos.z
    );
  });

  const initialPosition = useMemo(() => {
    const pos = calculateOrbitPosition(
      planet.orbitRadius,
      planet.initialAngle
    );

    return [pos.x, pos.y, pos.z] as const;
  }, [planet]);

  return (
    <group ref={meshRef}>
      <PlanetMesh
        planet={planet}
        position={initialPosition}
      />
    </group>
  );
}