// 论文注册表 —— 每篇论文的元信息放在对应目录的 meta.ts 中。
// 本文件负责聚合论文，并为导航栏、落地页、上一篇/下一篇提供统一 API；展示顺序使用显式时间排序。
// 论文是多维的：一篇大模型论文往往同时涉及架构、数据、训练、RL、推理……
// 单一「方向 → 主题」分组装不下，所以改用 tags 多标签模型——
// 每篇论文可打多个 tag，点击 tag 展示同 tag 的所有论文。

import { SITE_URL } from "@/lib/site";
import distillingKnowledge from "@/app/papers/distilling-knowledge/meta";
import knowledgeDistillationSurvey from "@/app/papers/kd-survey-gou-2021/meta";
import kdComprehensiveSurvey from "@/app/papers/kd-survey-mansourian-2025/meta";
import llmKdSurvey from "@/app/papers/llm-kd-survey-xu-2024/meta";
import ppoSchulman from "@/app/papers/ppo-schulman/meta";
import grpoDeepseekR1 from "@/app/papers/grpo-deepseek-r1/meta";
import opdAgarwal from "@/app/papers/opd-agarwal/meta";
import minillmGu from "@/app/papers/minillm-gu/meta";
import tmlOpd from "@/app/papers/tml-opd/meta";
import qwen3 from "@/app/papers/qwen3/meta";
import qwen1 from "@/app/papers/qwen1/meta";
import qwen2 from "@/app/papers/qwen2/meta";
import qwen25 from "@/app/papers/qwen2-5/meta";
import qwen25Coder from "@/app/papers/qwen2-5-coder/meta";
import qwen25Vl from "@/app/papers/qwen2-5-vl/meta";
import mimoV2Flash from "@/app/papers/mimo-v2-flash/meta";
import nemotronCascade2 from "@/app/papers/nemotron-cascade-2/meta";
import rethinkingOpd from "@/app/papers/rethinking-opd/meta";
import dpoRafailov from "@/app/papers/dpo-rafailov/meta";
import kimiK15 from "@/app/papers/kimi-k15/meta";
import kimiK2 from "@/app/papers/kimi-k2/meta";
import glm45 from "@/app/papers/glm-45/meta";
import glm5 from "@/app/papers/glm-5/meta";
import attentionTransformer from "@/app/papers/attention-transformer/meta";
import llama3 from "@/app/papers/llama3/meta";
import gpt3 from "@/app/papers/gpt3/meta";
import instructgpt from "@/app/papers/instructgpt/meta";
import deepseekR1 from "@/app/papers/deepseek-r1/meta";
import deepseekV3 from "@/app/papers/deepseek-v3/meta";
import deepseekV32 from "@/app/papers/deepseek-v3-2/meta";
import deepseekV4 from "@/app/papers/deepseek-v4/meta";
import qwen3Vl from "@/app/papers/qwen3-vl/meta";
import internvl35 from "@/app/papers/internvl35/meta";
import deepseekOcr from "@/app/papers/deepseek-ocr/meta";
import uiTars2 from "@/app/papers/ui-tars-2/meta";
import kimiK3 from "@/app/papers/kimi-k3/meta";
import minimaxM3 from "@/app/papers/minimax-m3/meta";

export interface Paper {
  slug: string;
  /** 阅读笔记标题（通常为中文概括） */
  title: string;
  /** 导航栏(侧边栏/移动端抽屉)展示的短标题；不填则导航与正文共用 title */
  navTitle?: string;
  /** 论文原标题（英文，可选，用于头部展示） */
  paperTitle?: string;
  /** 一句话总结(用于卡片 / metadata) */
  desc: string;
  /** 阅读动机：前人工作的问题与本文要解决的核心矛盾 */
  motivation?: string;
  /**
   * 关键词标签（多选），引用 @/lib/paper-tags 的 KEYWORDS。一篇论文可同时属于多个 tag，
   * 如 DeepSeek-V3 同时是「MoE 架构」「注意力机制」「高效训练」。
   */
  tags: string[];
  /** 图标（emoji），用于列表与侧边栏视觉区分 */
  icon: string;
  // —— 论文元信息（教程不需要这些） ——
  authors: string[];
  venue?: string;
  year: number;
  /** 发表年月（YYYY-MM）。有 arXiv 编号的论文可省略（从编号解析），无编号资料（官方博客等）必填 */
  date?: string;
  arxivUrl?: string;
  pdfUrl: string;
  codeUrl?: string;
}
// 仅作为注册表；页面展示、tag 分组和上一篇/下一篇都应使用显式排序函数，避免依赖注册顺序。
export const papers: Paper[] = [
  distillingKnowledge,
  knowledgeDistillationSurvey,
  kdComprehensiveSurvey,
  llmKdSurvey,
  ppoSchulman,
  grpoDeepseekR1,
  opdAgarwal,
  minillmGu,
  tmlOpd,
  qwen1,
  qwen2,
  qwen25,
  qwen25Coder,
  qwen25Vl,
  qwen3,
  mimoV2Flash,
  nemotronCascade2,
  rethinkingOpd,
  dpoRafailov,
  kimiK15,
  kimiK2,
  glm45,
  glm5,
  attentionTransformer,
  gpt3,
  instructgpt,
  llama3,
  deepseekR1,
  deepseekV3,
  deepseekV32,
  deepseekV4,
  qwen3Vl,
  internvl35,
  deepseekOcr,
  uiTars2,
  kimiK3,
  minimaxM3,
];

