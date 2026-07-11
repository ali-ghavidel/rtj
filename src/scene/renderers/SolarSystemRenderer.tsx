import type { SolarSystem } from "@/core/types";

import { PlanetRenderer } from "./Planet";
import { StarRenderer } from "./Star";

type Props = {
  solarSystem: SolarSystem;
};

export function SolarSystemRenderer({
  solarSystem,
}: Props) {
  return (
    <>
      {solarSystem.stars.map((star) => (
        <StarRenderer
          key={star.id}
          star={star}
        />
      ))}

      {solarSystem.planets.map((planet) => (
        <PlanetRenderer
          key={planet.id}
          planet={planet}
        />
      ))}
    </>
  );
}