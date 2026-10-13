import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllTags,
  getFirstReport,
  reports,
  type Report,
} from "@/lib/frontier";
import { getTagHint, getTagIcon } from "@/lib/frontier";

export const metadata: Metadata = {
  title: "前沿追踪",
  description: "追踪大模型前沿:每日信源入口、调研方法与调研报告",
  alternates: { canonical: "/frontier" },
};

function ReportCard({ r }: { r: Report }) {
  return (
    <Link
      href={`/frontier/${r.slug}`}
      className="group flex h-full flex-col rounded-xl border border-zinc-200 p-5 transition hover:border-emerald-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-emerald-500"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl">{r.icon}</span>
        <span className="font-medium text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400">
          {r.title}
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{r.desc}</p>
      {r.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {r.tags.map((t) => (
            <span
              key={t}
              title={getTagHint(t)}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {getTagIcon(t)} {t}
            </span>
          ))}
        </div>
      )}
      <div className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
        {[r.date, r.scope].filter(Boolean).join(" · ")}
      </div>
    </Link>
  );
}

export default function FrontierHome() {
  const tags = getAllTags();
  const first = getFirstReport();

  return (
    <div>
      <div className="text-center">
        <div className="text-4xl">📡</div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">前沿追踪</h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          追踪大模型前沿的调研报告——核对一手来源，沉淀成带引用的中文分析。
        </p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="text-base">🗒️</span>
            {reports.length} 篇报告
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-base">🏷️</span>
            {tags.length} 个关键词
          </span>
        </div>
        {first && (
          <Link
            href={`/frontier/${first.slug}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md dark:bg-emerald-600 dark:hover:bg-emerald-500"
          >
            🔭 开始追踪
            <span className="text-emerald-200">·</span>
            <span className="font-normal text-emerald-100">{first.title}</span>
          </Link>
        )}
      </div>

      <div className="mt-12">
        <h2 className="mb-4 flex items-center justify-center gap-2 text-xl font-semibold">
          <span>🗒️</span>
          <span>调研报告</span>
          <span className="text-sm font-normal text-zinc-400">· 按时间倒序</span>
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {reports.map((r) => (
            <li key={r.slug}>
              <ReportCard r={r} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
