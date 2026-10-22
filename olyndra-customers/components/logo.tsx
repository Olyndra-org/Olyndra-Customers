import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Olyndra home">
      <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">O</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Olyndra
      </span>
    </Link>
  );
}
