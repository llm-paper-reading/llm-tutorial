import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "whats-new",
    "question": "TimesFM-3 相比前代最大的变化是什么？",
    "answer": [
      "TimesFM-2.5 及更早版本只做单变量预测：只用一个序列自己的历史。TimesFM-3 原生支持多变量：可以同时预测多条目标序列，并接收历史协变量和已知未来协变量。",
      "模型规模为 330M 参数，在超过 1 万亿个真实与合成时间点上预训练；博客强调它在多变量零样本场景下不需要任务特定微调。"
    ],
    "takeaway": "从「单序列历史」升级为「多序列 + 协变量」的联合预测。"
  },
  {
    "id": "three-inputs",
    "question": "它支持哪三类输入？",
    "answer": [
      "Multiple targets：同时预测多条相关目标序列，例如同一个品类下不同品牌的销量；支持点预测和分位数预测。",
      "Past covariates：只在历史区间可知的特征，例如过去的门店客流。Past-future covariates：未来也已知的动态特征，例如计划中的促销、已知天气。"
    ],
    "takeaway": "目标、历史协变量、未来已知协变量可以一起进模型。"
  },
  {
    "id": "token",
    "question": "多变量 token 是怎么构造的？",
    "answer": [
      "所有序列都按 32 个时间点一个 patch 切分，并做逐序列归一化。目标序列和历史协变量的 token 直接来自单个 patch。",
      "未来动态协变量使用 lookahead：每个 token 把当前 patch 和未来 patch 拼接起来，让模型在预测时能看到已知的未来信号。"
    ],
    "takeaway": "普通序列看当前 patch，未来协变量额外看后面的 patch。"
  },
  {
    "id": "attention",
    "question": "交替注意力具体在做什么？",
    "answer": [
      "Causal temporal attention 在时间轴上水平注意：token 只能看自己这条序列的过去，严格因果，防止未来信息泄漏。",
      "Full variate attention 在变量轴上垂直注意：同一时间步的 token 可以看到所有其他序列，学习跨序列相关。两种注意力交替堆叠，把时间模式和变量关系混在一起。"
    ],
    "takeaway": "时间轴因果、变量轴全连接，交替建模。"
  },
  {
    "id": "decode",
    "question": "为什么能单次前向生成整个 horizon？",
    "answer": [
      "TimesFM-3 使用 Contiguous Patch Masking：在观测上下文后面接上被 mask 的 horizon token；目标序列和历史协变量在 horizon 上被遮住，未来动态协变量保持可见。",
      "交替注意力一次把所有被遮住的 horizon patch 填完，不需要逐 patch 自回归。每个目标序列每个 horizon step 输出 9 个分位数（10% 到 90%），给出概率预测。"
    ],
    "takeaway": "用 mask 填坑代替逐步生成，降低延迟与误差累积。"
  },
  {
    "id": "benchmarks",
    "question": "评测结果有多强？",
    "answer": [
      "博客在 Gift-Eval、FEV-Bench、Time 三个公开基准上比较平均排名（越低越好），TimesFM-3 在点预测和概率预测两项上都取得预训练基础模型中的最佳平均排名。",
      "即使只开单变量模式（不看协变量、不跨序列），它也已经匹配或超过其他可比基础模型；开多变量模式后又进一步提升。博客只给平均排名，没有逐任务分数。"
    ],
    "takeaway": "多变量模式是增益项，不是必需项；单变量模式本身已很强。"
  },
  {
    "id": "availability",
    "question": "模型怎么用？",
    "answer": [
      "博客称 TimesFM-3 已在 GitHub（google-research/timesfm）和 Hugging Face（google/timesfm-3.0-pytorch）开放，并集成进 BigQuery。",
      "BigQuery 用户可以直接用 AI.FORECAST 命令做多变量或单变量预测，不需要自己搭 ML 管线。"
    ],
    "takeaway": "开源权重 + 云平台命令两种入口。"
  },
  {
    "id": "limits",
    "question": "这篇博客没有回答什么？",
    "answer": [
      "博客是产品/方法概览，没有给出预训练数据配比、模型层数/隐藏维度、训练算力、逐任务 benchmark 数字，也没有详细讨论失败模式。",
      "它也没有展开许可证、商业使用限制和不同领域的可靠性边界；真正落地前需要看模型卡、GitHub 文档和自己数据上的验证。"
    ],
    "takeaway": "博客适合理解架构与能力边界，不适合当作完整技术报告。"
  }
] satisfies PaperFAQ;

export default faq;
