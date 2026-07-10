import type { Planet } from "@/core/types";

import { moon } from "@/data/moons";

export const earth: Planet = {
  id: "earth",
  name: "Earth",
  radius: 6371,
  orbitRadius: 150,
  color: "#4F94FF",
  moons: [moon],
};