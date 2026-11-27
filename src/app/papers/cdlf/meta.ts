import type { Paper } from "@/lib/papers";

const paper = {
  slug: "cdlf",
  title: "CDLF：冷启动产品生命周期的条件扩散预测",
  navTitle: "CDLF",
  paperTitle: "Cold-Start Forecasting of New Product Life-Cycles via Conditional Diffusion Models",
  desc: "把新品生命周期预测写成条件生成：用静态属性、相似产品的参考轨迹、以及上市后逐渐到达的短前缀，共同条件化一个逐步去噪的扩散模型。Intel CPU 的 1–8 周 MAE 从 17.16 降到 14.52，Hugging Face 仓库采纳预测的 MAE 从 0.45 降到 0.38。",
  motivation: "新品上市前的关键决策——产能、库存、渠道——必须在需求模式可观测之前做出；上市初期又只有一小段噪声很大的前缀。传统时序方法依赖长历史，跨产品迁移方法又常被限定在既有生命周期形状里。CDLF 要的是同一套模型：没有历史时靠属性与相似产品，有前缀后逐步更新整条未来分布。",
  tags: ["时间序列", "营销"],
  icon: "🚀",
  authors: ["Ruihan Zhou", "Zishi Zhang", "Jinhui Han", "Yijie Peng", "Xiaowei Zhang"],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2604.20370",
  sourceUrl: "https://arxiv.org/pdf/2604.20370",
} satisfies Paper;

export default paper;
