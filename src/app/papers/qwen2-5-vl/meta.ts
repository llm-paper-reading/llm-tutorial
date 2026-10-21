import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen2-5-vl",
  title: "Qwen2.5-VL：原生动态分辨率、绝对时间与 GUI Agent",
  navTitle: "Qwen2.5-VL",
  paperTitle: "Qwen2.5-VL Technical Report",
  desc: "Qwen2.5-VL 技术报告：原生动态分辨率 ViT（14×14 patch、窗口注意力、2D-RoPE）、MRoPE 时间维对齐绝对时间、动态 FPS 采样、文档全能解析（HTML 统一版式）、绝对坐标 grounding 与 GUI Agent 能力。预训练 1.2T→4.1T token，72B 对标 GPT-4o 与 Claude 3.5 Sonnet。",
  motivation: "此前 VLM 把图像 resize 到固定分辨率再编码，丢失细粒度信息且无法感知真实尺度；视频时间靠相对编码，模型说不清「第几秒」；GUI 操作需要像素级 grounding 但模型只见过归一化坐标。Qwen2.5-VL 的动机是让视觉输入保持原生分辨率与绝对时空坐标，把「看得清、定得准、打得着」做成模型的原生能力。",
  tags: ["Qwen 系列", "多模态", "Agentic 训练", "注意力机制"],
  icon: "🧭",
  authors: ["Qwen Team", "Alibaba Group"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2502.13923",
  pdfUrl: "https://arxiv.org/pdf/2502.13923",
} satisfies Paper;

export default paper;
