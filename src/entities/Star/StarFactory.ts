import type { Star as StarData } from "@/core/types";

import { Star } from "./Star";

export class StarFactory {
  create(data: StarData) {
    return new Star(data);
  }
}

export const starFactory = new StarFactory();