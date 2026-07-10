import { atom } from "jotai";

import {
  NavigationState,
  type Navigation,
} from "@/engine/navigation";

export const navigationAtom = atom<Navigation>({
  state: NavigationState.Universe,

  systemId: null,

  planetId: null,
});