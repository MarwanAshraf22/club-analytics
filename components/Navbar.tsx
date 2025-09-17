"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Route } from "next";   // 👈 add this
import clsx from "clsx";

// 👇 make tabs a typed list of real routes
const tabs: { href: Route; label: string }[] = [
  { href: "/" as Route,          label: "Home" },
  { href: "/athletes" as Route,  label: "Athletes" },
  { href: "/compare" as Route,   label: "Compare" },
  { href: "/analytics" as Route, label: "Analytics" }
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-[var(--bg)]/80">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Club logo" width={32} height={32} className="rounded-md bg-white/5 p-0.5" />
          <span className="font-semibold">Club Analytics</span>
        </Link>

        <nav className="flex items-center gap-2">
          {tabs.map((t) => (
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
          {/* Avoid Link to "#" because typedRoutes rejects non-existent routes */}
          <button className="btn btn-primary ml-2">Sign in</button>
        </nav>
      </div>
    </header>
  );
}
