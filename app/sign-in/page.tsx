import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SignInForm } from "@/components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign in | Olyndra",
  description: "Sign in to your Olyndra account.",
};

export default function SignInPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <div className="rounded-3xl bg-card border border-border p-8 shadow-xl md:p-12">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Sign in
                </h1>
                <p className="mt-4 text-muted-foreground">
                  For existing Olyndra customers. Use the customer ID from your
                  loan agreement.
                </p>
              </div>
              <SignInForm />
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Not a customer yet? New loans are arranged through our{" "}
                <Link href="/#partner" className="font-medium text-primary hover:underline">
                  partner brokers
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
