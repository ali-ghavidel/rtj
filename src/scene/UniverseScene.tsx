import { useEffect } from "react";

import { earth } from "@/data";
import { planetFactory } from "@/entities";

export function UniverseScene() {
  useEffect(() => {
    const planet = planetFactory.create(earth);

    console.log(planet);
  }, []);

  return null;
}