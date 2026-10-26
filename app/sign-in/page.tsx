import type { Metadata } from "next";
import Link from "next/link";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import { SignInForm } from "@/components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign in | Olyndra Lending",
  description: "Sign in to your Olyndra account.",
};

export default function SignInPage() {
  return (
    <main>
      <Topbar />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-md border border-ink bg-bone p-6 shadow-[8px_8px_0_0_var(--amber)] md:p-8">
          <p className="eyebrow text-ink-2">Existing customers</p>
          <h1 className="mt-2 font-display text-4xl text-ink">Sign in</h1>
          <p className="mt-2 mb-7 text-ink-2">Use the customer ID from your loan agreement.</p>
          <SignInForm />
          <p className="mt-7 border-t border-line pt-5 text-sm text-ink-2">
            Not a customer yet? New loans are arranged through our{" "}
            <Link href="/#brokers" className="font-medium text-ink underline underline-offset-4">partner brokers</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
