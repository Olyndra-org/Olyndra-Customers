"use client";

import { useState } from "react";

// Same form backend as olyndra.ai (Web3Forms). Replace the key if you create a
// separate one for olyndra.com.
const WEB3FORMS_ACCESS_KEY = "aaea8fcf-7152-4f73-96ca-d2a8f539fcca";

const field =
  "w-full border border-line bg-bone px-4 py-3 text-base text-ink placeholder:text-ink-2/70 focus:border-ink focus:outline-none focus:ring-2 focus:ring-amber";

const label = "eyebrow mb-2 block text-ink-2";

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
          from_name: "Olyndra Lending broker form",
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
      <div className="border border-ink bg-bone p-6">
        <p className="font-display text-2xl text-ink">Thanks. We have your details.</p>
        <p className="mt-2 text-ink-2">One of the founders will come back to you directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firm" className={label}>Brokerage</label>
          <input id="firm" name="firm" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Work email</label>
          <input id="email" name="email" type="email" required className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>The clients you typically place</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Sector, loan size, roughly how many a month"
          className={`${field} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-amber px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-amber-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request a partner conversation"}
      </button>
      {status === "error" && (
        <p className="text-sm text-ink">
          That didn&apos;t send. Email us instead at contact@olyndra.ai.
        </p>
      )}
      <p className="font-mono text-xs text-ink-2">No newsletters. We reply to every broker enquiry.</p>
    </form>
  );
}
