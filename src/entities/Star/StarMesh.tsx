import type { Star as StarData } from "@/core/types";
import { worldRadiusToScene } from "@/core";

type StarMeshProps = {
  star: StarData;
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