import type { Paper } from "@/lib/papers";

const paper = {
  slug: "deep-ts-survey",
  title: "时序综述与 TSLib：没有万能架构，只有任务匹配",
  navTitle: "时序综述 · TSLib",
  paperTitle: "Deep Time Series Models: A Comprehensive Survey and Benchmark",
  desc: "清华 THUML 的时序综述与 TSLib 基准：从 stationarization、decomposition、Fourier 三个基本模块，到 MLP/RNN/CNN/GNN/Transformer 五类架构与原生/LLM 派 TSFM；统一评测 16 个深度模型和 6 个时序基础模型，结论是没有单一架构通吃所有任务。",
  motivation: "时序模型越来越多，但论文之间的 lookback、超参、评测协议各不相同，很难判断一个架构到底强在哪。这篇综述把模型拆成基本模块与架构设计，并用 TSLib 在同一套协议下重跑 41 个模型、30 个数据集、5 类任务，回答“什么结构适合什么任务”。",
  tags: ["时间序列"],
  icon: "🗂️",
  authors: ["Yuxuan Wang", "Haixu Wu", "Jiaxiang Dong", "et al."],
  venue: "TPAMI",
  year: 2026,
  date: "2026-05",
  arxivUrl: "https://arxiv.org/abs/2407.13278",
  sourceUrl: "https://arxiv.org/pdf/2407.13278",
  codeUrl: "https://github.com/thuml/Time-Series-Library",
} satisfies Paper;

export default paper;
