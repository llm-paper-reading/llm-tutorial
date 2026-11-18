import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "为什么这篇是所有 scaling 讨论的源头？",
    answer: [
      "它是第一个把「损失 vs 规模」拟合成精确幂律并外推使用的工作：GPT-3 用它论证 175B 值得训、Llama 3 的 IsoFLOPs 与 Qwen2.5 的超参 scaling law 都是它的工程化后代。",
      "站内十余篇报告都在引用 scaling law，这篇给出公式本体与全部拟合常数。"
    ],
    takeaway: "读它是给站内所有「外推」段落补上地基。"
  },
  {
    id: "power-law",
    question: "三条幂律分别是什么？",
    answer: [
      "参数受限（数据充分、训到收敛）：L(N) = (Nc/N)^αN，αN≈0.076；数据受限：L(D) = (Dc/D)^αD，αD≈0.095。",
      "最优分配算力：L(Cmin) = (Cc/Cmin)^αC，αCmin≈0.050。三条趋势分别跨六、八个数量级成立。"
    ],
    takeaway: "每个指数都小（<0.1）但跨数量级累积——这就是规模的复利。"
  },
  {
    id: "shape",
    question: "「形状弱依赖」是什么意思？",
    answer: [
      "深度 vs 宽度、注意力头数等架构超参在合理范围内对损失影响极小——性能几乎只由 N、D、C 决定。",
      "这为「简单架构 + 堆规模」的路线（GPT-3、Llama 3）提供了实证背书。"
    ],
    takeaway: "规模三个变量决定 95% 的性能，形状是次要调参。"
  },
  {
    id: "overfitting",
    question: "过拟合的定量规律是什么？",
    answer: [
      "联合公式 L(N,D) = [ (Nc/N)^(αN/αD) + Dc/D ]^αD 刻画同时依赖：损失惩罚取决于比值 N^0.74/D。",
      "实操含义：模型大 8 倍时数据只需多 5 倍即可避免过拟合惩罚——数据增长是次线性的。"
    ],
    takeaway: "「N^0.74/D」是判断数据够不够的拇指法则。"
  },
  {
    id: "compute-optimal",
    question: "「算力主要买参数」的结论怎么来的？",
    answer: [
      "联合学习曲线公式推出最优配比 N ∝ C^0.73、B ∝ C^0.24、S ∝ C^0.03——指数最大的一项是参数。",
      "推论：计算最优训练应训大模型并远未收敛时停止；样本效率随模型尺寸提升。"
    ],
    takeaway: "这条结论两年后被 Chinchilla 修正（数据也该同步放大），但框架未变。"
  },
  {
    id: "limits",
    question: "读这篇要注意什么？",
    answer: [
      "常数 Nc、Dc、Cc 依赖词表与 tokenization，论文明说「无根本意义」——不要直接照搬到自己的设置。",
      "结论停在 loss 层面，loss 与下游能力的关系是后续涌现研究补的；Chinchilla（2022）指出其数据配比偏保守。"
    ],
    takeaway: "公式形式可迁移，常数必须重新拟合。"
  }
];

export default faq;
