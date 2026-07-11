import { worldDistanceToScene, worldRadiusToScene } from "@/core";
import type { Planet } from "@/core/types";

type PlanetMeshProps = {
  planet: Planet;
};

export function PlanetMesh({
  planet,
}: PlanetMeshProps) {
  return (
    <mesh
      position={[
        worldDistanceToScene(planet.orbitRadius),
        0,
        0,
      ]}
    >
      <sphereGeometry
        args={[
          Math.max(
            worldRadiusToScene(planet.radius),
            0.3
          ),
          32,
          32,
        ]}
      />

      <meshStandardMaterial
        color={planet.color}
      />
    </mesh>
  );
}