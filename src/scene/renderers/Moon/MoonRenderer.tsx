import type { Moon } from "@/core/types";

import { OrbitController } from "../Orbit";

import { MoonMesh } from "./MoonMesh";

type Props = {
  moon: Moon;
};

export function MoonRenderer({
  moon,
}: Props) {
  return (
    <OrbitController
      orbitRadius={moon.orbitRadius}
      orbitSpeed={moon.orbitSpeed}
      initialAngle={moon.initialAngle}
    >
      <MoonMesh moon={moon} />
    </OrbitController>
  );
}