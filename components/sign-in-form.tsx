"use client";

// Placeholder sign-in: collects a customer ID and password and does nothing
// with them. Wire this to the real customer portal when it exists.

const field =
  "w-full border border-line bg-bone px-4 py-3 text-base text-ink placeholder:text-ink-2/70 focus:border-ink focus:outline-none focus:ring-2 focus:ring-amber";

export function SignInForm() {
  return (
    <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="customer-id" className="eyebrow mb-2 block text-ink-2">Customer ID</label>
        <input id="customer-id" name="customerId" type="text" autoComplete="username" placeholder="e.g. OLY-00123" required className={field} />
      </div>
      <div>
        <label htmlFor="password" className="eyebrow mb-2 block text-ink-2">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className={field} />
      </div>
      <button type="submit" className="mt-1 bg-ink px-6 py-3 text-base font-semibold text-bone transition-colors hover:bg-forest">
        Sign in
      </button>
    </form>
  );
}
