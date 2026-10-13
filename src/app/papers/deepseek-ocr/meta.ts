import type { Paper } from "@/lib/papers";

const paper = {
  slug: "deepseek-ocr",
  title: "DeepSeek-OCR：上下文光学压缩",
  navTitle: "DeepSeek-OCR",
  paperTitle: "DeepSeek-OCR: Contexts Optical Compression",
  desc: "不到 1B 激活参数：DeepEncoder（80M SAM-base 感知 + 2 层卷积压缩 16× + 300M CLIP-large 知识，共约 380M）+ DeepSeek-3B-MoE（激活约 570M）。OCR 被重新定义为「上下文光学压缩」——把图像信息压进文本；<10× 压缩精度约 97%，20× 约 60%；deep parsing 输出统一 Markdown,OmniDocBench 以 1/9 token 数超 MinerU2.0。MIT 开源。",
  motivation: "长文档、论文和报告直接喂给 VLM 会消耗巨量视觉 token，传统 OCR 又只抽文字，丢掉版面、公式和图表结构。DeepSeek-OCR 的动机是把 OCR 重新定义为上下文压缩：用小激活模型把图像里的有效信息压成结构化文本，为后续大模型节省上下文预算。",
  tags: ["DeepSeek 系列", "多模态", "MoE 架构", "推理优化", "知识蒸馏"],
  icon: "📃",
  authors: ["Haoran Wei", "Yaofeng Sun", "Yukun Li"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2510.18234",
  pdfUrl: "https://arxiv.org/pdf/2510.18234",
  codeUrl: "https://github.com/deepseek-ai/DeepSeek-OCR",
} satisfies Paper;

export default paper;
