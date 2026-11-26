import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "why-foundation-model",
    "question": "时序为什么需要一个自己的基础模型？",
    "answer": [
      "NLP 有明确的词表和语法，可以大规模预训练再零样本迁移；时序没有统一次词表，不同数据集的频率、长度、周期和尺度差异很大。",
      "如果能为时序训练一个通用模型，下游用户就不必为每个数据集单独训练模型，能显著降低训练负担和算力成本。TimesFM 要验证的就是这件事是否可行。"
    ],
    "takeaway": "目标不是做一个更大的专用模型，而是做一个开箱即用的通用预测器。"
  },
  {
    "id": "decoder-only-patch",
    "question": "为什么用 decoder-only 加 patch，而不是直接喂原始点？",
    "answer": [
      "一个 patch 相当于语言模型里的一个 token。把连续时间点切成 patch，可以大幅减少序列长度和注意力计算量，同时保留局部形状信息。",
      "decoder-only 的因果注意力让模型可以在整个上下文上并行训练，并且天然支持不同长度的历史；每个输出 token 负责预测它后面的一个输出 patch。"
    ],
    "takeaway": "patch 解决序列太长，decoder-only 解决变长上下文。"
  },
  {
    "id": "output-patch",
    "question": "输出 patch 比输入 patch 长有什么好处？",
    "answer": [
      "如果输出 patch 和输入 patch 一样长，预测很长 horizon 就要很多步自回归；把输出 patch 设得更长（论文用 128 对 32），一次就能预测更大一段未来，减少自回归步数。",
      "代价是输出 patch 不能长到无法处理短序列，比如月度、年度数据；论文需要在覆盖范围和推理步数之间折中。"
    ],
    "takeaway": "更长的输出 patch 是长 horizon 预测的加速器。"
  },
  {
    "id": "patch-masking",
    "question": "patch masking 为什么能让模型支持任意 context 长度？",
    "answer": [
      "训练时对每条序列随机采一个 r（0 到 p-1），把第一个 patch 的前 r 个时间点 mask 掉。这样同一个训练样本可以对应从 1 到最大 context 的多种有效长度。",
      "如果不做这种 masking，模型可能只擅长处理 patch 长度的整数倍，遇到短历史或非整齐长度就会退化。"
    ],
    "takeaway": "用一个随机 mask 把变长上下文变成训练分布的一部分。"
  },
  {
    "id": "data",
    "question": "预训练数据从哪里来，为什么一定要合成数据？",
    "answer": [
      "主体是 Google Trends、Wiki Pageviews 等大规模真实时序，加上 M4、Electricity、Traffic、Weather、LibCity 等公开数据集；真实数据约占 80%，合成数据约占 20%。",
      "真实数据集中在小时、日等常见粒度，季度、年度、10 分钟等粒度很稀疏。合成数据覆盖 ARMA、季节、趋势、阶跃等模式，能补足这些欠代表频率。消融显示去掉合成数据后，Monash 和 15 分钟 ETTm 明显变差。"
    ],
    "takeaway": "合成数据不是为了凑量，而是为了补齐真实数据缺失的频率和模式。"
  },
  {
    "id": "zero-shot",
    "question": "零样本效果到底有多好？",
    "answer": [
      "在 Monash 的 18 个数据集上，TimesFM 是平均 scaled MAE 最好的模型，略优于 N-BEATS 但差距在显著性范围内，比零样本 llmtime 好 25% 以上。",
      "在 Darts 上与 ARIMA/llmtime 在显著性范围内；在 ETT 的 8 个任务上是最好或与 PatchTST 相当。注意这些数据集都没有参与预训练。"
    ],
    "takeaway": "零样本接近逐数据集监督训练的 SOTA，但不是所有基准都显著领先。"
  },
  {
    "id": "limitations",
    "question": "TimesFM 的主要局限是什么？",
    "answer": [
      "论文版本只做点预测，没有把概率预测作为主目标；也完全没有用协变量预训练，而真实业务里促销、天气、节假日等协变量往往很关键。",
      "此外，时序基础模型的可解释性弱于 ARIMA/ETS，长尾或分布外输入仍可能预测失败，需要微调或人工兜底。"
    ],
    "takeaway": "它证明了零样本预测可行，但协变量和概率预测要等后续工作。"
  },
  {
    "id": "vs-llm",
    "question": "TimesFM 和 Time-LLM、GPT4TS 的路线有什么不同？",
    "answer": [
      "Time-LLM 和 GPT4TS 都是借预训练语言/通用 Transformer 主干，只训练输入输出接口；TimesFM 则完全从零用时序数据预训练一个 200M 参数模型。",
      "论文的论点是：专门用时序数据训练的模型，能以小得多的规模取得比 llmtime 更好的零样本效果，不必依赖 LLM 的通用能力。"
    ],
    "takeaway": "一条路是借 LLM，一条路是从头训时序基础模型。"
  }
] satisfies PaperFAQ;

export default faq;
