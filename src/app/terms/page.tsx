import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Currently Focus",
  description:
    "Terms and conditions governing your use of Currently Focus website and mobile application.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          By downloading, accessing, or using the Currently Focus mobile
          application or website, you agree to be bound by these Terms of
          Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms,
          please do not use Currently Focus.
        </p>
        <p>
          Currently Focus is designed for students to organize, split, and track
          their focus time. If you are under the age of 13, you confirm that
          you have permission from a parent, guardian, or educational institution
          to use the app.
        </p>
      </>
    ),
  },
  {
    id: "description",
    title: "2. Description of Service",
    body: (
      <>
        <p>
          Currently Focus provides tools for break-down studying, including
          manual and AI-assisted subject splitting into structured time blocks,
          a focus timer with pause and resume capability, streak tracking, and
          optional integration with Google Classroom.
        </p>
        <p>
          We continuously update and refine our service. Features may be modified,
          added, or temporarily suspended for maintenance or improvements without
          prior notice.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "3. Account Registration & Security",
    body: (
      <>
        <p>
          You can create an account using your email address or by signing in
          through Google Classroom. You are responsible for keeping your login
          credentials secure and for all activities that occur under your account.
        </p>
        <p>
          If you believe your account has been compromised, you should notify us
          immediately at{" "}
          <a
            href="mailto:support@currentlyfocus.app"
            className="text-accent-soft underline underline-offset-2"
          >
            support@currentlyfocus.app
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "google-classroom",
    title: "4. Third-Party Integrations & Google Classroom",
    body: (
      <>
        <p>
          Currently Focus offers optional integration with Google Classroom to allow
          you to import classes and assignments as study subjects.
        </p>
        <p>
          Your use of Google Classroom within Currently Focus is governed by
          Google&apos;s Terms of Service and Privacy Policy, in addition to our own
          Privacy Policy. You may disconnect your Google Classroom account at any time
          from your profile settings.
        </p>
      </>
    ),
  },
  {
    id: "ai-disclaimer",
    title: "5. AI Features & Study Breakdown Disclaimer",
    body: (
      <>
        <p>
          Our AI splitting feature suggests study intervals, session lengths, and
          breakdown blocks based on subject inputs or assignment titles. These
          suggestions are provided for organizational and educational assistance only.
        </p>
        <p>
          Currently Focus does not guarantee specific academic outcomes, grades, or
          exam results. You remain responsible for managing your own study routine
          and verifying assignment deadlines.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable Use Policy",
    body: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-ink-dim">
          <li>
            Use Currently Focus for any unlawful purpose or in violation of school,
            institutional, or local policies.
          </li>
          <li>
            Attempt to reverse engineer, decompile, or tamper with the app source
            code, backend servers, or APIs.
          </li>
          <li>
            Abuse our AI service or backend infrastructure with automated scripts,
            bot traffic, or excessive requests.
          </li>
          <li>
            Impersonate another student, individual, or entity when contacting
            support or creating an account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    body: (
      <>
        <p>
          The Currently Focus app, including logos, visual designs, icons, code,
          brand identity, and original interface elements, are protected by
          intellectual property rights and belong exclusively to Currently Focus.
        </p>
        <p>
          You are granted a personal, non-exclusive, non-transferable, revocable
          license to use the app for personal, non-commercial study purposes.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "8. Limitation of Liability",
    body: (
      <>
        <p>
          Currently Focus is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS
          AVAILABLE&rdquo; basis without warranties of any kind, whether express
          or implied.
        </p>
        <p>
          To the maximum extent permitted by law, Currently Focus shall not be liable
          for any indirect, incidental, special, or consequential damages resulting
          from your use or inability to use the service, including data loss or
          temporary downtime.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "9. Account Termination & Data Removal",
    body: (
      <>
        <p>
          You may stop using Currently Focus at any time. You can request full
          deletion of your account and associated study data by emailing us at{" "}
          <a
            href="mailto:support@currentlyfocus.app"
            className="text-accent-soft underline underline-offset-2"
          >
            support@currentlyfocus.app
          </a>
          .
        </p>
        <p>
          We reserve the right to suspend or terminate accounts that violate these
          Terms or engage in malicious activity against our platform.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to Terms & Contact",
    body: (
      <>
        <p>
          We may update these Terms periodically. When changes are made, we will
          revise the &ldquo;Last updated&rdquo; date at the top of this page. Continued
          use of Currently Focus after updates constitutes acceptance of the modified Terms.
        </p>
        <p>
          If you have questions regarding these Terms, please contact us at{" "}
          <a
            href="mailto:support@currentlyfocus.app"
            className="text-accent-soft underline underline-offset-2"
          >
            support@currentlyfocus.app
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-16">
        <div className="time-rail mb-7">
          <span className="w-8 bg-accent" />
          <span className="w-4" />
          <span className="w-4" />
        </div>
        <h1 className="font-display max-w-lg text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-5 text-sm text-ink-dim">Last updated: September 14, 2026</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
          These terms govern your use of the Currently Focus website, mobile
          application, and related services. Please read them carefully.
        </p>
      </section>

      <section className="border-t border-border-soft">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav className="hidden h-fit flex-col gap-1 lg:flex lg:sticky lg:top-24">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-lg px-3 py-1.5 text-sm text-ink-dim transition-colors hover:bg-surface hover:text-ink"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="max-w-2xl space-y-14">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="font-display text-xl font-medium text-ink">
                  {s.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
