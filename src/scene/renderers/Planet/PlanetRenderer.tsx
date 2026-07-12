import type { Planet } from "@/core/types";

import {
  RegisterFocusable,
  Selectable,
} from "@/scene/interaction";

import {
  OrbitController,
  OrbitPath,
} from "../Orbit";

import { MoonRenderer } from "../Moon";
import { PlanetMesh } from "./PlanetMesh";

type Props = {
  planet: Planet;
};

export function PlanetRenderer({
  planet,
}: Props) {
  return (
    <>
      <OrbitPath
        radius={planet.orbitRadius}
      />

      <OrbitController
        orbitRadius={planet.orbitRadius}
        orbitSpeed={planet.orbitSpeed}
        initialAngle={planet.initialAngle}
      >
        <RegisterFocusable id={planet.id}>
          <Selectable id={planet.id}>
            <PlanetMesh
              planet={planet}
              position={[0, 0, 0]}
            />
          </Selectable>
        </RegisterFocusable>

        {planet.moons.map((moon) => (
          <MoonRenderer
            key={moon.id}
            moon={moon}
          />
        ))}
      </OrbitController>
    </>
  );
}