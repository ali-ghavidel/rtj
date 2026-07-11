import type { Galaxy } from "@/core/types";

import { SolarSystemRenderer } from "./SolarSystemRenderer";

type GalaxyRendererProps = {
  galaxy: Galaxy;
};

export function GalaxyRenderer({
  galaxy,
}: GalaxyRendererProps) {
  return (
    <>
      {galaxy.solarSystems.map((system) => (
        <SolarSystemRenderer
          key={system.id}
          solarSystem={system}
        />
      ))}
    </>
  );
}