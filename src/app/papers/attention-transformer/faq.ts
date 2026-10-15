import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "Transformer 为什么要抛开循环和卷积？",
    "answer": [
      "RNN 的顺序计算限制并行效率，长距离依赖也难训练；卷积虽然并行，但需要堆叠多层才能覆盖远距离。",
      "Transformer 用自注意力让序列中任意两个位置直接交互，同时能在训练时高度并行。"
    ],
    "takeaway": "注意力把长距离依赖和并行训练放到同一个框架里。"
  },
  {
    "id": "qkv",
    "question": "Q、K、V 三个矩阵分别是什么直觉？",
    "answer": [
      "Query 表示当前位置想问什么，Key 表示每个位置能被什么问题匹配，Value 表示匹配后要取走的信息。",
      "缩放点积注意力就是用 Q 和 K 算相关性，再用这个权重加权 V。"
    ],
    "takeaway": "QK 决定看哪里，V 决定拿什么。"
  },
  {
    "id": "sqrt-dk",
    "question": "为什么点积要除以 √dk？",
    "answer": [
      "维度越高，随机向量点积的方差越大，softmax 容易变得过尖，梯度变小。除以 √dk 可以稳定 logits 的尺度。",
      "这不是经验魔法，而是为了让注意力分布在不同 head 维度下保持可训练。"
    ],
    "takeaway": "缩放项是在控制 softmax 输入尺度。"
  },
  {
    "id": "multi-head",
    "question": "多头注意力为什么有用？",
    "answer": [
      "单个注意力头只能在一个表示子空间里对齐关系，多头可以并行关注不同位置关系和特征类型。",
      "最后把多个头拼接再投影，相当于让模型同时问多种问题。"
    ],
    "takeaway": "多头是并行的多视角关系建模。"
  },
  {
    "id": "position",
    "question": "没有 RNN 后，模型怎么知道顺序？",
    "answer": [
      "自注意力本身对 token 顺序不敏感，因此需要位置编码或后来的 RoPE 等机制注入位置信息。",
      "原论文使用正弦位置编码，让模型能根据不同频率感知绝对和相对位置。"
    ],
    "takeaway": "Transformer 去掉了递归，但不能去掉位置信息。"
  },
  {
    "id": "ffn",
    "question": "前馈网络在 Transformer 里做什么？",
    "answer": [
      "注意力负责在 token 之间交换信息，前馈网络则对每个位置的表示做非线性变换和特征加工。",
      "可以把它理解成每个 token 独立经过同一套小 MLP，用来提升表示能力。"
    ],
    "takeaway": "Attention 混合信息，FFN 加工信息。"
  },
  {
    "id": "mask",
    "question": "Decoder 为什么需要 mask？",
    "answer": [
      "自回归生成时，当前位置不能看到未来 token，否则训练和推理条件不一致。",
      "causal mask 保证每个位置只能依赖左侧前缀。"
    ],
    "takeaway": "mask 让训练遵守自回归规则。"
  },
  {
    "id": "scaling-impact",
    "question": "Transformer 为什么能带来规模化浪潮？",
    "answer": [
      "它的核心计算可以高度并行，适合 GPU/TPU 大批量训练。",
      "自注意力和前馈层也能随着数据和参数规模稳定扩展，成为后续 LLM 的基础。"
    ],
    "takeaway": "Transformer 的成功既是建模成功，也是硬件友好。"
  }
] satisfies PaperFAQ;

export default faq;
