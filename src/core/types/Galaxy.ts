import type { SolarSystem } from "./SolarSystem";

export interface Galaxy {
  id: string;

  name: string;

  solarSystems: SolarSystem[];
}