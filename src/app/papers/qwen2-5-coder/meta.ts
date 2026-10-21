import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen2-5-coder",
  title: "Qwen2.5-Coder：代码模型的配比与仓库级预训练",
  navTitle: "Qwen2.5-Coder",
  paperTitle: "Qwen2.5-Coder Technical Report",
  desc: "Qwen2.5-Coder 技术报告：在 Qwen2.5 上继续预训练 5.5T token，Code:Text:Math = 70:20:10 配比反直觉地优于纯代码；文件级 FIM + 仓库级 FIM 两级预训练把上下文推到 128K；指令数据走「合成 + 沙箱验证 + DPO」。32B-Instruct 成当时开源 SOTA，比肩 GPT-4o 代码能力。",
  motivation: "代码模型通常在纯代码语料上训练，通用与数学能力掉得厉害，且只能做单文件补全。Qwen2.5-Coder 的动机是证明「不纯的代码模型更强」：用配比实验找到代码/文本/数学的平衡点，把 FIM 从文件级扩到仓库级解决跨文件补全，再用沙箱执行反馈保证指令数据质量。",
  tags: ["Qwen 系列", "数据合成", "长上下文"],
  icon: "🧭",
  authors: ["Binyuan Hui", "et al."],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2409.12186",
  pdfUrl: "https://arxiv.org/pdf/2409.12186",
} satisfies Paper;

export default paper;
