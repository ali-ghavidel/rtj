import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

export function CameraController() {
  const { camera } = useThree();

  useFrame(() => {
    camera.updateMatrixWorld();
  });

  return null;
}