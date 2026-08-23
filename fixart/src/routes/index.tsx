import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

const TOPICS = [
  "CPU spikes",
  "memory leaks",
  "slow requests",
  "layout shifts",
  "cache misses",
  "flaky tests",
];

const SIGNALS = [
  { label: "CPU", value: 78, tone: "from-sky-400 to-cyan-300" },
  { label: "Memory", value: 64, tone: "from-violet-400 to-fuchsia-300" },
  { label: "Network", value: 89, tone: "from-emerald-400 to-lime-300" },
];

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const topic = TOPICS[topicIndex];

  useEffect(() => {
    const id = window.setInterval(() => setTick((value) => (value + 1) % 4), 1800);
    return () => window.clearInterval(id);
  }, []);

  const insight = useMemo(
    () =>
      tick === 0
        ? "No regressions detected in the last 24 checks."
        : tick === 1
          ? "A render path is re-running on every keystroke."
          : tick === 2
            ? "The hot path is the first paint, not the data fetch."
            : "One animation frame is dropping during resize.",
    [tick],
  );

  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_28%),linear-gradient(180deg,_#0b1020,_#050816_72%)] px-4 py-6 text-fg sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur xl:grid xl:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8 p-6 sm:p-8 lg:p-10">
          <div className="flex items-center justify-between text-sm text-muted">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-accent">
              debug / optimize
            </span>
            <span>Live signal · {topic}</span>
          </div>

          <div className="max-w-2xl space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
              Performance triage console
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Find the bottleneck, then ship the fix.
            </h1>
            <p className="max-w-xl text-base leading-7 text-fg/78 sm:text-lg">
              A focused workspace for spotting slow paths, noisy renders, and wasted cycles before they
              become production incidents.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {SIGNALS.map((signal) => (
              <article key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{signal.label}</span>
                  <span>{signal.value}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/8">
                  <div className={`h-full rounded-full bg-gradient-to-r ${signal.tone}`} style={{ width: `${signal.value}%` }} />
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {TOPICS.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setTopicIndex(index)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  index === topicIndex
                    ? "border-cyan-300/60 bg-cyan-300/15 text-white"
                    : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <aside className="border-t border-white/10 bg-black/20 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#070b18] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Current diagnosis</span>
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">stable</span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-white">{insight}</p>
            <div className="mt-6 space-y-4">
              {[
                ["Trace depth", "18 spans"],
                ["Largest gap", "63 ms"],
                ["Confidence", "92%"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm">
                  <span className="text-muted">{label}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