/** 所有出现过的 keyword（保持注册表中的出现顺序）。 */
export function getAllTags(): string[] {
  const seen: string[] = [];
  for (const p of papers) {
    for (const t of p.tags) {
      if (!seen.includes(t)) seen.push(t);
    }
  }
  return seen;
}

/** 按发表时间正序的论文列表。 */
export function getPapersByDate(): Paper[] {
  return getPapersByDateAsc();
}

/** 按发表时间正序的论文列表。 */
export function getPapersByDateAsc(): Paper[] {
  return [...papers].sort((a, b) => paperDate(a).localeCompare(paperDate(b)));
}

/** 某 tag 下的论文（按发表时间正序）。tag 不存在时返回空数组。 */
export function getPapersByTag(tag: string): Paper[] {
  return getPapersByDate().filter((p) => p.tags.includes(tag));
}

/** 从 arXiv abs/pdf URL 中提取论文编号。 */
export function getArxivId(arxivUrl?: string) {
  if (!arxivUrl) return null;
  const match = arxivUrl.match(/arxiv\.org\/(?:abs|pdf)\/([^/?#]+)/i);
  return match?.[1]?.replace(/\.pdf$/i, "") ?? null;
}

/** 发表年月（YYYY-MM）：优先 date 字段；否则从 arXiv 编号解析；都不行回退 `${year}-01`。 */
export function paperDate(p: Paper): string {
  if (p.date) return p.date;
  const arxivId = getArxivId(p.arxivUrl);
  const m = arxivId && /^(\d{2})(\d{2})\.\d+/.exec(arxivId);
  return m ? `20${m[1]}-${m[2]}` : `${p.year}-01`;
}

/**
 * 侧边栏导航树之一：按关键词分组，每个 tag 是一个可折叠主题。
 * 当前论文所属的 tag 自动展开（一篇论文有多个 tag，只展开最靠前的一个）。
 */
export function getPapersNav() {
  return [
    {
      name: "按关键词",
      icon: "🏷️",
      topics: getAllTags().map((tag) => ({
        name: tag,
        leaves: getPapersByTag(tag).map(withHint),
      })),
    },
  ];
}

/** 侧边栏导航树之二：按发表年份分组（旧→新），年内按时间正序。 */
export function getPapersNavByDate() {
  const byYear = new Map<string, Paper[]>();
  for (const p of getPapersByDate()) {
    const key = paperDate(p).slice(0, 4);
    if (!byYear.has(key)) byYear.set(key, []);
    byYear.get(key)!.push(p);
  }
  return [
    {
      name: "按时间",
      icon: "📅",
      topics: [...byYear.entries()].map(([year, ps]) => ({
        name: `${year} 年`,
        leaves: ps.map(withHint),
      })),
    },
  ];
}

/** 侧边栏导航树之三（默认）：不分组，按时间正序（旧→新）的平铺列表。 */
export function getPapersNavFlat() {
  return [
    {
      name: "全部论文",
      icon: "📚",
      topics: [
        {
          name: null,
          leaves: getPapersByDateAsc().map(withHint),
        },
      ],
    },
  ];
}

export type PaperNavLeaf = Pick<Paper, "slug" | "title" | "navTitle" | "icon"> & {
  hint: string;
};

/** 给叶子补上导航栏展示的发表年月（YYYY-MM）。 */
function withHint(p: Paper): PaperNavLeaf {
  return {
    slug: p.slug,
    title: p.title,
    navTitle: p.navTitle,
    icon: p.icon,
    hint: paperDate(p),
  };
}

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

/** 第一篇，用于「开始阅读」入口与导航栏「论文」链接 */
export function getFirstPaper(): Paper {
  return getPapersByDate()[0];
}

/** 返回上一篇 / 下一篇，用于论文底部导航（按发表时间正序：旧 → 新） */
export function getPaperNeighbors(slug: string): {
  prev: Paper | null;
  next: Paper | null;
} {
  const ordered = getPapersByDate();
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? ordered[i - 1] : null,
    next: i < ordered.length - 1 ? ordered[i + 1] : null,
  };
}

/**
 * 由论文元信息生成单篇论文的页面 metadata(title/description/openGraph)。
 * 各论文 page.mdx 从同目录 meta.ts 导入 paper 后传入这里。
 */
export function paperMetadata(p: Paper) {
  const url = `${SITE_URL}/papers/${p.slug}`;
  return {
    title: p.title,
    description: p.desc,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.desc,
      url,
      type: "article" as const,
    },
  };
}
