import { worldRadiusToScene } from "@/core";
import type { Star } from "@/core/types";

type StarMeshProps = {
  star: Star;
};

export function StarMesh({ star }: StarMeshProps) {
  const radius = Math.max(
    worldRadiusToScene(star.radius),
    0.8
  );

  return (
    <mesh position={star.position}>
      <sphereGeometry args={[radius, 64, 64]} />

      <meshStandardMaterial
        color={star.color}
        emissive={star.color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}