import type { Galaxy } from "./Galaxy";

export interface Universe {
  id: string;

  name: string;

  galaxies: Galaxy[];
}