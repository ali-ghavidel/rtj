import type { Camera } from "three";

import { CameraMode } from "./CameraModes";
import type { CameraState } from "./CameraTypes";

export class CameraManager {
  private camera: Camera | null = null;

  private state: CameraState = {
    mode: CameraMode.Explore,
    position: [0, 10, 25],
    target: [0, 0, 0],
  };

  attach(camera: Camera) {
    this.camera = camera;

    this.applyState();
  }

  detach() {
    this.camera = null;
  }

  getState() {
    return this.state;
  }

  setState(state: CameraState) {
    this.state = state;

    this.applyState();
  }

  private applyState() {
    if (!this.camera) return;

    this.camera.position.set(...this.state.position);

    this.camera.lookAt(...this.state.target);
  }

  update() {
    if (!this.camera) return;

    this.camera.updateMatrixWorld();
  }
}

export const cameraManager = new CameraManager();