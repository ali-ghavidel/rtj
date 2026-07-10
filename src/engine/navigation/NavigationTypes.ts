import { NavigationState } from "./NavigationState";

export interface Navigation {
  state: NavigationState;

  systemId: string | null;

  planetId: string | null;
}