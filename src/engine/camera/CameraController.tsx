import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import { cameraManager } from "./CameraManager";

export function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    cameraManager.attach(camera);

    return () => {
      cameraManager.detach();
    };
  }, [camera]);

  useFrame(() => {
    cameraManager.update();
  });

  return null;
}