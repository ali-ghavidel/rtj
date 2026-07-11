import { useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

import { calculateOrbitPosition } from "@/core";
import type { Moon } from "@/core/types";

type Props = {
  moon: Moon;
  children: React.ReactNode;
};

export function MoonOrbit({
  moon,
  children,
}: Props) {
  const groupRef = useRef<Group>(null);

  const angle = useRef(0);

  useFrame((_, delta) => {
    angle.current += delta * 1.2;

    const position = calculateOrbitPosition(
      moon.orbitRadius,
      angle.current
    );

    groupRef.current?.position.set(
      position.x,
      position.y,
      position.z
    );
  });

  const initial = useMemo(
    () =>
      calculateOrbitPosition(
        moon.orbitRadius,
        0
      ),
    [moon]
  );

  return (
    <group
      ref={groupRef}
      position={[
        initial.x,
        initial.y,
        initial.z,
      ]}
    >
      {children}
    </group>
  );
}