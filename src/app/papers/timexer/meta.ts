import type { Paper } from "@/lib/papers";

const paper = {
  slug: "timexer",
  title: "TimeXer：给 Transformer 接上外生变量",
  navTitle: "TimeXer",
  paperTitle: "TimeXer: Empowering Transformers for Time Series Forecasting with Exogenous Variables",
  desc: "TimeXer 用 patch 级 token 建模内生变量的时序依赖，用 variate 级 token 建模外生变量，再用一个可学习的全局 token 做桥，通过 self-attention + cross-attention 把外生信息注入内生 patch；在 5 个电价市场和 7 个长程预测数据集上取得 SOTA 或接近 SOTA。",
  motivation: "真实预测往往只关心中介目标本身，但外部因素（电价、天气、经济指标）会显著影响走势。多变量模型把所有变量一视同仁，单变量模型忽略外生信息；TimeXer 要在不修改 Transformer 组件的前提下，把不规则的外生序列有效接进内生预测。",
  tags: ["时间序列"],
  icon: "🔌",
  authors: ["Yuxuan Wang", "Haixu Wu", "Jiaxiang Dong", "et al."],
  venue: "NeurIPS",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2402.19072",
  pdfUrl: "https://arxiv.org/pdf/2402.19072",
  codeUrl: "https://github.com/thuml/TimeXer",
} satisfies Paper;

export default paper;
