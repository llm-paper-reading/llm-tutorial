import type { Paper } from "@/lib/papers";

const paper = {
  slug: "mamba",
  title: "Mamba：选择性状态空间与线性时间序列建模",
  navTitle: "Mamba",
  paperTitle: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
  desc: "Mamba 精读：把 SSM 参数（Δ、B、C）变成输入的函数实现「选择」——按当前 token 决定记住或遗忘；为绕开 LTI 约束设计硬件感知的并行扫描（不物化扩展状态、SRAM 内递推）；无注意力无 MLP 的同构块。推理吞吐 5×、序列线性扩展，3B 质量匹配两倍大的 Transformer；Nemotron-H 等混合架构的基石。",
  motivation: "注意力机制有两个根本缺陷：无法建模窗口外信息、随窗口长度二次增长。此前的亚二次架构（线性注意力、SSM 等）在语言上始终不如注意力，Mamba 的诊断是它们缺「基于内容的选择」——无法按输入决定关注或忽略。解法是让 SSM 参数依赖输入，代价是必须放弃卷积形式、重写整个计算路径。",
  tags: ["基础架构", "注意力机制", "推理优化"],
  icon: "🐍",
  authors: ["Albert Gu", "Tri Dao"],
  venue: "ICML 2024（COLM 2024 口头报告）",
  year: 2023,
  arxivUrl: "https://arxiv.org/abs/2312.00752",
  pdfUrl: "https://arxiv.org/pdf/2312.00752",
} satisfies Paper;

export default paper;
