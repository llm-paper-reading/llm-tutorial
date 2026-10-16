"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSiteLinks, isSiteLinkActive } from "@/lib/site-nav";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const pathname = usePathname();
  const link = ({ href, label, matchPrefix }: ReturnType<typeof getSiteLinks>[number]) => {
    const active = isSiteLinkActive(pathname, { href, label, matchPrefix });
    return (
      <Link
        key={href}
        href={href}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
          active
            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <MobileNav />
        <Link href="/" className="mr-2 flex items-center gap-2 font-semibold">
          <span className="text-xl">🤖</span>
          <span>大模型与机器学习教程</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {getSiteLinks().map((item) => link(item))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
