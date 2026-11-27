import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "less-is-more",
    "question": "「更少即更多」具体少了什么？",
    "answer": [
      "相对 Moirai 1.0，Moirai 2.0 去掉了 masked encoder、多 patch size 和混合分布三套复杂组件，换成 decoder-only 因果 Transformer、单一 patch 粒度和分位数损失。",
      "结果是模型更小、更快、更容易训练，同时在 GIFT-Eval 上精度更高——所以「少」指的是结构复杂度，不是能力。"
    ],
    "takeaway": "减的是架构复杂度，换的是数据效率与推理效率。"
  },
  {
    "id": "decoder-only",
    "question": "为什么 decoder-only 比 masked encoder 更划算？",
    "answer": [
      "masked encoder 一次前向只在被遮住的 token 上算损失；按 15% 遮罩率，大部分 token 没有梯度。decoder-only 对长度为 T 的序列直接产生 T−1 个位置的损失，数据利用率高得多。",
      "另外 decoder-only 可以用 KV cache：上下文只前向一次，后续解码复用缓存。masked encoder 每次查询都要从头重算。"
    ],
    "takeaway": "因果训练让每个 token 都参与学习，KV cache 让重复查询更便宜。"
  },
  {
    "id": "quantile-loss",
    "question": "为什么用分位数损失替代混合分布？",
    "answer": [
      "混合分布要输出分布参数再采样，参数容易方差塌缩或爆炸，负对数似然在离群点上也不稳。分位数损失直接优化 9 个分位水平，非对称惩罚自然，对极端尾部更稳健。",
      "分位数也直接对应业务指标：容量规划看 0.9 分位，风险控制看 0.1 分位。"
    ],
    "takeaway": "从「拟合一个分布」改为「直接拟合关心的分位」。"
  },
  {
    "id": "multi-quantile",
    "question": "自回归多分位数解码在解决什么？",
    "answer": [
      "普通自回归每步只回填一个值，但分位数模型每步输出 9 个值，全部回填会维度不匹配，只取中位数又丢掉不确定性。",
      "Moirai 2.0 用深度 2 的展开—折叠：把上一步 9 个分位数分别当作历史，扩展出 81 个候选，再折叠回 9 个分位数。既保留不确定性，又保持推理可行。"
    ],
    "takeaway": "展开采样多种未来，折叠成一组一致的分位数。"
  },
  {
    "id": "multi-token",
    "question": "多 token 预测有什么用？",
    "answer": [
      "每个输出 token 一次预测多个未来 patch，减少自回归步数，从而降低长 horizon 的误差累积，同时提升推理效率。",
      "消融显示多 token 预测要和随机遮罩一起用才稳定：单独的随机遮罩会掉点，组合后 CRPS 反而改善。"
    ],
    "takeaway": "一次多预测几个 patch，少走几步自回归。"
  },
  {
    "id": "scaling",
    "question": "为什么参数变多反而更差？",
    "answer": [
      "论文把模型从 11.4M 扩到 87.1M、305M，GIFT-Eval 的 MASE 和 CRPS 都变差。作者认为小模型已经足以吃透现有预训练数据，参数和数据规模失配。",
      "这不代表 scaling 永远无效，而是说明时序基础模型的瓶颈可能先在数据规模与多样性，而不是模型容量。"
    ],
    "takeaway": "参数扩张要和数据扩张同步，否则没有收益。"
  },
  {
    "id": "no-multivariate",
    "question": "为什么主动放弃多变量和协变量？",
    "answer": [
      "高质量的多变量、带协变量语料太少，做进架构的复杂度换不来稳定收益。Moirai 2.0 选择把多变量拆成独立单变量序列，专注把单变量预测做到极致。",
      "这与 Chronos-2 的路线相反：后者用合成数据把多变量和协变量做进组注意力，适合协变量是决定性信息的任务。"
    ],
    "takeaway": "不是做不到，而是当前数据条件下不划算。"
  },
  {
    "id": "efficiency",
    "question": "效率提升有多大？",
    "answer": [
      "Moirai 2.0 比 Moirai-Large 小约 30 倍、快约 2 倍，精度还更高。KV cache 在上下文约 10K、预测长度 1K 时约 4 倍加速，预测长度 10K 时可达 17 倍。",
      "在速度—参数—精度比较中，它处在帕累托前沿附近：比它更快的模型通常更大或更不准。"
    ],
    "takeaway": "小模型 + KV cache，把部署成本压到很低。"
  }
];

export default faq;
