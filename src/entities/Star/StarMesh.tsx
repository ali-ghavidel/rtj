import type { Star as StarData } from "@/core/types";

type StarMeshProps = {
  star: StarData;
};

export function StarMesh({ star }: StarMeshProps) {
  return (
    <mesh position={star.position}>
      <sphereGeometry args={[0.8, 64, 64]} />

      <meshStandardMaterial
        color={star.color}
        emissive={star.color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}