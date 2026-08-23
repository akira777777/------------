import { ViewTransition } from "react";
import type { ReactNode } from "react";

export function SharedTitle({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <ViewTransition name={name} share="text-morph" default="none">
      {children}
    </ViewTransition>
  );
}
