"use client";

import { useState } from "react";

// Same form backend as olyndra.ai (Web3Forms). Replace the key if you create a
// separate one for olyndra.com.
const WEB3FORMS_ACCESS_KEY = "aaea8fcf-7152-4f73-96ca-d2a8f539fcca";

const inputClass =
  "w-full rounded-xl border border-input bg-background px-5 py-4 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all";

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New broker partnership enquiry (olyndra.com)",
          from_name: "Olyndra.com broker form",
          ...Object.fromEntries(new FormData(form).entries()),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center">
        <p className="text-lg font-semibold text-foreground">Thanks. We have your details.</p>
        <p className="mt-2 text-muted-foreground">
          One of the founders will come back to you directly.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-8" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input id="firm" name="firm" type="text" placeholder="Brokerage name" required className={inputClass} />
        <input id="name" name="name" type="text" placeholder="Your name" required className={inputClass} />
        <input id="email" name="email" type="email" placeholder="Work email" required className={inputClass} />
        <input id="phone" name="phone" type="tel" placeholder="Phone (optional)" className={inputClass} />
      </div>
      <textarea
        id="message"
        name="message"
        rows={3}
        placeholder="The clients you typically place: sector, loan size, how many a month"
        className={`${inputClass} mt-4 resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 w-full rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:shadow-xl hover:shadow-primary/30"
      >
        {status === "sending" ? "Sending…" : "Request a partner conversation"}
      </button>
      {status === "error" && (
        <p className="mt-4 text-center text-sm text-destructive">
          That didn&apos;t send. Email us instead at contact@olyndra.ai.
        </p>
      )}
      <p className="mt-4 text-center text-sm text-muted-foreground">
        No spam, ever. We respect your privacy.
      </p>
    </form>
  );
}
