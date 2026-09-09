import Link from "next/link";
import TimeRing from "@/components/TimeRing";

const steps = [
  {
    n: "01",
    title: "Bring the subject",
    body: "Type in what you have to study — a chapter, a unit, an assignment from Google Classroom. Anything with more in it than one sitting can hold.",
  },
  {
    n: "02",
    title: "Split it into blocks",
    body: "Let the AI read the subject and lay out timed blocks for you, or set the blocks yourself if you already know how you want to move through it.",
  },
  {
    n: "03",
    title: "Focus, one block at a time",
    body: "Start the stopwatch for the block in front of you. Pause when life happens, resume where you left off, and move to the next block when it's done.",
  },
];

const features = [
  {
    title: "Google Classroom, synced",
    body: "Sign in with a Classroom account and your active classes and assignments show up ready to split — no retyping what's already assigned.",
    big: true,
  },
  {
    title: "AI or manual splitting",
    body: "Hand a subject to the AI, or lay out your own blocks by hand when you already know your pace.",
  },
  {
    title: "A stopwatch that pauses",
    body: "Start, pause, resume — the clock only counts the minutes you actually spent on a block.",
  },
  {
    title: "Your own sign-in",
    body: "Use a Classroom account, or sign up with any email. Forgot your password? Resetting one takes under a minute.",
  },
  {
    title: "Streaks and progress",
    body: "See how much focus time you've logged this week, which subjects are getting attention, and how long your streak has run.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <div className="time-rail mb-7">
              <span className="w-8 bg-accent" />
              <span className="w-4" />
              <span className="w-4" />
              <span className="w-8" />
              <span className="w-4" />
            </div>
            <h1 className="font-display max-w-xl text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-6xl">
              Split any subject into focused time blocks.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              Currently Focus breaks a big topic into small, timed pieces —
              by AI or by hand — then hands you a stopwatch built for
              getting through them, one block at a time.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#download"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
              >
                Download the app
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[320px]">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-3xl" />
            <TimeRing />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-border-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From one big subject to blocks you can finish
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm text-accent-soft">
                    {step.n}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display mt-5 text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
                {i < steps.length - 1 && (
                  <div className="mt-8 hidden h-px w-full bg-border md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built around how studying actually goes
            </h2>
            <p className="mt-4 text-ink-muted">
              Not every session goes to plan. Currently Focus is built to
              bend with that instead of resetting your progress.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl border border-border bg-surface p-7 ${
                  f.big ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="font-display text-lg font-medium text-ink">
                  {f.title}
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
            &ldquo;I stopped staring at one assignment for an hour and
            actually moved through it, block by block.&rdquo;
          </p>
          <p className="mt-5 text-sm text-ink-dim">
            A Currently Focus user
          </p>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-t border-border-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-surface p-9 sm:p-14 md:flex-row md:items-center">
            <div>
              <h2 className="font-display max-w-sm text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Get Currently Focus on your phone
              </h2>
              <p className="mt-3 max-w-sm text-sm text-ink-muted">
                Free to download. Sign in with Google Classroom or your
                email to get started.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-raised px-5 py-3 transition-colors hover:border-accent-soft/60"
              >
                <AppleGlyph />
                <span className="text-left leading-tight">
                  <span className="block text-[11px] text-ink-dim">
                    Download on the
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    App Store
                  </span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-raised px-5 py-3 transition-colors hover:border-accent-soft/60"
              >
                <PlayGlyph />
                <span className="text-left leading-tight">
                  <span className="block text-[11px] text-ink-dim">
                    Get it on
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    Google Play
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AppleGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16.2 3.6c0 1-.4 1.9-1 2.6-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.7-.8 1.9-1.4 2.8-1.2zM19.6 17c-.5 1.2-1.1 2.3-1.9 3.4-1 1.4-2.1 3.1-3.7 3.1-1.4 0-1.8-.9-3.4-.9-1.6 0-2 .9-3.4 1-1.5.1-2.6-1.5-3.6-2.9-2-2.9-3.5-8.1-1.4-11.7C3.2 7.3 5 6.3 6.7 6.3c1.5 0 2.5 1 3.7 1s2-1 3.6-1c1.3 0 2.7.7 3.6 1.9-3.2 1.8-2.7 6.4.9 7.8-.3.7-.6 1.4-.9 1.9z"
        stroke="var(--ink)"
        strokeWidth="0.4"
        fill="var(--ink)"
      />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 3.5v17l13-8.5-13-8.5z" fill="var(--ink)" />
      <path d="M4 3.5l13 8.5-13 8.5" stroke="var(--bg)" strokeWidth="0.6" />
    </svg>
  );
}
