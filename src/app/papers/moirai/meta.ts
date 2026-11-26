import type { Paper } from "@/lib/papers";

const paper = {
  slug: "moirai",
  title: "Moirai：统一训练一个任意变量的时序预测器",
  navTitle: "Moirai",
  paperTitle: "Unified Training of Universal Time Series Forecasting Transformers",
  desc: "Salesforce 的通用时序预测 Transformer：用多 patch size 投影处理跨频率、用 Any-variate Attention 处理任意变量数、用混合分布处理异质分布；在 27.6B 观测的 LOTSA 上预训练 14M/91M/311M 三个规模，零样本预测接近或超过全监督基线。",
  motivation: "通用时序预测要同时解决三个问题：不同采样频率如何共享一个模型、变量数不固定时如何建模变量间关系、不同数据集的分布差异如何用统一概率输出刻画。Moirai 用三个架构改动分别回答这三问，并把训练目标写成混合分布的负对数似然。",
  tags: ["时间序列"],
  icon: "🧵",
  authors: ["Gerald Woo", "Chenghao Liu", "Akshat Kumar", "et al."],
  venue: "ICML",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2402.02592",
  sourceUrl: "https://arxiv.org/pdf/2402.02592",
  codeUrl: "https://github.com/SalesforceAIResearch/uni2ts",
} satisfies Paper;

export default paper;
