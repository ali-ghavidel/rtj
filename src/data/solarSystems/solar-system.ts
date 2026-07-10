import type { SolarSystem } from "@/core/types";

import { earth } from "@/data/planets";
import { sun } from "@/data/stars";

export const solarSystem: SolarSystem = {
  id: "solar-system",
  name: "Solar System",
  stars: [sun],
  planets: [earth],
};