import type { Moon } from "@/core/types";

import { OrbitController, OrbitPath } from "../Orbit";

import { MoonMesh } from "./MoonMesh";
import { Selectable } from "@/scene/interaction";

type Props = {
  moon: Moon;
};

export function MoonRenderer({
  moon,
}: Props) {
  return (
    <>
      <OrbitPath
        radius={moon.orbitRadius}
      />

      <OrbitController
        orbitRadius={moon.orbitRadius}
        orbitSpeed={moon.orbitSpeed}
        initialAngle={moon.initialAngle}
      >
        <Selectable id={moon.id}>
          <MoonMesh moon={moon} />
        </Selectable>
      </OrbitController>
    </>
  );
}