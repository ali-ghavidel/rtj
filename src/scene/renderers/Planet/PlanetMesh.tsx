import { worldRadiusToScene } from "@/core";
import type { Planet } from "@/core/types";

type PlanetMeshProps = {
  planet: Planet;
  position: readonly [number, number, number];
};

export function PlanetMesh({
  planet,
  position,
}: PlanetMeshProps) {
  const radius = Math.max(
    worldRadiusToScene(planet.radius),
    0.15
  );

  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 32, 32]} />

      <meshStandardMaterial color={planet.color} />
    </mesh>
  );
}