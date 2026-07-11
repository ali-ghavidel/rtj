import type { CelestialBody } from "./CelestialBody";
import type { Moon } from "./Moon";

export interface Planet extends CelestialBody {
  color: string;

  orbitRadius: number;

  orbitSpeed: number;

  initialAngle: number;

  moons: Moon[];
}