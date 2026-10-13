import type { Paper } from "@/lib/papers";

const paper = {
  slug: "glm-45",
  title: "GLM-4.5：Mixture-of-Experts 的 Agentic 智能体训练",
  navTitle: "GLM-4.5",
  paperTitle: "GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models",
  desc: "355B 总参只激活 32B 的深窄 MoE。后训练走「专家模型迭代」：三个领域专家各自冷启动 SFT + 可验证奖励 RL，再自蒸馏成 thinking/non-thinking 双模式模型；agentic 数据四步合成 + 无 KL 的 GRPO。",
  motivation: "通用大模型在推理、代码、工具调用之间常常顾此失彼：单一路线很难同时补齐 ARC 能力，直接混训又容易互相干扰。GLM-4.5 要解决的是如何用专家模型迭代和自蒸馏，把不同领域的强能力汇总进一个支持 thinking/non-thinking 的 MoE 模型。",
  tags: ["GLM 系列", "MoE 架构", "Agentic 训练", "数据合成", "知识蒸馏", "强化学习"],
  icon: "🧬",
  authors: ["GLM-4.5 Team"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2508.06471",
  codeUrl: "https://github.com/zai-org/GLM-4.5",
} satisfies Paper;

export default paper;
