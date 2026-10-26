import Link from "next/link";
import { Wordmark } from "./wordmark";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark onDark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-moss">
              Short-term loans for UK limited companies and LLPs, decided in
              real time from the business&apos;s own bank data.
            </p>
          </div>
          <div>
            <p className="eyebrow text-moss">Site</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/#how" className="hover:text-amber">How it works</Link></li>
              <li><Link href="/#terms" className="hover:text-amber">Terms we offer</Link></li>
              <li><Link href="/#brokers" className="hover:text-amber">For brokers</Link></li>
              <li><Link href="/#team" className="hover:text-amber">Team</Link></li>
              <li><Link href="/sign-in" className="hover:text-amber">Customer sign in</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-moss">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:contact@olyndra.ai" className="hover:text-amber">contact@olyndra.ai</a></li>
              <li className="text-moss">124-128 City Road<br />London EC1V 2NX</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-line-forest pt-6 font-mono text-xs leading-relaxed text-moss">
          <p>
            Olyndra Ltd · Registered in England and Wales · Company no. 17171970 ·
            Registered office 124-128 City Road, London EC1V 2NX.
          </p>
          <p className="mt-2">
            Lending to limited companies and LLPs only. We do not offer consumer
            credit. New customers are currently accepted through partner brokers.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Olyndra Ltd</p>
        </div>
      </div>
    </footer>
  );
}
