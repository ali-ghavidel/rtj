import { useMemo } from "react";

import { universeBuilder } from "@/world";

import { UniverseRenderer } from "./renderers";

import { useAtomValue } from "jotai";

import { selectedBodyIdAtom } from "@/store";

export function UniverseScene() {
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