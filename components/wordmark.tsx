import Link from "next/link";

export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Olyndra Lending home">
      <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" fill={onDark ? "#e8a33d" : "#0f3b2e"} />
        <path d="M36 10 18 36h12l-2 18 18-26H34z" fill={onDark ? "#0f3b2e" : "#e8a33d"} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-2xl tracking-tight ${onDark ? "text-bone" : "text-ink"}`}
        >
          Olyndra
        </span>
        <span className={`eyebrow mt-1 ${onDark ? "text-moss" : "text-ink-2"}`}>
          Lending
        </span>
      </span>
    </Link>
  );
}
