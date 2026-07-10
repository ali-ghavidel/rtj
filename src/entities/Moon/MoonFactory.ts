import type { Moon as MoonData } from "@/core/types";

import { Moon } from "./Moon";

export class MoonFactory {
  create(data: MoonData) {
    return new Moon(data);
  }
}

export const moonFactory = new MoonFactory();