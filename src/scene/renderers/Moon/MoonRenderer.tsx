import type { Moon } from "@/core/types";

import { MoonMesh } from "./MoonMesh";
import { MoonOrbit } from "./MoonOrbit";

type Props = {
  moon: Moon;
};

export function MoonRenderer({
  moon,
}: Props) {
  return (
    <MoonOrbit moon={moon}>
      <MoonMesh moon={moon} />
    </MoonOrbit>
  );
}