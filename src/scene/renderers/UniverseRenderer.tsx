import { milkyWay } from "@/data";
import { GalaxyRenderer } from "./GalaxyRenderer";

export function UniverseRenderer() {
  return <GalaxyRenderer galaxy={milkyWay} />;
}