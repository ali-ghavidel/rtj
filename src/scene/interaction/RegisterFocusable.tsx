import {
  useEffect,
  useRef,
} from "react";

import type { Group } from "three";

import { focusRegistry } from "@/engine";

type Props = {
  id: string;
  children: React.ReactNode;
};

export function RegisterFocusable({
  id,
  children,
}: Props) {
  const ref = useRef<Group>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    focusRegistry.register(
      id,
      ref.current
    );

    return () => {
      focusRegistry.unregister(id);
    };
  }, [id]);

  return (
    <group ref={ref}>
      {children}
    </group>
  );
}