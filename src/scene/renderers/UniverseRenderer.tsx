import type { Universe } from "@/core/types";

import { GalaxyRenderer } from "./GalaxyRenderer";

type UniverseRendererProps = {
  universe: Universe;
};

export function UniverseRenderer({
  universe,
}: UniverseRendererProps) {
  return (
    <>
      {universe.galaxies.map((galaxy) => (
        <GalaxyRenderer
          key={galaxy.id}
          galaxy={galaxy}
        />
      ))}
    </>
  );
}