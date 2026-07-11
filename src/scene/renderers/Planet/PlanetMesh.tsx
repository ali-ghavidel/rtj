import { worldRadiusToScene } from "@/core";
import type { Planet } from "@/core/types";
import { useAtom } from "jotai";
import { selectedBodyIdAtom } from "@/store";

type PlanetMeshProps = {
  planet: Planet;
  position: readonly [number, number, number];
};

export function PlanetMesh({
  planet,
  position,
}: PlanetMeshProps) {
  const radius = Math.max(
    worldRadiusToScene(planet.radius),
    0.15
  );
  const [selectedBodyId, setSelected] =
    useAtom(selectedBodyIdAtom);

  const selected = planet.id === selectedBodyId;

  return (
    <mesh
      position={position}
      onClick={(event) => {
        event.stopPropagation();
        setSelected(planet.id);
      }}
    >
      <sphereGeometry args={[radius, 32, 32]} />

      <meshStandardMaterial
        color={planet.color}
        emissive={
          selected
            ? "#ffffff"
            : "#000000"
        }
        emissiveIntensity={
          selected
            ? 1.5
            : 0
        }
      />
    </mesh>
  );
}