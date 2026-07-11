import { worldRadiusToScene } from "@/core";
import type { Moon } from "@/core/types";

type Props = {
  moon: Moon;
};

export function MoonMesh({ moon }: Props) {
  const radius = Math.max(
    worldRadiusToScene(moon.radius),
    0.08
  );

  return (
    <mesh>
      <sphereGeometry args={[radius, 24, 24]} />

      <meshStandardMaterial
        color="#d8d8d8"
      />
    </mesh>
  );
}