import type { Paper } from "@/lib/papers";

const paper = {
  slug: "tml-opd",
  title: "Thinking Machines OPD：高效复制推理能力",
  navTitle: "TML OPD",
  paperTitle: "On-Policy Distillation",
  desc: "把 reverse-KL OPD 工程化成 RL 风格训练循环：学生 rollout，老师逐 token 打分，negative reverse KL 作 advantage；数学推理上相对继续 SFT/RL 显示 9—30× 成本优势。",
  motivation: "RL 虽然 on-policy，但数学推理奖励通常只在最终答案处出现；SFT 和离线蒸馏虽然每个 token 都有监督，却只覆盖老师或固定数据轨迹。Thinking Machines OPD 要解决的是把学生真实状态和老师逐 token 稠密反馈结合起来，用更低成本复制已有强策略。",
  tags: ["在线蒸馏", "知识蒸馏", "强化学习", "对齐与偏好优化"],
  icon: "⚗️",
  authors: ["Kevin Lu", "Thinking Machines Lab"],
  venue: "技术博客",
  year: 2025,
  date: "2025-10",
} satisfies Paper;

export default paper;
