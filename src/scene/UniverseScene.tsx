import { useMemo } from "react";

import { universeBuilder } from "@/world";

import { UniverseRenderer } from "./renderers";

export function UniverseScene() {
  const universe = useMemo(
    () => universeBuilder.build(),
    []
  );

  return (
    <UniverseRenderer
      universe={universe}
    />
  );
}