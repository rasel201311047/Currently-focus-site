import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-display text-sm font-semibold text-ink">
              Currently Focus
            </span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-ink-dim">
            One subject, broken into blocks a student can actually finish.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link href="/#how-it-works" className="text-ink-muted hover:text-ink">
            How it works
          </Link>
          <Link href="/#features" className="text-ink-muted hover:text-ink">
            Features
          </Link>
          <Link href="/support" className="text-ink-muted hover:text-ink">
            Support
          </Link>
          <Link href="/privacy" className="text-ink-muted hover:text-ink">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="border-t border-border-soft px-5 py-5 text-center text-xs text-ink-dim sm:px-8">
        © {new Date().getFullYear()} Currently Focus. All rights reserved.
      </div>
    </footer>
  );
}
