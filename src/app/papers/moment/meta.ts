import type { Paper } from "@/lib/papers";

const paper = {
  slug: "moment",
  title: "MOMENT：用掩码重建预训练一个通用时序编码器",
  navTitle: "MOMENT",
  paperTitle: "MOMENT: A Family of Open Time-series Foundation Models",
  desc: "CMU 的开源时序基础模型家族：把 4 个公开时序库拼成 Time Series Pile，用 patch 级掩码重建预训练 40M/125M/385M 的 Transformer 编码器；通过 zero-shot、linear probing 或轻量微调覆盖预测、分类、异常检测和插补五类任务。",
  motivation: "时序没有像文本/图像那样统一的大规模公开语料，采样率、变量数、长度、幅度又高度异质，导致多数据集预训练和公平评测都很难。MOMENT 要同时解决“数据从哪来、怎么混合预训练、怎么在有限监督下评测”这三个问题。",
  tags: ["时间序列"],
  icon: "🧩",
  authors: ["Mononito Goswami", "Konrad Szafer", "Arjun Choudhry", "et al."],
  venue: "ICML",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2402.03885",
  sourceUrl: "https://arxiv.org/pdf/2402.03885",
  codeUrl: "https://github.com/moment-timeseries-foundation-model/moment",
} satisfies Paper;

export default paper;
