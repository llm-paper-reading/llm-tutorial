import type { Paper } from "@/lib/papers";

const paper = {
  slug: "glm-5",
  title: "GLM-5：从 Vibe Coding 到 Agentic Engineering",
  navTitle: "GLM-5",
  paperTitle: "GLM-5: from Vibe Coding to Agentic Engineering",
  desc: "744B 总参/40B 激活，从 GLM-4.5 的 ARC 路线升级到长程工程智能体。预训练扩到 28.5T token，集成 DSA 降低长上下文成本，用 slime 异步 RL 基础设施把生成与训练解耦，面向复杂系统工程与长期 agentic 任务。",
  motivation: "上一代 agentic 模型已经能完成短程编码和工具调用，但真实软件工程需要长上下文、长周期规划、终端/浏览器协作和持续 RL 基础设施。GLM-5 的动机是把“会写片段代码”的 vibe coding 推向“能推进复杂工程任务”的 agentic engineering。",
  tags: ["GLM 系列", "在线蒸馏", "MoE 架构", "注意力机制", "Agentic 训练", "强化学习", "长上下文", "推理优化", "高效训练"],
  icon: "🛠️",
  authors: ["GLM-5-Team"],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2602.15763",
  codeUrl: "https://github.com/zai-org/GLM-5",
} satisfies Paper;

export default paper;
