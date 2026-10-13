import type { Paper } from "@/lib/papers";

const paper = {
  slug: "dpo-rafailov",
  title: "DPO：无需奖励模型的偏好对齐",
  navTitle: "DPO",
  paperTitle: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
  desc: "跳过显式奖励模型与 RL，直接从偏好数据用闭式目标对齐语言模型。把 RLHF 的隐式奖励一步到位参数化进策略。",
  motivation: "经典 RLHF 要先训奖励模型，再用 PPO 做在线 RL，流程长、超参多、训练也容易不稳。DPO 的动机是把“偏好对齐”从强化学习问题改写成一个直接的监督目标：既然最优策略和隐式奖励有闭式关系，能不能跳过奖励模型和 RL 阶段，直接从 chosen/rejected 数据更新语言模型。",
  tags: ["对齐与偏好优化"],
  icon: "🎯",
  authors: ["Rafael Rafailov", "et al."],
  venue: "NeurIPS",
  year: 2023,
  arxivUrl: "https://arxiv.org/abs/2305.18290",
  pdfUrl: "https://arxiv.org/pdf/2305.18290",
} satisfies Paper;

export default paper;
