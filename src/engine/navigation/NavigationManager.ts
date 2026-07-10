import { NavigationState } from "./NavigationState";
import type { Navigation } from "./NavigationTypes";

export class NavigationManager {
  private navigation: Navigation = {
    state: NavigationState.Universe,

    systemId: null,

    planetId: null,
  };

  getState() {
    return this.navigation;
  }

  setState(state: Navigation) {
    this.navigation = state;
  }

  reset() {
    this.navigation = {
      state: NavigationState.Universe,
      systemId: null,
      planetId: null,
    };
  }
}

export const navigationManager = new NavigationManager();