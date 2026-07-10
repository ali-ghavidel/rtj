import type { Planet as PlanetData } from "@/core/types";

export class Planet {
  constructor(
    public readonly data: PlanetData
  ) {}

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }
}