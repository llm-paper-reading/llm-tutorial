import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen2-5",
  title: "Qwen2.5：18T token、两阶段 RL 与 1M 上下文",
  navTitle: "Qwen2.5",
  paperTitle: "Qwen2.5 Technical Report",
  desc: "Qwen2.5 技术报告：预训练数据 7T→18T、0.5B–72B 七档尺寸回归、后训练升级为 SFT + 离线 DPO + 在线 GRPO 两阶段 RL、Qwen2.5-Turbo 用四阶段渐进训练 + YARN/DCA 推到 1M 上下文。72B-Instruct 对标 Llama-3-405B-Instruct。",
  motivation: "Qwen2 的架构已经够用，但数据质量与后训练深度成为新瓶颈：通用能力的天花板由预训练数据决定，指令跟随、长文本生成、结构化输出这些短板需要更大规模的 SFT 与更可靠的 RL 信号。Qwen2.5 的动机是架构不动、把数据工程和两阶段 RL 做深，并用 scaling law 直接为每个尺寸算超参。",
  tags: ["Qwen 系列", "强化学习", "长上下文", "高效训练", "数据合成"],
  icon: "🧭",
  authors: ["Qwen Team"],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2412.15115",
  pdfUrl: "https://arxiv.org/pdf/2412.15115",
} satisfies Paper;

export default paper;
