import type { Paper } from "@/lib/papers";

const paper = {
  slug: "deepseek-r1",
  title: "DeepSeek-R1：纯 RL 涌现推理与蒸馏",
  navTitle: "DeepSeek-R1",
  paperTitle: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
  desc: "DeepSeek-R1 论文精读：R1-Zero 跳过 SFT 直接大规模 GRPO，仅用规则奖励（正确性 + 格式）就让验证、反思、「aha moment」等推理行为涌现，AIME pass@1 从 15.6% 到 77.9%；R1 用冷启动 SFT + 两阶段 RL + 拒绝采样解决可读性与语言混杂；80 万样本蒸馏出 1.5B–70B 六个小模型，14B 蒸馏版超越 QwQ-32B。",
  motivation: "推理模型此前依赖人工标注的 CoT 蒸馏，天花板被人类示范锁死。R1 的动机是验证一个假设：预训练基座本身就蕴含推理潜力，只要给足够难的题、可靠的验证器和足够算力，纯 RL 不需要人类推理轨迹就能把潜力激发出来——并且激发出的策略可以反向蒸馏给小模型。",
  tags: ["DeepSeek 系列", "强化学习", "知识蒸馏", "推理优化"],
  icon: "🐋",
  authors: ["DeepSeek-AI"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2501.12948",
  pdfUrl: "https://arxiv.org/pdf/2501.12948",
} satisfies Paper;

export default paper;
