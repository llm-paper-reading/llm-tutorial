import type { Paper } from "@/lib/papers";

const paper = {
  slug: "timesfm",
  title: "TimesFM：解码器时序基础模型的零样本预测",
  navTitle: "TimesFM",
  paperTitle: "A Decoder-only Foundation Model for Time-series Forecasting",
  desc: "Google Research 的时序基础模型：把时间序列切成 patch，用因果解码器一次预测一个输出 patch；200M 参数、O(100B) 时间点预训练，在 Monash/Darts/ETT 等未见数据集上零样本接近逐数据集监督训练的 SOTA。",
  motivation: "时序没有像 NLP 那样明确的词表和语法，还要同时支持不同的历史长度、预测长度和时间粒度；公开数据也远少于文本。TimesFM 要回答的是：能否只用时序数据从头预训练一个单一模型，让它在未见数据集上开箱即用地零样本预测。",
  tags: ["时间序列"],
  icon: "📈",
  authors: ["Abhimanyu Das", "Weihao Kong", "Rajat Sen", "Yichen Zhou"],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2310.10688",
  sourceUrl: "https://arxiv.org/pdf/2310.10688",
} satisfies Paper;

export default paper;
