import type { Renderable } from "./RenderTypes";

export class RenderManager {
  private renderables: Renderable[] = [];

  register(renderable: Renderable) {
    this.renderables.push(renderable);
  }

  unregister(id: string) {
    this.renderables = this.renderables.filter(
      item => item.id !== id
    );
  }

  getAll() {
    return this.renderables;
  }

  clear() {
    this.renderables = [];
  }
}

export const renderManager = new RenderManager();