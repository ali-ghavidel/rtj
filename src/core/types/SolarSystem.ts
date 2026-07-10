import type { Planet } from "./Planet";
import type { Star } from "./Star";

export interface SolarSystem {
  id: string;

  name: string;

  stars: Star[];

  planets: Planet[];
}