import type { Paper } from "@/lib/papers";

const paper = {
  slug: "flash-attention",
  title: "FlashAttention：IO 感知的精确注意力",
  navTitle: "FlashAttention",
  paperTitle: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
  desc: "FlashAttention 论文精读：用 tiling 把 Q/K/V 分块加载进 SRAM、在线 softmax 增量归约、反向重算代替存储 N×N 矩阵——HBM 访问从 Θ(Nd+N²) 降到 Θ(N²d²M⁻¹)，注意力提速最高 7.6×、内存线性于序列长度；GPT-2 训练 3× 加速，长上下文带来 0.7 困惑度改善与 Path-X 16K 首次过随机线。",
  motivation: "近似注意力降了 FLOPs 却没有 wall-clock 提速，因为它们优化错了对象：GPU 上真正的瓶颈是 HBM 读写而非算术。FlashAttention 的动机是把「IO 感知」引入精确注意力——不近似、不改数学，只重组计算顺序让数据尽量留在片上 SRAM，一举拿下速度、内存与长上下文三个收益。",
  tags: ["NVIDIA 系列", "注意力机制", "推理优化", "高效训练"],
  icon: "⚡",
  authors: ["Tri Dao", "Daniel Y. Fu", "et al."],
  venue: "NeurIPS 2022",
  year: 2022,
  arxivUrl: "https://arxiv.org/abs/2205.14135",
  sourceUrl: "https://arxiv.org/pdf/2205.14135",
} satisfies Paper;

export default paper;
