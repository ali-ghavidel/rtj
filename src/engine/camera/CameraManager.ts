import { CameraMode } from "./CameraModes";
import type { CameraState } from "./CameraTypes";

export class CameraManager {
  private state: CameraState = {
    mode: CameraMode.Explore,

    position: [0, 10, 25],

    target: [0, 0, 0],
  };

  getState() {
    return this.state;
  }

  setState(state: CameraState) {
    this.state = state;
  }
}