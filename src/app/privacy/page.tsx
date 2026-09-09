import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Currently Focus",
  description: "How Currently Focus collects, uses, and protects your data.",
};

const sections = [
  {
    id: "collect",
    title: "1. Information we collect",
    body: (
      <>
        <p>
          <strong className="text-ink">Account information.</strong> When
          you sign up, we collect your name, email address, and school name
          if you add one. If you sign in with Google Classroom instead of a
          password, Google shares your name, email address, and profile
          image with us so we can create your account.
        </p>
        <p>
          <strong className="text-ink">Google Classroom data.</strong> If
          you connect a Classroom account, we read your list of active
          classes and their assignments so they can appear as subjects to
          split inside the app. We do not read your grades, private
          messages, or files outside of what's needed to show class and
          assignment names.
        </p>
        <p>
          <strong className="text-ink">Study activity.</strong> This
          includes the subjects you split, whether you used AI or manual
          splitting, the time blocks you create, your focus session
          history, pause and resume activity, streaks, and progress
          statistics.
        </p>
        <p>
          <strong className="text-ink">Profile image.</strong> If you
          upload a profile photo, we store it to display on your account.
        </p>
        <p>
          <strong className="text-ink">Messages you send us.</strong> If
          you contact support, we keep the subject, message, and the email
          address it came from so we can respond and keep a record of the
          conversation.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "2. How we use this information",
    body: (
      <>
        <p>We use the information above to:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-ink-dim">
          <li>Create and secure your account, and sign you back in.</li>
          <li>
            Sync your Google Classroom classes and assignments so they're
            ready to split.
          </li>
          <li>Generate AI-suggested time blocks for a subject.</li>
          <li>
            Track your focus time, streaks, and progress so you can see how
            you're doing over time.
          </li>
          <li>Respond to support requests you send us.</li>
          <li>
            Maintain the security of the app and investigate misuse.
          </li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it to
          serve you ads.
        </p>
      </>
    ),
  },
  {
    id: "google",
    title: "3. Our use of Google Classroom data",
    body: (
      <>
        <p>
          Currently Focus's use and transfer of information received from
          Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="text-accent-soft underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements. Classroom data is used
          only to display your classes and assignments inside the app as
          subjects you can split into time blocks — it is never used for
          advertising, and it is never sold or shared with data brokers.
        </p>
        <p>
          You can disconnect Google Classroom at any time from your profile
          settings. Doing so stops future syncing; it does not delete study
          activity you've already recorded against a synced assignment.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. Sharing your information",
    body: (
      <>
        <p>
          We share information only where it's needed to run the app:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-ink-dim">
          <li>
            With Google, when you choose to sign in or sync with Google
            Classroom.
          </li>
          <li>
            With service providers who host our servers and databases, and
            who process data only on our instructions.
          </li>
          <li>
            With authorities, if required by law or to protect the safety
            of our users.
          </li>
        </ul>
        <p>We do not share your data with advertisers or data brokers.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "5. How long we keep your data",
    body: (
      <>
        <p>
          We keep your account and study activity for as long as your
          account is active. If you delete your account, we remove your
          profile, study data, and progress history, aside from records we
          need to keep briefly for security or legal reasons. You can
          request deletion at any time — see the contact section below.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "6. Students and children's privacy",
    body: (
      <>
        <p>
          Currently Focus is built for students and is often used through a
          school's Google Classroom account. Where a school or guardian
          sets up Classroom access on a student's behalf, that school or
          guardian is responsible for the consent needed under applicable
          children's privacy laws (such as COPPA in the United States). We
          collect only the information described in this policy and do not
          knowingly collect more than is needed to provide the app. If you
          are a parent or guardian and believe your child has provided us
          with information beyond what's described here, contact us and we
          will remove it.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Security",
    body: (
      <>
        <p>
          We use industry-standard measures — including encrypted
          connections and access controls on our databases — to protect
          your information. No method of storing or transmitting data is
          completely secure, so we can't guarantee absolute security, but
          we work to keep your data protected and to respond quickly if
          something goes wrong.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "8. Your rights and choices",
    body: (
      <>
        <p>
          You can review and update your profile information from inside
          the app at any time. You can disconnect Google Classroom, change
          your password, or delete your account whenever you'd like.
          Depending on where you live, you may also have the right to
          request a copy of your data or ask us to correct or delete it —
          write to us and we'll take care of it.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    body: (
      <>
        <p>
          If we make meaningful changes to this policy, we'll update the
          date below and, where the changes are significant, let you know
          inside the app.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact us",
    body: (
      <>
        <p>
          Questions about this policy or your data can be sent to{" "}
          <a
            href="mailto:privacy@currentlyfocus.app"
            className="text-accent-soft underline underline-offset-2"
          >
            privacy@currentlyfocus.app
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-16">
        <div className="time-rail mb-7">
          <span className="w-8 bg-accent" />
          <span className="w-4" />
          <span className="w-4" />
        </div>
        <h1 className="font-display max-w-lg text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-sm text-ink-dim">Last updated: September 9, 2026</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
          This policy explains what Currently Focus collects, how we use
          it, and the choices you have. It applies to the Currently Focus
          mobile app and this website.
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
