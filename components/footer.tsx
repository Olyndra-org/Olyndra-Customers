import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Logo />
          <div className="flex items-center gap-6">
            <Link
              href="/sign-in"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Customer sign in
            </Link>
            <a
              href="mailto:contact@olyndra.ai"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@olyndra.ai
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.olyndra.ai/privacy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a
                href="https://www.olyndra.ai/terms"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Olyndra Ltd | Registered in England and Wales | Company Number:
              17171970 | Registered Office: 124-128 City Road, London, EC1V 2NX
            </p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-2xl">
              Lending to limited companies and LLPs only. Olyndra does not offer
              consumer credit. New customers are currently accepted through our
              partner brokers.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Olyndra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
