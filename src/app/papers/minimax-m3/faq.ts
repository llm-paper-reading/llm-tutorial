import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "MiniMax-M3 为什么聚焦块稀疏注意力？",
    "answer": [
      "1M 上下文下，全量注意力的计算和显存成本非常高，成为部署瓶颈。块稀疏注意力试图只关注最相关的历史块。",
      "这样可以把理论 FLOPs 节省转化为实际推理加速。"
    ],
    "takeaway": "长上下文效率要从注意力模式本身入手。"
  },
  {
    "id": "msa",
    "question": "MSA 的 Index Branch 做什么？",
    "answer": [
      "Index Branch 用轻量打分机制选择重要块，再让主注意力集中在这些块上。",
      "它相当于为长上下文建立一个可训练的检索器，减少无关 token 的计算。"
    ],
    "takeaway": "Index Branch 决定长上下文里看哪些块。"
  },
  {
    "id": "training",
    "question": "为什么索引器训练需要 KL 对齐和热身？",
    "answer": [
      "如果索引器一开始选错块，会破坏主模型原本的注意力行为。KL 对齐和热身帮助稀疏注意力逐步接近原模型分布。",
      "这说明注意力稀疏化不是纯推理技巧，也需要训练适配。"
    ],
    "takeaway": "稀疏索引器需要被稳定训练出来。"
  },
  {
    "id": "kernel",
    "question": "为什么强调内核协同设计？",
    "answer": [
      "理论上少算 FLOPs 不一定等于实际更快，硬件访存、块布局和 kernel 实现都会影响速度。",
      "MiniMax-M3 强调把稀疏模式和底层内核一起设计，才能把节省落到 wall-clock。"
    ],
    "takeaway": "效率优化要从算法走到内核。"
  },
  {
    "id": "dsa-compare",
    "question": "MSA 和 DSA 是什么关系？",
    "answer": [
      "二者都是长上下文稀疏注意力路线，都使用额外机制选择重要历史信息。",
      "差别在选择粒度、索引器结构、训练 recipe 和系统实现。阅读时应比较它们如何把稀疏选择训练稳定、推理加速。"
    ],
    "takeaway": "MSA 和 DSA 是同一大方向下的不同稀疏化方案。"
  },
  {
    "id": "sink-local",
    "question": "sink 与局部窗口为什么常被讨论？",
    "answer": [
      "长上下文模型常保留 sink token 或局部窗口，帮助稳定注意力和处理近邻信息。",
      "MiniMax-M3 的消融说明某些显式硬编码可能不是必须，但这些机制仍是长上下文设计的重要对照。"
    ],
    "takeaway": "稀疏注意力要和常见稳定技巧对照验证。"
  },
  {
    "id": "from-scratch-vs-continue",
    "question": "从头训和续训两条路线有什么差别？",
    "answer": [
      "从头训可以让稀疏机制从一开始融入模型，但成本更高；续训可以复用已有模型能力，但需要避免结构替换造成退化。",
      "两条路线体现了效率改造中的成本和风险权衡。"
    ],
    "takeaway": "稀疏化既可以原生训练，也可以后天改造。"
  },
  {
    "id": "block-size",
    "question": "块大小会影响什么？",
    "answer": [
      "块太大，选择粒度粗，可能浪费计算；块太小，索引和调度开销增加。",
      "合适的块大小要结合任务、硬件和 kernel 实现。"
    ],
    "takeaway": "块稀疏的效率取决于粒度和系统实现。"
  }
] satisfies PaperFAQ;

export default faq;
