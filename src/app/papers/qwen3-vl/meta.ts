import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen3-vl",
  title: "Qwen3-VL：看懂、想清、做得出",
  navTitle: "Qwen3-VL",
  paperTitle: "Qwen3-VL",
  desc: "阿里新一代视觉语言模型：Interleaved-MRoPE 全频率位置编码、DeepStack 多层视觉注入、文本-时间戳对齐三项架构更新；原生 256K 上下文可扩 1M，视频大海捞针 1M token 保持 99.5%；视觉 Agent 操作手机电脑 GUI，Instruct 版视觉感知比肩 Gemini 2.5 Pro。",
  motivation: "上一代 VLM 往往在长视频、细粒度 OCR、GUI 操作和纯文本能力之间取舍，视觉 token 多了贵，少了又看不清。Qwen3-VL 的动机是用位置编码、深层视觉注入和时间戳对齐重做多模态接口，让模型既能长上下文看视频，又能在真实界面里执行任务。",
  tags: ["多模态", "长上下文", "Agentic 训练", "注意力机制", "基础架构"],
  icon: "👁️",
  authors: ["Qwen Team"],
  venue: "官方博客",
  year: 2025,
  date: "2025-09",
  pdfUrl: "https://qwen.ai/blog?id=qwen3-vl",
  codeUrl: "https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Instruct",
} satisfies Paper;

export default paper;
