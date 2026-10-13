import type { Paper } from "@/lib/papers";

const paper = {
  slug: "ppo-schulman",
  title: "PPO：信赖域的工程化妥协",
  navTitle: "PPO",
  paperTitle: "Proximal Policy Optimization Algorithms",
  desc: "把 TRPO 的 KL 信赖域硬约束换成概率比的一阶裁剪 min(rA, clip(r,1-ε,1+ε)A)，十几行代码换训练稳定。ε=0.2 + GAE λ=0.95 几乎跨任务通用；后成为 RLHF 主力，也是 GRPO 演进链的起点。",
  motivation: "TRPO 理论上用 KL 信赖域保护策略更新，但二阶优化和约束求解太重，很难成为通用工程配方。PPO 要解决的是：能不能保留“别一步更新太远”的稳定性，同时把算法降到普通一阶优化、可多 epoch 复用数据，让 RLHF 和大规模策略训练真正跑得起来。",
  tags: ["强化学习", "对齐与偏好优化", "基础架构"],
  icon: "✂️",
  authors: ["John Schulman", "Filip Wolski", "Prafulla Dhariwal", "Alec Radford", "Oleg Klimov"],
  venue: "arXiv",
  year: 2017,
  arxivUrl: "https://arxiv.org/abs/1707.06347",
  pdfUrl: "https://arxiv.org/pdf/1707.06347",
} satisfies Paper;

export default paper;
