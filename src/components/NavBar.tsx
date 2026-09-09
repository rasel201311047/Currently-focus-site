import Link from "next/link";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/support", label: "Support" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface">
            <span className="absolute inset-1 rounded-full border border-accent-soft/50" />
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            Currently Focus
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#download"
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}
