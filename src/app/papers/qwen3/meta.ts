import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen3",
  title: "Qwen3：混合推理与在线蒸馏",
  navTitle: "Qwen3",
  paperTitle: "Qwen3 Technical Report",
  desc: "Qwen3 把 thinking / non-thinking 混合推理、off-policy 蒸馏、RL 与 on-policy distillation 放进同一条后训练流水线。Qwen3 报告中 OPD 以约 1,800 GPU hours 在 AIME’24 达到 74.4，高于继续 RL 约 17,920 GPU hours 的 67.6。",
  motivation: "推理模型后训练既需要 RL 探索高质量解法，又需要把强老师的过程偏好稳定压进小模型；离线蒸馏有状态错配，纯 RL 又稀疏且昂贵。Qwen3 的动机是把思考模式、离线蒸馏、在线蒸馏和 RL 组合成可规模化的后训练 recipe，在成本可控的前提下复制强推理策略。",
  tags: ["在线蒸馏", "知识蒸馏", "强化学习", "对齐与偏好优化", "高效训练", "MoE 架构"],
  icon: "🧭",
  authors: ["An Yang", "et al."],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2505.09388",
} satisfies Paper;

export default paper;
