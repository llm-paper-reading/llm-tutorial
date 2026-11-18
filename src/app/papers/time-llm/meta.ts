import type { Paper } from "@/lib/papers";

const paper = {
  slug: "time-llm",
  title: "Time-LLM：把时序重编程成 LLM 的「外语」",
  navTitle: "Time-LLM",
  paperTitle: "Time-LLM: Time Series Forecasting by Reprogramming Large Language Models",
  desc: "ICLR 2024：冻结 Llama-7B，把时序 patch 用文本原型重编程成 LLM 能读的表示，再用 Prompt-as-Prefix 提供数据集背景、任务指令与统计量；只训练轻量输入/输出层，就在长程、短期、少样本与零样本预测上超过专用模型。",
  motivation: "时序预测长期是「一个任务一个模型」，而 LLM 具备泛化、数据效率与推理能力。难点在模态鸿沟：时序是连续值、LLM 处理离散 token，且时序无法无损翻译成自然语言。Time-LLM 选择用「重编程」而不是微调，把时序对齐到语言模型的表示空间。",
  tags: ["时间序列"],
  icon: "🪄",
  authors: ["Ming Jin", "Shiyu Wang", "Lintao Ma", "et al."],
  venue: "ICLR",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2310.01728",
  pdfUrl: "https://arxiv.org/pdf/2310.01728",
  codeUrl: "https://github.com/KimMeen/Time-LLM",
} satisfies Paper;

export default paper;
