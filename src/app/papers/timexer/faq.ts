import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "why-exogenous",
    "question": "为什么需要单独处理外生变量？",
    "answer": [
      "真实预测里，内生变量（要预测的目标）往往受外部因素影响，例如电价受供需和燃料价格影响，单靠历史电价很难预测未来。",
      "多变量模型把所有变量平等对待，会引入不必要的内生到外生交互；单变量模型又完全忽略外生信息。TimeXer 把外生变量当作辅助信息，只让它们影响内生预测，而不需要预测它们。"
    ],
    "takeaway": "外生变量是“只进不出”的辅助信息，不该和内生出平等看待。"
  },
  {
    "id": "two-granularity",
    "question": "为什么内生用 patch，外生用 variate token？",
    "answer": [
      "内生变量需要精细的时序建模，patch 级 token 能保留局部形态并降低序列长度；外生变量更关心“这个变量整体和内生有什么关系”，整条序列压成一个 variate token 就够了。",
      "variate 级表示还能自然处理外生序列的缺失、时间错位、频率不一致和长度不一致，不需要强行对齐到内生的时间轴。"
    ],
    "takeaway": "内生要细粒度时间建模，外生要粗粒度变量建模。"
  },
  {
    "id": "global-token",
    "question": "全局 token 的作用是什么？",
    "answer": [
      "全局 token 是每个内生序列的一个可学习向量，代表整条序列的宏观信息。它同时和 patch token 做 self-attention，又作为 query 去 cross-attend 外生 variate token。",
      "这样外生信息先汇聚到全局 token，再通过 self-attention 分配给各个内生 patch，形成一个“外生 → 全局 → 局部”的信息通路。"
    ],
    "takeaway": "全局 token 是外生变量和内生 patch 之间的桥。"
  },
  {
    "id": "irregular",
    "question": "TimeXer 如何处理不规则外生序列？",
    "answer": [
      "它不要求外生和内生序列在时间上对齐，也不要求相同频率或相同 lookback；每个外生序列独立压成一个 variate token。",
      "论文验证了外生 lookback 与内生不一致、外生缺失值等场景：外生被替换成零或随机值时，性能只有轻微下降，说明模型不会过度依赖外生信息。"
    ],
    "takeaway": "变长、错位、缺失的外生序列不需要强行补齐。"
  },
  {
    "id": "multivariate",
    "question": "TimeXer 怎么做普通多变量预测？",
    "answer": [
      "它采用 channel independence：对每个变量，把它当内生变量，其余变量当外生变量，所有变量共享同一套 self-attention 和 cross-attention 层，并行预测。",
      "这样多变量预测就变成“每个变量都带一组外生协变量”的特例，不需要为多变量单独设计架构。"
    ],
    "takeaway": "外生预测范式可以统一多变量预测。"
  },
  {
    "id": "results",
    "question": "实验结果有多强？",
    "answer": [
      "在 5 个短期电价市场（NP、PJM、BE、FR、DE）上，TimeXer 平均 MSE/MAE 为 0.307/0.265，优于 iTransformer 的 0.335/0.289、PatchTST 的 0.330/0.282 和 TiDE 的 0.412/0.338。",
      "在 7 个长程多变量数据集上，它在多数数据集上最好；Traffic 上不如 iTransformer（0.466 vs 0.428 MSE），说明没有全面通吃。"
    ],
    "takeaway": "外生场景优势明显，但多变量通用性不是无条件最强。"
  },
  {
    "id": "efficiency",
    "question": "外生变量很多时，效率如何？",
    "answer": [
      "在 ECL 的 320 个外生变量上，TimeXer 显存约 0.95GB、每轮 33ms；iTransformer 约 1.23GB、25ms；PatchTST 约 5.92GB、163ms；Crossformer 约 7.41GB、128ms。",
      "TimeXer 比 iTransformer 略慢，但显存更低，因为外生变量只在开头嵌入一次，后续只和全局 token 做 cross-attention，不在每层和外生 token 反复交互。"
    ],
    "takeaway": "变量多时，显存比纯 variate-wise 自注意力更友好。"
  },
  {
    "id": "limitations",
    "question": "主要局限是什么？",
    "answer": [
      "外生信息只通过全局 token 这一个瓶颈进入内生 patch，可能损失细粒度的外生-内生局部对应关系；外生序列本身如果噪声很大，也可能拖累预测。",
      "论文显示内生历史被破坏时性能会大幅下降，说明模型仍然高度依赖内生序列质量；此外，TimeXer 使用的是历史外生序列，不涉及未来外生值，上线前要确认推理时能拿到对应的历史外生数据。"
    ],
    "takeaway": "外生是辅助，不是万能；内生质量仍是上限。"
  }
] satisfies PaperFAQ;

export default faq;
