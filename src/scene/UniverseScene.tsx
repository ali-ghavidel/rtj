import { useEffect, useMemo } from "react";

import { universeBuilder } from "@/world";

import { UniverseRenderer } from "./renderers";

import { useAtomValue } from "jotai";

import { selectedBodyIdAtom } from "@/store";

import { focusRegistry } from "@/engine";

export function UniverseScene() {

  useEffect(() => {
  const timer = setInterval(() => {
    console.log(
      focusRegistry.getWorldPosition(
        "earth"
      )
    );
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const universe = useMemo(
    () => universeBuilder.build(),
    []
  );

  const selected =
    useAtomValue(selectedBodyIdAtom);

  console.log(selected);
  return (
    <UniverseRenderer
      universe={universe}
    />
  );
}