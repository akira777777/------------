import { ViewTransition } from "react";

export default function Loading() {
  return (
    <ViewTransition exit="slide-down">
      <div className="mx-auto max-w-6xl px-5 py-16" aria-hidden>
        <div className="h-10 w-56 bg-line" />
        <div className="mt-4 h-4 w-full max-w-xl bg-line" />
        <div className="mt-10 h-48 bg-line" />
      </div>
    </ViewTransition>
  );
}
