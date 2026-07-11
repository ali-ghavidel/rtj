import {
  calculateOrbitPosition,
  worldRadiusToScene,
} from "@/core";

import type { Planet } from "@/core/types";

type Props = {
  planet: Planet;
};

export function PlanetMesh({
  planet,
}: Props) {
  const radius = Math.max(
    worldRadiusToScene(planet.radius),
    0.15
  );

  const position = calculateOrbitPosition(
    planet.orbitRadius,
    0
  );

  return (
    <mesh
      position={[
        position.x,
        position.y,
        position.z,
      ]}
    >
      <sphereGeometry
        args={[radius, 32, 32]}
      />

      <meshStandardMaterial
        color={planet.color}
      />
    </mesh>
  );
}