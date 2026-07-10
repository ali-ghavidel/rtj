import { atom } from "jotai";

import { CameraMode } from "@/engine/camera";
import type { CameraState } from "@/engine/camera";

export const cameraAtom = atom<CameraState>({
  mode: CameraMode.Explore,

  position: [0, 10, 25],

  target: [0, 0, 0],

  zoom: 1,
});