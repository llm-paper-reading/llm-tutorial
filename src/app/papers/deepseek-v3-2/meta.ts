import type { Paper } from "@/lib/papers";

const paper = {
  slug: "deepseek-v3-2",
  title: "DeepSeek-V3.2：稀疏注意力与可扩展的 RL 后训练",
  navTitle: "DeepSeek-V3.2",
  paperTitle: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models",
  desc: "DSA 稀疏注意力把主注意力复杂度从 O(L²) 降到 O(Lk)；GRPO 规模化稳定配方支撑起超预训练 10% 的 RL 算力；85K 合成任务把思考装进工具调用。",
  motivation: "长上下文和大规模 RL 后训练都很贵：标准注意力随长度平方增长，而推理 RL 又容易受 KL 偏差、离轨样本和路由不稳影响。DeepSeek-V3.2 关注的是如何同时降低长上下文注意力成本、稳定放大 GRPO，并把工具调用任务中的“思考”系统化合成出来。",
  tags: ["DeepSeek 系列", "注意力机制", "强化学习", "数据合成", "Agentic 训练", "推理优化", "长上下文"],
  icon: "🔬",
  authors: ["DeepSeek-AI"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2512.02556",
  pdfUrl: "https://arxiv.org/pdf/2512.02556",
  codeUrl: "https://huggingface.co/deepseek-ai/DeepSeek-V3.2",
} satisfies Paper;

export default paper;
