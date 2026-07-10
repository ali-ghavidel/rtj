import { Canvas } from "@react-three/fiber";
import type { PropsWithChildren } from "react";

import { SceneContent } from "./SceneContent";

export function GameCanvas({ children }: PropsWithChildren) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100000,
        position: [0, 10, 25],
      }}
    >
      <SceneContent>{children}</SceneContent>
    </Canvas>
  );
}