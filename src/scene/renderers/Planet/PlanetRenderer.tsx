import type { Planet } from "@/core/types";

import { OrbitController } from "../Orbit";
import { MoonRenderer } from "../Moon";

import { PlanetMesh } from "./PlanetMesh";

type Props = {
  planet: Planet;
};

export function PlanetRenderer({
  planet,
}: Props) {
  return (
    <OrbitController
      orbitRadius={planet.orbitRadius}
      orbitSpeed={planet.orbitSpeed}
      initialAngle={planet.initialAngle}
    >
      <PlanetMesh
        planet={planet}
        position={[0, 0, 0]}
      />

      {planet.moons.map((moon) => (
        <MoonRenderer
          key={moon.id}
          moon={moon}
        />
      ))}
    </OrbitController>
  );
}