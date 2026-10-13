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

// 前沿雷达:精选信源入口。先用趋势站点发现线索,
// 再回到论文原文、官方博客和榜单核对关键细节——与论文页 Paper Radar 呼应但各有分工。
const featuredFrontierResources = [
  {
    title: "Hugging Face Papers",
    href: "https://huggingface.co/papers",
    tag: "趋势发现",
    desc: "每日热门论文榜,快速扫大模型、多模态与开源模型社区在讨论什么。",
  },
  {
    title: "AI News",
    href: "https://buttondown.com/ainews",
    tag: "每日情报",
    desc: "每日 AI 新闻与讨论摘要,适合用最少时间不漏大事件。",
  },
  {
    title: "LMArena",
    href: "https://lmarena.ai/leaderboard",
    tag: "榜单评测",
    desc: "人类偏好投票的模型竞技场榜单,新模型发布后第一时间看这里。",
  },
  {
    title: "Artificial Analysis",
    href: "https://artificialanalysis.ai/",
    tag: "独立评测",
    desc: "第三方横评模型质量、速度与价格,发布营销话术之外的第二意见。",
  },
];

const frontierResourceGroups = [
  {
    title: "情报与解读",
    links: [
      { title: "Latent Space", href: "https://www.latent.space/" },
      { title: "Interconnects", href: "https://www.interconnects.ai/" },
      { title: "The Gradient", href: "https://thegradient.pub/" },
      { title: "机器之心", href: "https://www.jiqizhixin.com/" },
    ],
  },
  {
    title: "论文源头",
    links: [
      { title: "arXiv Recent", href: "https://arxiv.org/list/cs.CL/recent" },
      { title: "Papers.cool", href: "https://papers.cool/" },
      { title: "alphaXiv", href: "https://www.alphaxiv.org/" },
      { title: "OpenReview", href: "https://openreview.net/" },
    ],
  },
  {
    title: "榜单与评测",
    links: [
      { title: "OpenCompass", href: "https://opencompass.org.cn/" },
      { title: "SEAL Leaderboards", href: "https://scale.com/leaderboard" },
      { title: "Semantic Scholar", href: "https://www.semanticscholar.org/" },
    ],
  },
  {
    title: "官方博客",
    links: [
      { title: "OpenAI", href: "https://openai.com/news/" },
      { title: "Anthropic", href: "https://www.anthropic.com/news" },
      { title: "Google DeepMind", href: "https://deepmind.google/blog/" },
      { title: "Meta AI", href: "https://ai.meta.com/blog/" },
      { title: "Hugging Face", href: "https://huggingface.co/blog" },
    ],
  },
];

function FrontierResourceLinks() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-sm dark:border-emerald-900/60 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-cyan-950/20 sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-700/20" />
      <div className="pointer-events-none absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-700/20" />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
            Frontier Radar
          </span>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            前沿雷达
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            先用趋势站点和每日情报发现线索,再回到论文原文、官方博客和榜单核对关键细节;
            甄别后的结论沉淀成下方的调研报告。
          </p>
        </div>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-zinc-500 ring-1 ring-zinc-200 dark:bg-zinc-900/70 dark:text-zinc-400 dark:ring-zinc-800">
          精选入口 + 扩展工具
        </span>
      </div>

      <ul className="relative mt-5 grid !list-none gap-3 !pl-0 sm:grid-cols-2">
        {featuredFrontierResources.map((resource) => (
          <li key={resource.href}>
            <a
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-white/80 bg-white/85 p-4 !no-underline shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-emerald-700"
            >
              <span className="w-fit rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                {resource.tag}
              </span>
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
          </li>
        ))}
      </ul>

      <div className="relative mt-4 grid gap-3 lg:grid-cols-4">
        {frontierResourceGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/70 bg-white/60 p-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 !no-underline transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-emerald-700 dark:hover:text-emerald-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
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
          追踪大模型前沿的信源入口与调研报告——先用雷达发现线索,
          再核对一手来源,最后沉淀成带引用的中文分析。
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

      <FrontierResourceLinks />

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
