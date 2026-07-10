import { atom } from "jotai";

import { CameraMode } from "@/engine/camera";

export const cameraModeAtom = atom(CameraMode.Explore);

export const cameraPositionAtom = atom<[number, number, number]>([
  0,
  10,
  25,
]);

export const cameraTargetAtom = atom<[number, number, number]>([
  0,
  0,
  0,
]);