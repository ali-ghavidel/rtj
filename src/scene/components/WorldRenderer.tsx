import { useEffect } from "react";

export function WorldRenderer() {
  useEffect(() => {
    console.log("WorldRenderer initialized");
  }, []);

  return null;
}