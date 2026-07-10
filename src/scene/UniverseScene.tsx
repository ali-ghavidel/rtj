import { useEffect } from "react";

import { sceneGraphBuilder } from "@/world/SceneGraph";
import { universeBuilder } from "@/world";

export function UniverseScene() {
  useEffect(() => {
    const universe = universeBuilder.build();

    const graph = sceneGraphBuilder.build(universe);

    console.log(graph);
  }, []);

  return null;
}