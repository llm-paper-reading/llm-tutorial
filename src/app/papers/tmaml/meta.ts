import type { Paper } from "@/lib/papers";

const paper = {
  slug: "tmaml",
  title: "TMAML：把 MAML 搬到冷启动时序预测",
  navTitle: "TMAML",
  paperTitle: "TMAML: Temporal Model-Agnostic Meta-Learning for Cold-Start Time Series Forecasting",
  desc: "把冷启动预测写成「K 窗口学习」，用时间上一致的 support–query 窗口构造元任务，再用一阶 MAML 学一个「从短历史快速适应」的初始化。在 Favorita、M5、UCI Electricity 三个冷启动场景上，TMAML-TFT 的 WQL 在 16 个 K 比较中 11 个显著优于 ERM，仅 1 个落后。",
  motivation: "全局预测模型能从相关序列借力，但标准 ERM 训练只优化训练集上的平均精度，从不显式奖励「对未见序列快速适应」。冷启动需要的恰恰是后者：只给几段历史甚至零历史，也要在新序列上预测得准。TMAML 把这段适应过程直接写进元学习目标。",
  tags: ["时间序列"],
  icon: "🪄",
  authors: ["Wannes Janssens", "Matthias Bogaert", "Dirk Van den Poel"],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2610.04547",
  sourceUrl: "https://arxiv.org/pdf/2610.04547",
  codeUrl: "https://github.com/Wannes15/TMAML_tslimits",
} satisfies Paper;

export default paper;
