import type { Paper } from "@/lib/papers";

const paper = {
  slug: "attention-transformer",
  title: "Transformer：注意力就是你所需要的一切",
  navTitle: "Transformer",
  paperTitle: "Attention Is All You Need",
  desc: "2017 奠基论文：扔掉 RNN 与卷积，只用缩放点积注意力。顺序操作 O(n)→O(1)、任意两 token 路径长度 O(1)，GPU 并行性首次在序列建模上完全释放；多头、位置编码、残差+LayerNorm 构成此后所有大模型的骨架。",
  motivation: "RNN/CNN 时代的序列模型很难同时做到长距离依赖、短路径信息流和高并行训练。Transformer 的核心问题是：能不能完全抛开循环和卷积，只用注意力把任意 token 直接连起来，从而让序列建模真正吃满 GPU 并行性。",
  tags: ["基础架构", "注意力机制"],
  icon: "🔁",
  authors: ["Ashish Vaswani", "et al."],
  venue: "NeurIPS",
  year: 2017,
  arxivUrl: "https://arxiv.org/abs/1706.03762",
} satisfies Paper;

export default paper;
