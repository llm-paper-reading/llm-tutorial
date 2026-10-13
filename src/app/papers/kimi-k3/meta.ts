import type { Paper } from "@/lib/papers";

const paper = {
  slug: "kimi-k3",
  title: "Kimi K3：开源 3T 的混合注意力与 LatentMoE",
  navTitle: "Kimi K3",
  paperTitle: "Kimi K3: Open Frontier Intelligence",
  desc: "世界首个开源 3T 级：2.78T 总参/104B 激活。93 层 = 69 层 KDA 线性注意力 + 24 层 Gated MLA；AttnRes 让每层选择性关注所有前层；Stable LatentMoE 896 专家激活 16（sparsity 56）。相对 K2 提升约 2.5× scaling efficiency，1M 上下文，原生多模态。",
  motivation: "K2 之后，继续扩大 MoE 会遇到注意力成本、极端稀疏路由稳定性和百万上下文 agentic RL 的三重瓶颈。Kimi K3 的动机是用混合线性/MLA 注意力、LatentMoE 和分强度推理 RL，探索开源 3T 级模型如何在规模、效率和智能体能力之间取得新平衡。",
  tags: ["Kimi 系列", "在线蒸馏", "MoE 架构", "注意力机制", "多模态", "Agentic 训练", "长上下文", "高效训练", "强化学习", "知识蒸馏"],
  icon: "🌌",
  authors: ["Kimi Team"],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2607.24653",
  pdfUrl: "https://arxiv.org/pdf/2607.24653",
  codeUrl: "https://huggingface.co/moonshotai/Kimi-K3",
} satisfies Paper;

export default paper;
