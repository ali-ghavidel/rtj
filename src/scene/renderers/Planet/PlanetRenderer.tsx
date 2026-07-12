import type { Planet } from "@/core/types";

import { OrbitController, OrbitPath } from "../Orbit";
import { MoonRenderer } from "../Moon";

import { PlanetMesh } from "./PlanetMesh";

import { Selectable } from "@/scene/interaction";

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
        <Selectable id={planet.id}>
            <PlanetMesh
                planet={planet}
                position={[0, 0, 0]}
            />
        </Selectable>

        {planet.moons.map((moon) => (
            <MoonRenderer
                key={moon.id}
                moon={moon}
            />
        ))}
    </OrbitController>
);
}