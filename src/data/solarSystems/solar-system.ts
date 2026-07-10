import { sun } from "@/data/stars";
import { earth } from "@/data/planets";
import { moon } from "@/data/moons";

export const solarSystem = {
  id: "solar-system",

  name: "Solar System",

  stars: [sun],

  planets: [
    {
      ...earth,

      moons: [moon],
    },
  ],
};