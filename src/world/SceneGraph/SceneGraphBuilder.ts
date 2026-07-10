import type { Universe } from "@/core/types";

import { SceneGraph } from "./SceneGraph";

export class SceneGraphBuilder {
  build(universe: Universe) {
    return new SceneGraph({
      id: universe.id,
      type: "UNIVERSE",
      data: universe,
      children: [],
    });
  }
}

export const sceneGraphBuilder = new SceneGraphBuilder();