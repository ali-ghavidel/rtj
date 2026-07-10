import { CameraMode } from "./CameraModes";

export interface CameraState {
  mode: CameraMode;

  position: [number, number, number];

  target: [number, number, number];

  zoom?: number;
}