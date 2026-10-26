// Illustrative "decision log" shown in the hero. Static example, not live data.

const rows = [
  { t: "00:00", label: "Bank account connected", value: "Open banking" },
  { t: "00:04", label: "Transactions read", value: "18 months" },
  { t: "00:31", label: "Affordability checked", value: "Pass" },
  { t: "00:58", label: "Director & company checks", value: "Pass" },
  { t: "01:52", label: "Decision", value: "Approved", strong: true },
];

export function DecisionTicket() {
  return (
    <div className="border border-ink bg-ink text-bone shadow-[8px_8px_0_0_var(--amber)]">
      <div className="flex items-center justify-between border-b border-line-forest px-5 py-3">
        <span className="eyebrow text-moss">Decision log · example</span>
        <span className="inline-flex items-center gap-2 font-mono text-xs text-amber">
          <span className="h-2 w-2 animate-pulse bg-amber" aria-hidden="true" />
          live
        </span>
      </div>
      <ol className="divide-y divide-line-forest font-mono text-sm">
        {rows.map((r) => (
          <li key={r.t} className="grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-3 px-5 py-3">
            <span className="text-moss">{r.t}</span>
            <span className={r.strong ? "text-bone" : "text-moss"}>{r.label}</span>
            <span className={r.strong ? "font-medium text-amber" : "text-bone"}>{r.value}</span>
          </li>
        ))}
      </ol>
      <div className="grid grid-cols-3 gap-px border-t border-line-forest bg-line-forest">
        <div className="bg-ink px-5 py-4">
          <p className="eyebrow text-moss">Amount</p>
          <p className="mt-1 font-mono text-lg text-bone">£48,000</p>
        </div>
        <div className="bg-ink px-5 py-4">
          <p className="eyebrow text-moss">Term</p>
          <p className="mt-1 font-mono text-lg text-bone">12 mo</p>
        </div>
        <div className="bg-ink px-5 py-4">
          <p className="eyebrow text-moss">Rate</p>
          <p className="mt-1 font-mono text-lg text-bone">Fixed</p>
        </div>
      </div>
    </div>
  );
}
