import { universe } from "./Universe";

export class UniverseBuilder {
  build() {
    return universe;
  }
}

export const universeBuilder = new UniverseBuilder();