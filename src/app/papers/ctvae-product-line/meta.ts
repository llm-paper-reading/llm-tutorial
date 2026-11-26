import type { Paper } from "@/lib/papers";

const paper = {
  slug: "ctvae-product-line",
  title: "CTVAE：用条件表格 VAE 做产品线延伸的 what-if 分析",
  navTitle: "CTVAE 产品线延伸",
  paperTitle: "What-If Decision Support for Product Line Extension Using Conditional Deep Generative Models",
  desc: "把产品属性当作可控条件，用 Conditional Tabular VAE 学习产品属性—消费者特征的联合分布，生成“如果推出这个新规格/口味，消费者画像会怎么变”的合成分布。基于日本 20,682 名消费者、206,561 条软饮购买记录，CTVAE 优于 CTGAN/TVAE，并用容器、卡路里、口味案例展示蚕食风险与目标人群分析。",
  motivation: "产品线延伸的最大难题是：新规格、新口味在上市前没有真实购买数据，管理者只能靠经验或昂贵试销来猜消费者反应。论文把问题转成条件生成：给定可控的产品属性，生成对应的消费者属性分布，从而在历史交易数据上做 forward-looking 的 what-if 推理。",
  tags: ["营销", "数据合成"],
  icon: "🧃",
  authors: ["Yinxing Li", "Tsukasa Ishigaki"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2511.11646",
  sourceUrl: "https://arxiv.org/pdf/2511.11646",
} satisfies Paper;

export default paper;
