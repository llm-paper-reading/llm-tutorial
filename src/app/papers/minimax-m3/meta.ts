import type { Paper } from "@/lib/papers";

const paper = {
  slug: "minimax-m3",
  title: "MiniMax-M3：块稀疏注意力与原生多模态",
  navTitle: "MiniMax-M3",
  paperTitle: "MiniMax Sparse Attention",
  desc: "428B/23B 激活、1M 上下文的原生多模态模型。MSA 用单 KV 头的 Index Branch 给 KV 块打分，每个 GQA 组独立 Top-k 选块、Main Branch 只做稀疏精确注意力；每 query 固定 2048 KV token，1M 上下文下注意力 FLOPs 降为 1/28.4，prefill 提速 14.2×、decode 7.6×。",
  motivation: "百万上下文多模态模型最大的拦路虎是注意力成本：全量精确注意力在长输入下几乎不可承受，但粗糙稀疏又可能损伤效果。MiniMax-M3 的动机是让模型先学会“挑哪些 KV 块值得看”，再只在关键块上做精确注意力，把长上下文从能跑变成跑得起。",
  tags: ["MiniMax 系列", "注意力机制", "多模态", "长上下文", "MoE 架构"],
  icon: "🪶",
  authors: ["Xunhao Lai", "et al."],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2606.13392",
  pdfUrl: "https://arxiv.org/pdf/2606.13392",
  codeUrl: "https://huggingface.co/MiniMaxAI/MiniMax-M3",
} satisfies Paper;

export default paper;
