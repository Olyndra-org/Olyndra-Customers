import Link from "next/link";
import {
  Landmark,
  Zap,
  Banknote,
  Check,
  Linkedin,
  Handshake,
  ListChecks,
  FileText,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PartnerForm from "@/components/partner-form";

const stats = [
  { value: "Minutes", label: "From bank data to decision" },
  { value: "Fixed", label: "Rate for the whole term" },
  { value: "£150", label: "Flat arrangement fee" },
  { value: "£0", label: "Early-repayment fee" },
];

const steps = [
  {
    icon: Landmark,
    title: "1. Connect the bank account",
    body: "Your client links their business bank account through open banking. No PDFs, no spreadsheets, no forms they have already filled in elsewhere.",
  },
  {
    icon: Zap,
    title: "2. Real-time decision",
    body: "Our agents read the cash flow and decide in minutes. Amount, rate and term on one screen, with the reasoning shown, not hidden.",
  },
  {
    icon: Banknote,
    title: "3. Sign and draw down",
    body: "A plain-English agreement, signed online. Funds are released once it is signed. Fixed rate for the term and no fee to repay early.",
  },
];

const whoWeLendTo = [
  "UK limited companies and LLPs",
  "A trading business bank account the directors can connect",
  "Directors who want a fast, fair answer rather than a long process",
  "Short-term working capital, not consumer credit",
];

const whatClientsGet = [
  "A decision in minutes, online, with the working shown",
  "A fixed rate for the term: the number does not move",
  "One flat £150 fee, and nothing to pay for early repayment",
  "A plain-English agreement that says up front what happens if a payment is missed",
];

const brokerBenefits = [
  {
    icon: Zap,
    title: "An answer while the client is still on the phone",
    body: "Real-time decisions mean you are not waiting days for an underwriter to come back to you.",
  },
  {
    icon: ListChecks,
    title: "Clear criteria, no surprises",
    body: "We say the number up front. If we cannot lend, you hear that in minutes too, with the reason.",
  },
  {
    icon: FileText,
    title: "A contract your clients can read",
    body: "Short sentences, no tricks. Fewer questions back to you after signing.",
  },
  {
    icon: Handshake,
    title: "Direct access to the founders",
    body: "We are a small, agent-run lender. Partner brokers deal with the people who make the decisions.",
  },
];

const team = [
  {
    initials: "RK",
    name: "Ricky Knox",
    role: "Co-founder · Credit, capital and regulation",
    bio: "Fintech founder and operator. Previously Tandem, Azimo, Small World and Prosper.",
    linkedin: "https://www.linkedin.com/in/rickyknox/",
  },
  {
    initials: "NZ",
    name: "Noam Zeigerson",
    role: "Co-founder · Technology and the agents",
    bio: "Serial entrepreneur building AI businesses since 2012. Built banking systems for Barclays, Bank Hapoalim and Tandem.",
    linkedin: "https://www.linkedin.com/in/noamzeigerson/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Lending through partner brokers only
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Business loans decided in minutes.{" "}
              <span className="text-primary">Funded in a flash.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
              Olyndra is an AI-run lender for UK limited companies. We read the
              business&apos;s bank data, give a real-time online decision and
              pay out fast, with a fixed rate, one flat fee and an agreement
              written in plain English.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#partner"
                className="w-full sm:w-auto rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Partner with us
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto rounded-xl bg-card border border-border px-8 py-4 text-base font-semibold text-foreground hover:bg-muted transition-colors"
              >
                How it works
              </Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground text-pretty">
              We are not taking applications directly from businesses at the
              moment. New customers come to us through our partner brokers.
              Existing customers can{" "}
              <Link href="/sign-in" className="font-medium text-primary hover:underline">
                sign in here
              </Link>
              .
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-32 bg-muted/30 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Decided online, in real time
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Three steps, one sitting. The decision is made from the business&apos;s
              own bank data, and we show the working.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="group relative rounded-2xl bg-card border border-border p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we lend to / what clients get */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-card border border-border p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who we lend to
              </h2>
              <ul className="mt-6 space-y-4">
                {whoWeLendTo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-card border border-border p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What your clients get
              </h2>
              <ul className="mt-6 space-y-4">
                {whatClientsGet.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For brokers */}
      <section id="partner" className="py-20 md:py-32 bg-muted/30 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Now onboarding partner brokers
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Partner with Olyndra
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              We work with a small number of commercial finance brokers who want
              a fast, honest answer for their clients. Here is what that looks
              like.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {brokerBenefits.map((b) => (
              <div
                key={b.title}
                className="group relative rounded-2xl bg-card border border-border p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{b.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-3xl bg-card border border-border p-8 shadow-xl md:p-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Tell us about your firm
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Leave your details and one of the founders will come back to
                  you directly.
                </p>
              </div>
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 md:py-32 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              The founding team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Two founders, a team of AI agents, and a track record in building
              banks and lenders. More about us on LinkedIn.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl bg-card border border-border p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  View on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
