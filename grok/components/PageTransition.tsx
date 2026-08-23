import { ViewTransition } from "react";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        "nav-fade": "fade-in",
        default: "none",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        "nav-fade": "fade-out",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
