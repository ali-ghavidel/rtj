import type { Galaxy } from "@/core/types";

import { solarSystem } from "@/data/solarSystems";

export const milkyWay: Galaxy = {
  id: "milky-way",
  name: "Milky Way",
  solarSystems: [solarSystem],
};