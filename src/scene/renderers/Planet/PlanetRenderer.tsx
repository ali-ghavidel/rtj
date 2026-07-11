import type { Planet } from "@/core/types";

import { PlanetMesh } from "./PlanetMesh";

type PlanetRendererProps = {
  planet: Planet;
};

export function PlanetRenderer({
  planet,
}: PlanetRendererProps) {
  return (
    <PlanetMesh planet={planet} />
  );
}