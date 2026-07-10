export interface SceneNode<T = unknown> {
  id: string;

  type: string;

  data: T;

  children: SceneNode[];
}