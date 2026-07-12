import type { ThreeEvent } from "@react-three/fiber";
import { useAtom } from "jotai";

import { selectedBodyIdAtom } from "@/store";

type SelectableProps = {
  id: string;
  children: React.ReactNode;
};

export function Selectable({
  id,
  children,
}: SelectableProps) {
  const [, setSelected] = useAtom(
    selectedBodyIdAtom
  );

  const handleClick = (
    event: ThreeEvent<MouseEvent>
  ) => {
    event.stopPropagation();

    setSelected(id);
  };

  return (
    <group onClick={handleClick}>
      {children}
    </group>
  );
}