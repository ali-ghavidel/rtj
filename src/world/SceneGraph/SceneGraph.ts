import type { SceneNode } from "./SceneNode";

export class SceneGraph {
  constructor(
    public readonly root: SceneNode
  ) {}
}