import type { Metadata } from "next";
import Link from "next/link";
import { featuredResources, resourceGroups, type ResourceLink } from "@/lib/resources";

export const metadata: Metadata = {
  title: "学习资源",
  description: "整理大模型与机器学习学习、论文发现、阅读工具、引用图谱、会议归档和 AI 资讯站点",
};

function FeaturedResourceCard({ resource }: { resource: ResourceLink }) {
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-white/80 bg-white/85 p-4 !no-underline shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-emerald-700"
    >
      {resource.tag && (
        <span className="w-fit rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
          {resource.tag}
        </span>
      )}
      <div className="mt-3 flex items-start justify-between gap-3">
        <span className="font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400">
          {resource.title}
        </span>
        <span className="text-sm text-emerald-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-emerald-400">
          ↗
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {resource.desc}
      </p>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-16">
      <div className="text-center">
        <div className="text-5xl">🧭</div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">学习资源</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          收集大模型与机器学习学习中常用的论文发现、阅读工具、引用图谱、会议归档和 AI 资讯入口。
        </p>
      </div>

      <section className="relative mt-12 overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-sm dark:border-emerald-900/60 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-cyan-950/20 sm:p-6">
        <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-700/20" />
        <div className="pointer-events-none absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-700/20" />

        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
              Resource Radar
            </span>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              常用入口
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              先用趋势和检索站点发现线索，再回到论文原文、会议归档和官方资料核对关键细节。
            </p>
          </div>
          <Link
            href="/papers"
            className="rounded-full bg-white/70 px-3 py-1 text-xs text-zinc-500 !no-underline ring-1 ring-zinc-200 transition hover:text-emerald-700 dark:bg-zinc-900/70 dark:text-zinc-400 dark:ring-zinc-800 dark:hover:text-emerald-300"
          >
            返回论文阅读 →
          </Link>
        </div>

        <ul className="relative mt-5 grid !list-none gap-3 !pl-0 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <li key={resource.href}>
              <FeaturedResourceCard resource={resource} />
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {resourceGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-20 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {group.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              {group.desc}
            </p>
            <ul className="mt-4 space-y-2 !list-none !pl-0">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link block rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 !no-underline transition hover:border-emerald-300 hover:bg-emerald-50/60 dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/20"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-zinc-800 group-hover/link:text-emerald-700 dark:text-zinc-200 dark:group-hover/link:text-emerald-300">
                        {link.title}
                      </span>
                      <span className="text-xs text-emerald-600 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 dark:text-emerald-400">
                        ↗
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500 dark:text-zinc-500">
                      {link.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
