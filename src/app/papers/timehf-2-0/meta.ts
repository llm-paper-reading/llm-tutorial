import type { Paper } from "@/lib/papers";

const paper = {
  slug: "timehf-2-0",
  title: "TimeHF 2.0：零售供应链的多模态多区域协同预测",
  navTitle: "TimeHF 2.0",
  paperTitle: "TimeHF 2.0: Multimodal, Multivariate, and Multi-Region Collaborative Forecasting for Large-Scale Retail Supply Chains",
  desc: "京东供应链团队的大规模零售预测框架：把区域销量、结构化协变量与自然语言业务知识放进同一个编码器—解码器，在 20 万 SKU 的线上并行预测中，全国/DC 的日销量与计划窗口相对生产基线提升 18.25%/17.94% 与 19.44%/18.99%。",
  motivation: "JD 每天要为数千万商品、数百个 DC 输出上亿条预测；区域历史稀疏、业务条件各异、商品需求形态多变，还要同时给出日曲线与采购窗口总量。TimeHF 1.0 只做单品时序建模，无法把区域证据、结构化条件和业务人员的自然语言计划统一进预测。",
  tags: ["时间序列", "多模态"],
  icon: "📦",
  authors: ["Zhongxuan Han", "Zhengxin Shi", "Kunxiu Chen", "et al."],
  venue: "Technical Report",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2611.10521",
  sourceUrl: "https://arxiv.org/pdf/2611.10521",
} satisfies Paper;

export default paper;
