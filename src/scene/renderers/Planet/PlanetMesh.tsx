import { worldOrbitToScene, worldRadiusToScene } from "@/core";
import type { Planet } from "@/core/types";

type Props = {
  planet: Planet;
};

export function PlanetMesh({ planet }: Props) {
  const radius = Math.max(
    worldRadiusToScene(planet.radius),
    0.15
  );

  return (
    <mesh
      position={[
        worldOrbitToScene(planet.orbitRadius),
        0,
        0,
      ]}
    >
      <sphereGeometry args={[radius, 32, 32]} />

      <meshStandardMaterial color={planet.color} />
    </mesh>
  );
}