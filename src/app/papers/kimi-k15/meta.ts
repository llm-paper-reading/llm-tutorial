import type { Paper } from "@/lib/papers";

const paper = {
  slug: "kimi-k15",
  title: "Kimi K1.5：多模态长上下文扩展的 RL 推理",
  navTitle: "Kimi K1.5",
  paperTitle: "Kimi k1.5: Scaling Reinforcement Learning with LLMs",
  desc: "与 R1 同期的另一条 RL 推理路线：把 RL 上下文窗口拉到 128k 替代长 CoT 蒸馏，在线镜像下降 + 长度惩罚 + 课程采样，不用 MCTS/价值网络/PRM，文本视觉联合训练比肩 o1。",
  motivation: "R1 证明 RL 能激发推理，但很多路线依赖长 CoT 蒸馏、复杂搜索或过程奖励，成本高且难扩到多模态长上下文。Kimi K1.5 的问题意识是：只靠可扩展的长上下文 RL 和简单策略优化，能否在文本与视觉任务上同时学出强推理，并把长思维再压缩成短输出能力。",
  tags: ["Kimi 系列", "强化学习", "长上下文", "多模态"],
  icon: "🌗",
  authors: ["Kimi Team"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2501.12599",
} satisfies Paper;

export default paper;
