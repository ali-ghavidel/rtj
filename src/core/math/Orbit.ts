import { worldOrbitToScene } from "./Scale";

export interface OrbitPosition {
  x: number;
  y: number;
  z: number;
}

export function calculateOrbitPosition(
  orbitRadiusKm: number,
  angle: number
): OrbitPosition {
  const radius = worldOrbitToScene(orbitRadiusKm);

  return {
    x: Math.cos(angle) * radius,
    y: 0,
    z: Math.sin(angle) * radius,
  };
}