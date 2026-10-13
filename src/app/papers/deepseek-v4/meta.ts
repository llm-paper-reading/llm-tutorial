import type { Paper } from "@/lib/papers";

const paper = {
  slug: "deepseek-v4",
  title: "DeepSeek-V4：高效百万上下文智能",
  navTitle: "DeepSeek-V4",
  paperTitle: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence",
  desc: "DeepSeek-V4 把百万 token 上下文做成效率问题：V4-Pro 1.6T/49B、V4-Flash 284B/13B，结合 CSA + HCA 混合注意力、mHC 与 Muon；后训练用 full-vocabulary OPD 替换 mixed RL 阶段。",
  motivation: "百万上下文模型的瓶颈不只是窗口长度，而是 prefill、KV cache、长程训练和后训练 rollout 的综合成本。DeepSeek-V4 的动机是用架构、优化器和在线蒸馏一起降低长上下文智能的单位成本，把多个老师的长程能力稳定迁移到可部署模型。",
  tags: ["DeepSeek 系列", "在线蒸馏", "知识蒸馏", "长上下文", "注意力机制", "推理优化", "高效训练", "MoE 架构", "强化学习"],
  icon: "🌊",
  authors: ["DeepSeek-AI"],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2606.19348",
  pdfUrl: "https://arxiv.org/pdf/2606.19348",
} satisfies Paper;

export default paper;
