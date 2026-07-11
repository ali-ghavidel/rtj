import type { SolarSystem } from "@/core/types";
import { StarRenderer } from "./Star";


type SolarSystemRendererProps = {
  solarSystem: SolarSystem;
};

export function SolarSystemRenderer({
  solarSystem,
}: SolarSystemRendererProps) {
  return (
    <>
      {solarSystem.stars.map((star) => (
        <StarRenderer
          key={star.id}
          star={star}
        />
      ))}

      {/* PlanetRenderer خواهد آمد */}
    </>
  );
}