import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen1",
  title: "Qwen：千问起点的数据与 tokenizer 账",
  navTitle: "Qwen",
  paperTitle: "Qwen Technical Report",
  desc: "Qwen 系列首份技术报告：3T token 多语言预训练、152K BBPE 词表在中文与代码上的压缩率优势、SFT + RLHF（PPO）对齐流水线，以及 Code-Qwen / Math-Qwen 两条专业化支线。Qwen-14B 在 MMLU 66.3、C-Eval 72.1，多个任务超过 Llama2-70B。",
  motivation: "2023 年开源模型要么英文强中文弱，要么 tokenizer 压缩率差导致中文服务成本高，且多数只有 base 模型没有对齐。Qwen 的动机是用多语言数据配比、高压缩 BBPE 词表和完整 SFT+RLHF 流水线，做出中英双语都强、能直接当助手用的开源模型家族。",
  tags: ["Qwen 系列", "基础架构", "对齐与偏好优化"],
  icon: "🧭",
  authors: ["Jinze Bai", "et al."],
  venue: "arXiv",
  year: 2023,
  arxivUrl: "https://arxiv.org/abs/2309.16609",
  pdfUrl: "https://arxiv.org/pdf/2309.16609",
} satisfies Paper;

export default paper;
