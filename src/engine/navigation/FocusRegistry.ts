import { Group, Vector3 } from "three";

class FocusRegistry {
  private readonly objects = new Map<string, Group>();

  register(id: string, object: Group) {
    this.objects.set(id, object);
  }

  unregister(id: string) {
    this.objects.delete(id);
  }

  get(id: string) {
    return this.objects.get(id) ?? null;
  }

  getWorldPosition(id: string): Vector3 | null {
    const object = this.objects.get(id);

    if (!object) {
      return null;
    }

    const position = new Vector3();

    object.getWorldPosition(position);

    return position;
  }
}

export const focusRegistry = new FocusRegistry();