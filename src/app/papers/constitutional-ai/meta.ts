import type { Paper } from "@/lib/papers";

const paper = {
  slug: "constitutional-ai",
  title: "Constitutional AI：用 AI 反馈做无害对齐",
  navTitle: "Constitutional AI",
  paperTitle: "Constitutional AI: Harmlessness from AI Feedback",
  desc: "Anthropic 的 RLAIF 范式：用一份约 16 条原则的「宪法」替代人工无害性标注——监督阶段模型自我批评并按原则改写回复再 SFT，RL 阶段用 AI 按原则做偏好对比训练 PM，再以 PM 为奖励做强化学习。52B 模型上无害-有用的 Pareto 前沿全面优于 RLHF，且训出「不回避」的助手：解释拒绝理由而非敷衍。",
  motivation: "RLHF 的无害性标注贵、慢、不透明，且模型学会敷衍式拒绝（helpfulness 与 harmlessness 此消彼长）。Constitutional AI 的动机是把监督信号从「人类标注每个坏输出」换成「写一份原则清单让 AI 自己执行」——放大监督、原则透明、改目标只需改文本，为能力超过人类的系统预留监督方案。",
  tags: ["对齐与偏好优化", "强化学习"],
  icon: "📜",
  authors: ["Yuntao Bai", "et al."],
  venue: "arXiv",
  year: 2022,
  arxivUrl: "https://arxiv.org/abs/2212.08073",
  pdfUrl: "https://arxiv.org/pdf/2212.08073",
} satisfies Paper;

export default paper;
