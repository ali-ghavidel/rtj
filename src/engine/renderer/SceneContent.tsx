import type { PropsWithChildren } from "react";

import { CameraController } from "@/engine/camera";

export function SceneContent({ children }: PropsWithChildren) {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        intensity={2}
        position={[15, 20, 10]}
        castShadow
      />

      <CameraController />

      {children}
    </>
  );
}