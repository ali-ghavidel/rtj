import { useMemo } from "react";

import { Line } from "@react-three/drei";

import { worldOrbitToScene } from "@/core";

type OrbitPathProps = {
  radius: number;
  segments?: number;
};

export function OrbitPath({
  radius,
  segments = 128,
}: OrbitPathProps) {
  const points = useMemo(() => {
    const orbitRadius = worldOrbitToScene(radius);

    return Array.from(
      { length: segments + 1 },
      (_, index) => {
        const angle =
          (index / segments) *
          Math.PI *
          2;

        return [
          Math.cos(angle) * orbitRadius,
          0,
          Math.sin(angle) * orbitRadius,
        ] as [number, number, number];
      }
    );
  }, [radius, segments]);

  return (
    <Line
      points={points}
      color="#666666"
      lineWidth={1}
    />
  );
}