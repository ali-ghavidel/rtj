import { useEffect } from "react";

import { renderManager } from "@/engine/renderer";

export function WorldRenderer() {
  useEffect(() => {
    console.log(renderManager.getAll());
  }, []);

  return null;
}