import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "DeepSeek-V3 为什么强调性价比？",
    "answer": [
      "DeepSeek-V3 的核心不是单纯追求最大规模，而是用 MoE、MLA、FP8 和训练系统把单位成本下的能力做高。",
      "报告的意义在于把性能、训练成本和推理效率一起作为架构问题处理。"
    ],
    "takeaway": "DeepSeek-V3 的关键词是能力 / 成本比。"
  },
  {
    "id": "mla",
    "question": "MLA 解决了什么瓶颈？",
    "answer": [
      "长上下文推理中 KV cache 会占用大量显存。MLA 用低维潜向量压缩 KV 表示，减少缓存成本。",
      "这让模型在保持注意力能力的同时，显著改善长序列推理的内存压力。"
    ],
    "takeaway": "MLA 是面向 KV cache 的结构性压缩。"
  },
  {
    "id": "moe",
    "question": "DeepSeekMoE 的细粒度专家有什么好处？",
    "answer": [
      "把专家拆得更细可以让路由选择更精确，配合共享专家覆盖通用能力，提升参数利用率。",
      "同时，负载均衡策略要避免专家过热，否则 MoE 的训练和推理都会不稳定。"
    ],
    "takeaway": "MoE 的收益来自精细路由和稳定均衡。"
  },
  {
    "id": "fp8",
    "question": "FP8 为什么是重要实验点？",
    "answer": [
      "FP8 能显著降低训练显存和通信 / 计算成本，但超大规模训练中容易遇到数值稳定问题。",
      "DeepSeek-V3 报告的重要性之一，是展示了 FP8 混合精度在超大规模模型训练中的可行性。"
    ],
    "takeaway": "FP8 是把训练成本压下来的关键工程验证。"
  },
  {
    "id": "posttraining",
    "question": "V3 后训练和 R1 有什么关系？",
    "answer": [
      "V3 后训练使用了来自强推理模型的数据和 RL 信号，帮助基础模型获得更强数学、代码和推理能力。",
      "这也解释了为什么 DeepSeek 系列里 base、chat、R1 和蒸馏模型需要分开理解。"
    ],
    "takeaway": "V3 是后续 R1 路线的重要底座和承接者。"
  },
  {
    "id": "aux-loss-free",
    "question": "无辅助损失负载均衡为什么值得关注？",
    "answer": [
      "传统 MoE 常用 auxiliary loss 迫使专家均衡，但它可能干扰主任务优化。无辅助损失路线希望在不额外扭曲目标的情况下保持负载稳定。",
      "这对大规模 MoE 的质量和稳定都很关键。"
    ],
    "takeaway": "负载均衡最好少干扰主任务。"
  },
  {
    "id": "training-cost",
    "question": "2.788M GPU 小时应该怎么理解？",
    "answer": [
      "这是训练成本透明化的重要数字，用来展示 V3 在能力和成本上的性价比。",
      "但不同硬件、并行策略、数据和训练阶段不可直接横比，需要结合报告口径。"
    ],
    "takeaway": "成本数字有价值，但必须带口径读。"
  },
  {
    "id": "r1-distill",
    "question": "为什么 V3 后训练会使用 R1 相关数据？",
    "answer": [
      "强推理模型生成的数据可以作为高质量推理轨迹，帮助基础模型吸收数学、代码等能力。",
      "这体现了“强模型探索，主模型吸收”的后训练路线。"
    ],
    "takeaway": "强推理轨迹可以反哺通用模型。"
  }
] satisfies PaperFAQ;

export default faq;
