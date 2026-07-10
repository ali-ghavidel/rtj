import type { Planet as PlanetData } from "@/core/types";

import { Planet } from "./Planet";

export class PlanetFactory {
  create(data: PlanetData) {
    return new Planet(data);
  }
}

export const planetFactory = new PlanetFactory();