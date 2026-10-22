"use client";

// Placeholder sign-in: collects a customer ID and password and does nothing
// with them. Wire this to the real customer portal when it exists.

const inputClass =
  "w-full rounded-xl border border-input bg-background px-5 py-4 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all";

export function SignInForm() {
  return (
    <form
      className="mt-8 flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="customer-id" className="mb-2 block text-sm font-medium text-foreground">
          Customer ID
        </label>
        <input
          id="customer-id"
          name="customerId"
          type="text"
          autoComplete="username"
          placeholder="e.g. OLY-00123"
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Your password"
          required
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/30"
      >
        Sign in
      </button>
    </form>
  );
}
