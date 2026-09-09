import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Currently Focus",
  description:
    "Get help with Currently Focus: signing in, Google Classroom sync, splitting subjects, the timer, and your account.",
};

const faqs = [
  {
    q: "How do I sign in with Google Classroom?",
    a: "On the sign-in screen, choose \"Continue with Google Classroom\" and log in with the same Google account you use for school. Your active classes and assignments will sync in automatically.",
  },
  {
    q: "Can I use Currently Focus without Google Classroom?",
    a: "Yes. Choose \"Sign up with email\" instead, and add subjects to split yourself. You can connect a Classroom account later from your profile if you change your mind.",
  },
  {
    q: "I forgot my password. What do I do?",
    a: "Tap \"Forgot password\" on the sign-in screen and enter the email on your account. We'll send a link to reset it. If you signed up through Google Classroom, use the \"Continue with Google Classroom\" button instead — there's no separate password to reset.",
  },
  {
    q: "What's the difference between AI and manual splitting?",
    a: "AI splitting reads your subject and lays out timed blocks for you automatically. Manual splitting lets you set the blocks yourself — how many, how long, and in what order — if you already know how you want to move through the material.",
  },
  {
    q: "Can I switch a subject from AI to manual splitting, or the other way round?",
    a: "Yes, at any point before you start a block. Open the subject, tap \"Edit blocks,\" and switch the splitting method. Blocks you've already completed stay recorded.",
  },
  {
    q: "How does pausing the timer work?",
    a: "While a block is running, tap pause to stop the clock without losing your place. Tap resume to pick up exactly where you left off. Only the time the timer was actively running counts toward that block.",
  },
  {
    q: "My Google Classroom assignments aren't showing up.",
    a: "Open your profile and check that Classroom shows as connected. If it's connected but assignments still look out of date, pull down on the home screen to refresh the sync, or disconnect and reconnect the account from your profile settings.",
  },
  {
    q: "How do I delete my account or my data?",
    a: "Email us at the address below from the account's email address and ask for deletion. We'll remove your profile, subjects, and progress data, and confirm once it's done.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-16">
        <div className="time-rail mb-7">
          <span className="w-8 bg-accent" />
          <span className="w-4" />
          <span className="w-4" />
        </div>
        <h1 className="font-display max-w-lg text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Support
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
          Answers to the most common questions below. If you're stuck on
          something else, write to us directly and we'll help you sort it
          out.
        </p>
      </section>

      <section className="border-t border-border-soft">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_320px] lg:gap-10">
          <div className="divide-y divide-border-soft">
            {faqs.map((item) => (
              <details key={item.q} className="group py-6 first:pt-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-ink">
                  <span className="font-display text-base font-medium sm:text-lg">
                    {item.q}
                  </span>
                  <span className="mt-1 shrink-0 text-ink-dim transition-transform group-open:rotate-45">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-surface p-7">
            <h2 className="font-display text-lg font-medium text-ink">
              Still need help?
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
              Send us the details — your account email and what you were
              trying to do — and we'll reply as soon as we can.
            </p>
            <a
              href="mailto:support@currentlyfocus.app"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
            >
              support@currentlyfocus.app
            </a>
            <p className="mt-4 text-xs text-ink-dim">
              We usually reply within 1–2 business days.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
