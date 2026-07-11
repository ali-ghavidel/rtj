import type { Star as StarData } from "@/core/types";

import { StarMesh } from "./StarMesh";

type StarRendererProps = {
  star: StarData;
};

export function StarRenderer({
  star,
}: StarRendererProps) {
  return <StarMesh star={star} />;
}