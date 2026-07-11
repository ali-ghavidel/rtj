const SCENE_SCALE = 0.00001;

export function worldRadiusToScene(radiusKm: number): number {
  return radiusKm * SCENE_SCALE;
}

export function worldDistanceToScene(distanceKm: number): number {
  return distanceKm * SCENE_SCALE;
}

export function sceneToWorld(distance: number): number {
  return distance / SCENE_SCALE;
}