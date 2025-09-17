"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/athletes", label: "Athletes" },
  { href: "/compare", label: "Compare" },
  { href: "/analytics", label: "Analytics" }
];

export function Navbar()  {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-[var(--bg)]/80">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Club logo" width={32} height={32} className="rounded-md bg-white/5 p-0.5" />
          <span className="font-semibold">Club Analytics</span>
        </Link>
        <nav className="flex items-center gap-2">
          {tabs.map(t => (
            <Link
              key={t.href}
              href={t.href}
              className={clsx(
                "px-3 py-2 rounded-xl text-sm hover:bg-white/5",
                pathname === t.href && "bg-white/10"
              )}
            >
              {t.label}
            </Link>
          ))}
          <Link href="#" className="btn btn-primary ml-2">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}
