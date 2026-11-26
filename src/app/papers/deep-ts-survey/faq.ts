import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "why-survey",
    "question": "这篇综述和普通的时间序列 survey 有什么不同？",
    "answer": [
      "它不只按任务或单一架构罗列论文，而是把深度时序模型拆成“基本模块 + 模型架构”两层：stationarization、decomposition、Fourier 这些模块，以及 MLP/RNN/CNN/GNN/Transformer 五类骨干。",
      "更重要的是配套了 TSLib：同一套数据处理、训练配置和评测协议下重跑 41 个模型、30 个数据集、5 类任务，避免不同论文各用各的 lookback 和超参。"
    ],
    "takeaway": "这是一篇“带可复现基准”的综述，不只是文献列表。"
  },
  {
    "id": "tslib",
    "question": "TSLib 具体提供什么？",
    "answer": [
      "TSLib 实现了 41 个主流深度时序模型，覆盖长/短期预测、插补、分类、异常检测五类任务，支持 30 个来自能源、交通、天气、医疗等领域的数据集。",
      "它把模型拆成可复用的基本模块和任务头，用户可以用统一接口切换数据、模型和任务；论文用 TSLib 评测了 16 个深度模型和 6 个时序基础模型。"
    ],
    "takeaway": "TSLib 的价值是统一协议，让不同架构的差异可比较。"
  },
  {
    "id": "architectures",
    "question": "五类架构各自强在哪里？",
    "answer": [
      "Transformer 整体最强，尤其长程预测；MLP 简单高效，适合资源受限的预测场景；CNN 在非预测任务上更全面；GNN 擅长建模变量间的图结构相关；RNN 在短期任务上仍可用，但长程能力有限。",
      "论文的结论不是“Transformer 通吃”，而是不同结构在特定任务上有明显优势，选型要看任务和资源，而不是只看平均分。"
    ],
    "takeaway": "没有万能架构，只有任务匹配。"
  },
  {
    "id": "transformer-tokenization",
    "question": "Transformer 类时序模型的 tokenization 有哪几种？",
    "answer": [
      "论文按注意力的表示粒度分为 point-wise、patch-wise 和 series-wise 三类。",
      "point-wise 把每个时间点当 token，代表是 Informer、Autoformer；patch-wise 把一段连续时间点打包成 token，代表是 PatchTST、Crossformer；series-wise 把整条变量序列当 token，代表是 iTransformer。粒度不同，计算复杂度和能捕捉的依赖类型也不同。"
    ],
    "takeaway": "时序 Transformer 的关键设计往往在 tokenization，而不只是注意力公式。"
  },
  {
    "id": "tsfm",
    "question": "时序基础模型（TSFM）分哪两类？",
    "answer": [
      "一类是时序原生模型，从零在时序数据上预训练，例如 MOMENT、Moirai、TimesFM、Chronos；另一类是借用 LLM 的模型，把时序 tokenize 或重编程后送进语言模型，例如 GPT4TS、Time-LLM。",
      "原生模型更贴近数值预测，规模和推理成本更可控；LLM 派模型擅长利用语义先验和跨模态上下文，但推理成本更高，时序与文本的模态鸿沟也更难处理。"
    ],
    "takeaway": "一条路是时序专用预训练，一条路是借 LLM 的通用能力。"
  },
  {
    "id": "zeroshot-length",
    "question": "零样本 TSFM 的输入长度越长越好吗？",
    "answer": [
      "总体趋势是增加输入长度会改善零样本性能，说明 TSFM 能利用长上下文。",
      "但不是越长越好：论文发现 Sundial 在 2880 输入长度下的表现可以超过其他模型在 8192 下的表现，过长的输入可能引入无关信息或噪声，掩盖有意义的时序模式。"
    ],
    "takeaway": "最佳 lookback 取决于模型容量和数据可预测性，不是固定越大越好。"
  },
  {
    "id": "efficiency",
    "question": "效率和鲁棒性方面有什么结论？",
    "answer": [
      "tokenization 影响效率：point-wise 的 Autoformer 比 patch-wise 的 PatchTST、series-wise 的 iTransformer 慢；CNN 类模型（SCINet、TimesNet）通常最耗时；MLP 和 Mamba 最轻量。",
      "鲁棒性方面，给输入加随机白噪声后，多数模型只有轻微性能下降，说明这些架构在真实噪声下有一定稳定性。"
    ],
    "takeaway": "精度不是唯一指标，tokenization 和骨干选择直接决定训练/推理成本。"
  },
  {
    "id": "how-to-use",
    "question": "实际选型时应该怎么用这份基准？",
    "answer": [
      "先按任务缩小范围：长程预测优先看 iTransformer/PatchTST 一类 Transformer；资源受限时看 DLinear 等 MLP；非预测任务可以看 TimesNet 等 CNN；变量间有明确图结构时看 GNN。",
      "然后用 TSLib 在自己的数据上复现一两个候选，重点对齐 lookback、horizon、归一化和评测指标，不要直接拿论文里的平均分做跨数据集排名。"
    ],
    "takeaway": "把基准当筛子，而不是排行榜。"
  }
] satisfies PaperFAQ;

export default faq;
