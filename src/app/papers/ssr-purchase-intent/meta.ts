import type { Paper } from "@/lib/papers";

const paper = {
  slug: "ssr-purchase-intent",
  title: "LLM 模拟消费者：用语义相似度还原 Likert 购买意愿",
  navTitle: "SSR 购买意愿",
  paperTitle: "LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings",
  desc: "不让 LLM 直接输出 1–5 分，而是先让它自由描述购买意愿，再把文本嵌入映射到五条 Likert 锚点语句上，得到响应分布。在 57 个个人护理产品调研、9300 份人类回答上，SSR 达到人类 test–retest 相关上限的约 90%，GPT-4o 的 KS 相似度约 0.88。",
  motivation: "让 LLM 直接打 Likert 分时，模型会挤在中间值、很少给 1 或 5，分布与真人差异很大；但换一种问法——先写自由文本，再用语义相似度映射到量表——是否能恢复真实分布和产品排序？这篇论文用一套真实的企业消费者调研数据验证了这一点。",
  tags: ["数据合成", "合成消费者", "购买意愿", "营销"],
  icon: "🛒",
  authors: ["Benjamin F. Maier", "Ulf Aslak", "Luca Fiaschi", "et al."],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2510.08338",
  sourceUrl: "https://arxiv.org/pdf/2510.08338",
} satisfies Paper;

export default paper;
