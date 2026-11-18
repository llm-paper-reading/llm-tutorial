import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "Mamba 为什么是 Transformer 之外最重要的一条线？",
    answer: [
      "它是第一个「真正达到 Transformer 质量」的线性时间序列模型：语言、音频、基因组多模态 SOTA，3B 匹配两倍大的 Transformer。",
      "工程收益硬：推理吞吐 5×、每步常数开销（无 KV cache）、百万级序列线性扩展。"
    ],
    takeaway: "「替代注意力」从口号变成数据，此后才有混合架构的产业化。"
  },
  {
    id: "lti",
    question: "LTI 约束是什么，为什么要打破它？",
    answer: [
      "此前所有高效 SSM 必须时不变（LTI）：参数固定才能等价为卷积、才能快速训练。",
      "代价是模型无法区分输入内容——拷贝与归纳头这类需要「按内容选择」的任务全失败。Mamba 把参数变成输入的函数，选择性与 LTI 互斥。"
    ],
    takeaway: "想要选择性，就要放弃卷积形式的免费午餐——这是全文的核心取舍。"
  },
  {
    id: "selection",
    question: "「选择机制」具体怎么实现？",
    answer: [
      "让 Δ（步长）、B、C 依赖输入：步长大→当前 token 主导状态更新（记住），步长小→状态保持（遗忘）。",
      "效果上模型能按序列位置动态过滤信息——无关 token 被压缩掉，相关信息可无限期保留。"
    ],
    takeaway: "一组参数化的小改动，语义上等价于注意力对内容的敏感性。"
  },
  {
    id: "hardware",
    question: "硬件感知算法解决什么问题？",
    answer: [
      "选择破坏了卷积形式，训练必须走递推——朴素实现要物化 (B,L,D,N) 的扩展状态，显存爆炸。",
      "解法是并行扫描（scan）：核内分块，扩展状态只在 SRAM 里逐块重算与递推，不写回 HBM——比此前方法快 3×（A100）。"
    ],
    takeaway: "与 [FlashAttention](/papers/flash-attention) 同一哲学：让数据留在 SRAM、不物化大中间量。"
  },
  {
    id: "architecture",
    question: "Mamba 块的结构是什么？",
    answer: [
      "把此前 SSM 架构（H3）的门控与 Transformer 的 MLP 合并成一个同构块：无注意力、无独立 MLP，堆叠即成模型。",
      "每个块是「扩展 × 投影 → 卷积 → SiLU 门控 → 选择性 SSM」的流水线，比 Transformer 块更简单。"
    ],
    takeaway: "架构极简主义：去掉注意力与 MLP 的区分，一切都由选择性 SSM 承担。"
  },
  {
    id: "limits",
    question: "纯 Mamba 为什么没有取代 Transformer？",
    answer: [
      "精确检索（大海捞针式）与在上下文学习的关键场景仍弱于注意力；复制任务在超长分布外会失效。",
      "行业答案是混合：Jamba（1:7）、Nemotron-H、Griffin 等用少量注意力层补检索——Mamba 提供线性主体，注意力补短板。"
    ],
    takeaway: "Transformer vs SSM 之争的终局是「混合架构」——两者各司其职。"
  }
];

export default faq;
