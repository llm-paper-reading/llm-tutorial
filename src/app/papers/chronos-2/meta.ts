import type { Paper } from "@/lib/papers";

const paper = {
  slug: "chronos-2",
  title: "Chronos-2：从单变量走向通用预测",
  navTitle: "Chronos-2",
  paperTitle: "Chronos-2: From Univariate to Universal Forecasting",
  desc: "Amazon 的通用时序基础模型：用「组注意力」在同批序列之间做上下文学习，把单变量、多变量、历史协变量与已知未来协变量统一成一次零样本前向；120M 参数在 fev-bench 上平均胜率 90.7%、技能分 47.3，协变量任务提升最大。",
  motivation: "已有的时序基础模型大多只会看一条序列自己的历史，但真实预测往往同时涉及多条共同演化的序列，以及促销、天气、负荷这类外生变量。Chronos-2 要回答的是：能不能用一个模型、一次零样本前向，把「哪些序列该一起看」交给推理时的分组来指定，而不是为每种任务改架构？",
  tags: ["时间序列", "注意力机制"],
  icon: "🌐",
  authors: ["Abdul Fatir Ansari", "Oleksandr Shchur", "Jaris Küken", "et al."],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2510.15821",
  sourceUrl: "https://arxiv.org/pdf/2510.15821",
} satisfies Paper;

export default paper;
