import type { Planet } from "@/core/types";

import { MoonRenderer } from "../Moon";

import { PlanetMesh } from "./PlanetMesh";
import { PlanetOrbit } from "./PlanetOrbit";

type Props = {
  planet: Planet;
};

export function PlanetRenderer({
  planet,
}: Props) {
  return (
    <PlanetOrbit planet={planet}>
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
    </PlanetOrbit>
  );
}