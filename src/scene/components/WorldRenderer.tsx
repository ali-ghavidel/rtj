import { sun } from "@/data";
import { StarRenderer } from "@/entities";

export function WorldRenderer() {
  return <StarRenderer star={sun} />;
}