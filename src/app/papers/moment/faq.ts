import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "difference",
    "question": "MOMENT 和其他时序基础模型有什么不同？",
    "answer": [
      "MOMENT 是一个 encoder-only 的掩码重建模型，不是自回归预测器；它先学会重建被遮住的 patch，再把同一个编码器接到不同任务头上。",
      "它同时强调“开源”：模型权重、Time Series Pile 数据和评测代码都公开，并且重点评测 zero-shot 与 linear probing 这类有限监督场景。"
    ],
    "takeaway": "MOMENT 的核心是通用表示，而不是某个任务的专用预测头。"
  },
  {
    "id": "pile",
    "question": "Time Series Pile 是怎么拼出来的？",
    "answer": [
      "论文把四个常用的公开时序库合并：Informer 的 9 个长程预测数据集、Monash 的 58 个短期预测数据集（超过 10 万条序列）、UCR/UEA 的 159 个分类数据集，以及 TSB-UAD 的 1980 条异常检测序列。",
      "为了避免数据泄漏，每个数据集都按创建者提供的划分切分；没有划分时按 60%/10%/30% 随机切分。预训练只使用训练 split。"
    ],
    "takeaway": "先把分散的公开数据拼成统一语料，才有多数据集预训练的可能。"
  },
  {
    "id": "masked-pretraining",
    "question": "掩码重建预训练具体怎么做？",
    "answer": [
      "输入是固定长度 512 的单变量序列，切成 64 个长度 8 的 patch；随机遮住 30% 的 patch，用可学习的 [MASK] embedding 替换，再让 Transformer 编码器和轻量重建头还原被遮住的部分。",
      "损失只算被遮住 patch 的 MSE。这样预测和插补都可以看成“补全被遮住的部分”，同一个预训练目标能自然迁移到多个任务。"
    ],
    "takeaway": "重建任务把预测、插补、异常检测统一成“从上下文补全缺失”。"
  },
  {
    "id": "usage",
    "question": "MOMENT 有哪几种使用方式？",
    "answer": [
      "zero-shot：保留重建头，直接做插补、异常检测等任务；linear probing：冻结编码器，只训练任务头；full fine-tuning：端到端微调。",
      "预测任务会把重建头换成 forecasting head，把 64 个 patch embedding 展平后线性投影到目标 horizon；分类任务则用编码器表示训练 SVM。"
    ],
    "takeaway": "同一个编码器，配不同任务头和冻结策略。"
  },
  {
    "id": "results",
    "question": "五个任务的实验结果如何？",
    "answer": [
      "长程预测的 linear probing 接近 SOTA，通常仅次于 PatchTST；零样本短期预测混合，统计方法（Theta/ETS）整体更强，但 MOMENT 在部分数据集上优于 ARIMA。",
      "分类上，SVM 用 MOMENT 表示可以超过除 4 个专用模型外的所有方法；异常检测上优于 TimesNet/GPT4TS；插补上 linear probing 在 ETT 上最好，zero-shot 也优于除线性插值外的大多数统计方法。"
    ],
    "takeaway": "表示质量在分类/异常/插补上很强，零样本短期预测仍是短板。"
  },
  {
    "id": "scaling",
    "question": "模型规模和初始化有什么发现？",
    "answer": [
      "论文训练了 40M、125M、385M 三个规模；更大的模型训练损失更低，呈现类似 LLM 的 scaling 趋势。",
      "另一个反直觉发现是：随机初始化从头预训练，比用 Flan-T5 语言模型权重初始化得到更低的训练损失；这支持“时序数据量足够，可以从头训”的判断。"
    ],
    "takeaway": "时序基础模型不必依赖语言模型初始化。"
  },
  {
    "id": "interpretability",
    "question": "MOMENT 学到了什么，又学不到什么？",
    "answer": [
      "在合成正弦波上，MOMENT 的表示能区分 trend、amplitude、frequency 和 phase；在 UCR 分类数据上，不微调也能看到按类别分开的表示。",
      "但它无法区分整体上下平移的序列，因为输入先做了 instance normalization；此外，固定 512 长度和单变量输入也限制了它对超长、多变量强相关场景的建模。"
    ],
    "takeaway": "归一化带来跨分布泛化，也抹掉了绝对水平和部分幅度信息。"
  },
  {
    "id": "cross-modal",
    "question": "跨模态迁移的结论是什么？",
    "answer": [
      "论文冻结 MOMENT 的自注意力和 FFN，只训练轻量头，在 MNIST、CIFAR-10、IMDb 等序列分类任务上测试。",
      "结果与同规模的 GPT-2、Flan-T5 相当，说明在时序上预训练的 Transformer 也能学到可迁移的序列建模能力。"
    ],
    "takeaway": "时序预训练不只服务时序，也能学到通用的序列表示。"
  }
] satisfies PaperFAQ;

export default faq;
