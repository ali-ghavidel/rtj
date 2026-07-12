import type { Moon } from "@/core/types";

import {
  RegisterFocusable,
  Selectable,
} from "@/scene/interaction";

import {
  OrbitController,
  OrbitPath,
} from "../Orbit";

import { MoonMesh } from "./MoonMesh";

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
        <RegisterFocusable id={moon.id}>
          <Selectable id={moon.id}>
            <MoonMesh moon={moon} />
          </Selectable>
        </RegisterFocusable>
      </OrbitController>
    </>
  );
}