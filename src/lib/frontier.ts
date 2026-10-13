// 前沿追踪注册表 —— 单一数据源。
// 与 tutorials.ts / papers.ts 同构:导航栏、侧边栏、落地页、上一篇/下一篇都从这里读取,
// 避免多处维护不一致。
// 这里登记「调研报告」:对新模型、新论文、新趋势的追踪笔记与横向对比分析。
// 注册表顺序即展示顺序,新报告插在最上面(新→旧),与论文区的旧→新相反——
// 前沿追踪更关心「最新发生了什么」。

import { SITE_URL } from "@/lib/tutorials";

export interface Report {
  slug: string;
  /** 报告标题(通常为中文概括) */
  title: string;
  /** 导航栏(侧边栏/移动端抽屉)展示的短标题;不填则导航与正文共用 title */
  navTitle?: string;
  /** 一句话总结(用于卡片 / metadata) */
  desc: string;
  /** 关键词标签(多选),引用本文件 TAGS 的 name */
  tags: string[];
  /** 图标(emoji),用于列表与侧边栏视觉区分 */
  icon: string;
  /** 发布年月(YYYY-MM),决定排序与导航 hint */
  date: string;
  /** 覆盖范围(如「2026 Q3 模型发布」「长上下文注意力路线」),用于卡片展示 */
  scope?: string;
}

// 报告关键词注册表 —— 名称、图标、说明集中在这里维护;
// 上方 Report.tags 引用 name,漏配条目只会丢失图标/说明,不会报错。
export const TAGS: { name: string; icon: string; hint?: string }[] = [
  {
    name: "调研方法",
    icon: "🧭",
    hint: "前沿追踪的工作流:信源分层、核查原则与报告写作",
  },
  {
    name: "模型发布",
    icon: "🚀",
    hint: "新模型 / 新版本发布的技术分析与横向对比",
  },
  {
    name: "技术趋势",
    icon: "📈",
    hint: "某个技术方向(注意力、蒸馏、RL、Agent 等)的路线梳理",
  },
  {
    name: "评测榜单",
    icon: "🏆",
    hint: "benchmark 口径、榜单变化与能力评估分析",
  },
];

export const reports: Report[] = [
  {
    slug: "research-workflow",
    title: "前沿调研方法:信源、核查与报告写作",
    navTitle: "调研方法",
    desc: "这个板块怎么用:一手信源与二手解读的分层、追踪节奏、数字必须可溯源的核查原则,以及一篇调研报告的标准结构。",
    tags: ["调研方法"],
    icon: "🔭",
    date: "2026-10",
    scope: "本站前沿追踪板块的使用指南",
  },
  {
    slug: "model-reasoning-planning",
    title: "大模型推理与任务规划能力提升调研报告",
    navTitle: "推理与规划调研",
    desc: "2025–2026 年推理能力的范式从「RLVR + 长思维链」演进为「以 Agent 轨迹为训练单位的长程 RL」:奖励密集化、Agent 自驱动数据合成、规划外化;并拆解 verl/AReaL/rllm 开源生态与 Claude Code / Codex 的 harness 实现。",
    tags: ["技术趋势"],
    icon: "🧠",
    date: "2026-09",
    scope: "arXiv 150+ 篇论文线索 + 开源仓库 + 官方文档",
  },
];

/** 所有出现过的关键词(保持注册表中的出现顺序)。 */
export function getAllTags(): string[] {
  const seen: string[] = [];
  for (const r of reports) {
    for (const t of r.tags) {
      if (!seen.includes(t)) seen.push(t);
    }
  }
  return seen;
}

/** 按发布时间倒序的报告列表(注册表本身已按新→旧排列,这里做稳定防御)。 */
export function getReportsByDate(): Report[] {
  return [...reports].sort((a, b) => b.date.localeCompare(a.date));
}

/** 某关键词下的报告(注册表顺序)。tag 不存在时返回空数组。 */
export function getReportsByTag(tag: string): Report[] {
  return reports.filter((r) => r.tags.includes(tag));
}

export function getTagIcon(tag: string): string {
  return TAGS.find((t) => t.name === tag)?.icon ?? "🏷️";
}

export function getTagHint(tag: string): string | undefined {
  return TAGS.find((t) => t.name === tag)?.hint;
}

/**
 * 侧边栏导航树之一(默认):不分组,按时间倒序(新→旧)的平铺列表。
 * 前沿追踪以「最新」为先,与论文区的正序相反。
 */
export function getFrontierNavFlat() {
  return [
    {
      name: "全部报告",
      icon: "📡",
      topics: [
        {
          name: null,
          leaves: getReportsByDate().map(withHint),
        },
      ],
    },
  ];
}

/** 侧边栏导航树之二:按关键词分组,每个 tag 是一个可折叠主题。 */
export function getFrontierNav() {
  return [
    {
      name: "按关键词",
      icon: "🏷️",
      topics: getAllTags().map((tag) => ({
        name: tag,
        leaves: getReportsByTag(tag).map(withHint),
      })),
    },
  ];
}

/** 给叶子补上导航栏展示的发布年月(YYYY-MM)。 */
function withHint(r: Report): Report & { hint: string } {
  return { ...r, hint: r.date };
}

export function getReport(slug: string): Report | undefined {
  return reports.find((r) => r.slug === slug);
}

/** 最新一篇,用于「开始追踪」入口 */
export function getFirstReport(): Report {
  return reports[0];
}

/** 返回上一篇(更旧)/ 下一篇(更新),用于报告底部导航 */
export function getReportNeighbors(slug: string): {
  prev: Report | null;
  next: Report | null;
} {
  const i = reports.findIndex((r) => r.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i < reports.length - 1 ? reports[i + 1] : null,
    next: i > 0 ? reports[i - 1] : null,
  };
}

/**
 * 由注册表生成单篇报告的页面 metadata(title/description/openGraph)。
 * 在各报告 page.mdx 里 `export const metadata = frontierMetadata("<slug>")` 即可。
 */
export function frontierMetadata(slug: string) {
  const r = getReport(slug);
  if (!r) return {};
  const url = `${SITE_URL}/frontier/${slug}`;
  return {
    title: r.title,
    description: r.desc,
    alternates: { canonical: url },
    openGraph: {
      title: r.title,
      description: r.desc,
      url,
      type: "article" as const,
    },
  };
}
