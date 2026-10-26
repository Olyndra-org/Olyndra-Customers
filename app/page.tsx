import Link from "next/link";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import { DecisionTicket } from "@/components/decision-ticket";
import { PartnerForm } from "@/components/partner-form";

const facts = [
  "Decision in minutes",
  "Fixed rate for the term",
  "£150 flat fee",
  "£0 early-repayment fee",
  "Ltd & LLP only",
  "Partner brokers only",
];

const steps = [
  {
    n: "01",
    title: "Connect the bank account",
    body: "Your client links the business's bank account through open banking. No PDFs, no spreadsheets, no re-keying of forms they have already filled in elsewhere.",
  },
  {
    n: "02",
    title: "We read it, and decide",
    body: "Our agents read the cash flow and run the company and director checks. The answer, with the amount, term and rate, comes back in minutes, with the reasoning shown.",
  },
  {
    n: "03",
    title: "Sign, then draw down",
    body: "A short agreement in plain English, signed online. Funds are released once it is signed.",
  },
];

const terms = [
  { k: "Who", v: "UK limited companies and LLPs with a trading business bank account" },
  { k: "Decision", v: "Online, in real time, from the business's own bank data" },
  { k: "Rate", v: "Fixed for the whole term. The number does not move." },
  { k: "Fee", v: "£150, flat. There are no other charges." },
  { k: "Early repayment", v: "£0. Repay early and you stop paying interest; that is all." },
  { k: "If a payment is missed", v: "What happens next is written in the agreement before you sign, in plain English." },
  { k: "What we do not do", v: "Consumer credit, or long processes." },
];

const brokerPoints = [
  {
    title: "An answer while the client is still on the phone",
    body: "Real-time decisions. You are not waiting days for an underwriter to come back.",
  },
  {
    title: "A clear no, fast",
    body: "If we cannot lend, you hear that in minutes as well, with the reason.",
  },
  {
    title: "A contract your clients can read",
    body: "Short sentences, no tricks. Fewer questions back to you after signing.",
  },
  {
    title: "Founders on the other end",
    body: "We are a small, agent-run lender. Partner brokers deal directly with the people who make the decisions.",
  },
];

const team = [
  {
    name: "Ricky Knox",
    role: "Co-founder · credit, capital, regulation",
    bio: "Fintech founder and operator. Previously Tandem, Azimo, Small World and Prosper.",
    linkedin: "https://www.linkedin.com/in/rickyknox/",
  },
  {
    name: "Noam Zeigerson",
    role: "Co-founder · technology and the agents",
    bio: "Serial entrepreneur building AI businesses since 2012. Built banking systems for Barclays, Bank Hapoalim and Tandem.",
    linkedin: "https://www.linkedin.com/in/noamzeigerson/",
  },
];

export default function Home() {
  return (
    <main>
      <Topbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow text-ink-2">Business lending · UK limited companies</p>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl">
              A lending decision in minutes, <em className="text-forest">not weeks.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">
              We read the business&apos;s own bank data and decide online, in real
              time. One fixed rate for the term, one flat fee, and an agreement
              written so a director can read it in one sitting.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#brokers"
                className="bg-amber px-6 py-3 text-center text-base font-semibold text-ink transition-colors hover:bg-amber-2"
              >
                Become a partner broker
              </Link>
              <Link
                href="#how"
                className="border border-ink px-6 py-3 text-center text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                See how it works
              </Link>
            </div>
            <div className="mt-9 border-l-2 border-amber pl-4 text-sm leading-relaxed text-ink-2">
              We are not taking applications directly from businesses at the
              moment. New customers come to us through our partner brokers.
              Existing customers can{" "}
              <Link href="/sign-in" className="font-medium text-ink underline underline-offset-4">
                sign in here
              </Link>
              .
            </div>
          </div>
          <div className="min-w-0 lg:pt-8">
            <DecisionTicket />
            <p className="mt-4 font-mono text-xs text-ink-2">
              Illustrative. Timings and figures are an example, not a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <div className="border-y border-line-forest bg-forest text-bone">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-10 gap-y-3 px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] lg:px-8">
          {facts.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-amber" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <p className="eyebrow text-ink-2">How it works</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Three steps. One sitting.
            </h2>
            <p className="mt-5 max-w-sm text-ink-2 leading-relaxed">
              The decision is made from the business&apos;s own numbers, and we
              show the working rather than hide it behind a scorecard.
            </p>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {steps.map((s) => (
              <li key={s.n} className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono text-2xl text-forest">{s.n}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="scroll-mt-20 bg-bone-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink-2">What we say up front</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              The terms, in one table.
            </h2>
            <p className="mt-5 text-ink-2 leading-relaxed">
              Everything a broker needs to tell a client before they connect
              their account. Nothing here changes after the decision.
            </p>
          </div>
          <dl className="mt-12 border-t border-ink">
            {terms.map((t) => (
              <div
                key={t.k}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <dt className="eyebrow pt-1 text-forest">{t.k}</dt>
                <dd className="text-lg leading-relaxed text-ink">{t.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Brokers */}
      <section id="brokers" className="scroll-mt-20 bg-forest text-bone">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow text-moss">For brokers</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              We lend through you.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-moss">
              We work with a small number of commercial finance brokers who want
              a fast, honest answer for their clients. Here is what that looks
              like in practice.
            </p>
            <ul className="mt-10 space-y-7">
              {brokerPoints.map((p) => (
                <li key={p.title} className="grid grid-cols-[1.25rem_1fr] gap-4">
                  <span className="mt-2 h-2 w-2 bg-amber" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-bone">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-moss">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 border border-line-forest bg-bone p-6 text-ink md:p-8">
            <p className="eyebrow text-ink-2">Partner enquiry</p>
            <h3 className="mt-2 font-display text-3xl text-ink">Tell us about your firm</h3>
            <p className="mt-2 mb-7 text-ink-2">
              One of the founders will come back to you directly.
            </p>
            <PartnerForm />
          </div>
        </div>
      </section>

      {/* Team */}
      {/*
      <section id="team" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow text-ink-2">The founders</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                Two people and a team of agents.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-ink-2">
                Between them, a track record in building banks and lenders. More
                about each of us on LinkedIn.
              </p>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {team.map((p) => (
                <div key={p.name} className="grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div className="min-w-0">
                    <h3 className="font-display text-3xl text-ink">{p.name}</h3>
                    <p className="eyebrow mt-2 text-forest">{p.role}</p>
                    <p className="mt-3 leading-relaxed text-ink-2">{p.bio}</p>
                  </div>
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start whitespace-nowrap border border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-bone"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
*/}
      <Footer />
    </main>
  );
}
