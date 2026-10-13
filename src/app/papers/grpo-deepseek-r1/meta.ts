import type { Paper } from "@/lib/papers";

const paper = {
  slug: "grpo-deepseek-r1",
  title: "GRPO 与 DeepSeek-R1：训练会推理的大模型",
  navTitle: "GRPO 与 DeepSeek-R1",
  paperTitle: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
  desc: "DeepSeek-R1 靠什么学会一步步推理？GRPO 砍掉 PPO 的 critic，用同题一组采样、组内均值当基线；RLVR 用「答案对不对」的规则判分取代奖励模型。",
  motivation: "PPO 做大模型推理 RL 时最大的问题是 critic 昂贵又不稳定，奖励模型也容易把训练变成主观偏好拟合。DeepSeek-R1/GRPO 想回答的是：如果题目答案可以被规则验证，能不能去掉价值网络和奖励模型，直接用同题多样本的相对好坏把推理能力逼出来。",
  tags: ["DeepSeek 系列", "强化学习", "知识蒸馏"],
  icon: "🧠",
  authors: ["DeepSeek-AI"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2501.12948",
  pdfUrl: "https://arxiv.org/pdf/2501.12948",
  codeUrl: "https://github.com/deepseek-ai/DeepSeek-R1",
} satisfies Paper;

export default paper;
