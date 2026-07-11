const RADIUS_SCALE = 0.000001;
const ORBIT_SCALE = 0.02;

export function worldRadiusToScene(radiusKm: number): number {
  return radiusKm * RADIUS_SCALE;
}

export function worldOrbitToScene(distanceKm: number): number {
  return distanceKm * ORBIT_SCALE;
}

export function sceneToWorld(distance: number): number {
  return distance / ORBIT_SCALE;
}