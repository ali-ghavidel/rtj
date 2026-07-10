import { milkyWay } from "@/data";

import { universe } from "./Universe";

export class UniverseBuilder {
  build() {
    return {
      ...universe,

      galaxies: [milkyWay],
    };
  }
}

export const universeBuilder = new UniverseBuilder();