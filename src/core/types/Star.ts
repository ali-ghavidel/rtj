import type { CelestialBody } from "./CelestialBody";

export interface Star extends CelestialBody {
  color: string;

  position: readonly [number, number, number];
}