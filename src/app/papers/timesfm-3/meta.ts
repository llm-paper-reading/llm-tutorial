import type { Paper } from "@/lib/papers";

const paper = {
  slug: "timesfm-3",
  title: "TimesFM-3：把多变量零样本预测做成单次前向",
  navTitle: "TimesFM-3",
  paperTitle: "TimesFM-3: A zero-shot foundation model for multivariate forecasting",
  desc: "Google Research 的第三代时序基础模型：330M 参数、1 万亿以上时间点预训练，原生支持多目标、历史协变量与未来动态协变量；用因果时间注意力 + 全变量注意力交替，以及 Contiguous Patch Masking 单次前向生成整个 horizon，在 Gift-Eval、FEV-Bench、Time 上取得预训练基础模型中的最佳平均排名。",
  motivation: "TimesFM-2.5 之前严格限定单变量预测，但真实预测几乎都是多变量的：目标序列、相关产品、历史客流、已知未来促销/天气会共同影响走势。TimesFM-3 要把「多变量 + 协变量 + 零样本」做成一次前向就能完成的原生能力，而不是靠逐变量外挂。",
  tags: ["时间序列"],
  icon: "🍦",
  authors: ["Ayush Jain", "Rajat Sen"],
  venue: "技术博客",
  year: 2026,
  date: "2026-08",
  sourceType: "blog",
  sourceUrl: "https://research.google/blog/timesfm-3-a-zero-shot-foundation-model-for-multivariate-forecasting/",
  codeUrl: "https://github.com/google-research/timesfm",
} satisfies Paper;

export default paper;
