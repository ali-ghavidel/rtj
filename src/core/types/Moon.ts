import type { CelestialBody } from "./CelestialBody";

export interface Moon extends CelestialBody {
  orbitRadius: number;
}