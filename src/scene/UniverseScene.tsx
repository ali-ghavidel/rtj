import { useEffect } from "react";

import { universeBuilder } from "@/world";

export function UniverseScene() {
  useEffect(() => {
    const universe = universeBuilder.build();

    console.log(universe);
  }, []);

  return null;
}