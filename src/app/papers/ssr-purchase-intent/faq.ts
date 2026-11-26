import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "为什么让 LLM 直接打 1–5 分不可靠？",
    "answer": [
      "直接要 Likert 分数时，模型会向中间值回归，绝大多数回答集中在 3 分，很少给 1 或 5；而真实消费者的购买意愿通常集中在 4 和 5。",
      "结果就是相关性能看、分布完全不像人类：GPT-4o 的 KS 相似度只有约 0.26，Gemini-2.0-flash 约 0.39。"
    ],
    "takeaway": "问题不在 LLM 不会预测，而在“直接要数字”这种 elicitation 方式。"
  },
  {
    "id": "ssr",
    "question": "Semantic Similarity Rating（SSR）具体怎么做？",
    "answer": [
      "先让 LLM 用一两句话描述自己的购买意愿，比如“我有点兴趣，如果效果好又不贵，我会试试”；再用 text-embedding-3-small 把这段话编码成向量。",
      "同时准备五条锚点语句，分别对应 Likert 1–5；计算回答与每条锚点的余弦相似度，归一化成五个概率，就得到一个响应分布。主实验会对六套锚点取平均。"
    ],
    "takeaway": "把“打分”换成“说一句话，再看它离五个锚点各有多近”。"
  },
  {
    "id": "metrics",
    "question": "论文怎么衡量“像不像真人”？",
    "answer": [
      "分布相似度用 KS similarity：1 减去合成分布与真实分布的 Kolmogorov–Smirnov 距离，保留量表的序数信息。",
      "产品排序用 correlation attainment：先估计人类数据自身的 test–retest 相关上限（同一调查拆成两半，重复 2000 次），再看合成均值与真实均值的相关达到这个上限的百分之多少。"
    ],
    "takeaway": "既看分布形状，也看产品相对排序，后者用人类噪声上限归一化。"
  },
  {
    "id": "results",
    "question": "三种 elicitation 方式的结果差多少？",
    "answer": [
      "DLR（直接打分）：GPT-4o 的 ρ≈82%、KS≈0.26；FLR（自由文本 + LLM 专家打分）：ρ≈85%、KS≈0.72；SSR：ρ≈90%、KS≈0.88。",
      "Gemini-2.0-flash 上 SSR 的 KS 约 0.80；论文摘要里的“KS > 0.85”主要对应 GPT-4o。两者都远好于直接打分。"
    ],
    "takeaway": "SSR 同时改善分布和排序，FLR 改善分布但排序略弱。"
  },
  {
    "id": "demographics",
    "question": "人口统计条件真的有用吗？",
    "answer": [
      "有用，但主要体现在产品排序而不是分布形状。论文做了一个去掉所有人口统计特征的实验：分布反而更接近真实（KS≈0.91，均值 4.0±0.1），但 correlation attainment 只有约 50%，而带人口统计的 Gem-2f SSR 可达约 92%。",
      "也就是说，不给人设时模型会整体偏正面、缺少区分度；人设让它能区分不同产品，但也带来分布上的偏差。"
    ],
    "takeaway": "人设不是为了让分布更像，而是为了恢复产品之间的相对差异。"
  },
  {
    "id": "patterns",
    "question": "合成消费者复现了哪些人群/产品模式？",
    "answer": [
      "年龄呈中间高、两端低的凹形；收入水平 1–4（有预算压力）购买意愿低，5 和 Null 更高；Concept Category IV 最高、I 最低；Source B 的产品被压低；价格 Tier 3/4 高于 Tier 1。",
      "性别和居住区域复现得不好，但这两个特征本身对真实购买意愿的影响也不大。"
    ],
    "takeaway": "年龄、收入、品类、来源、价格段复现较好；性别/地区还不稳定。"
  },
  {
    "id": "baselines",
    "question": "和传统模型、其他问题相比呢？",
    "answer": [
      "在 57 个调查上，用一半数据训练 LightGBM、预测另一半，correlation attainment 只有约 65%、KS≈0.80；零样本 SSR 在同一比较中约 88%、KS≈0.88，说明不需要训练数据的 LLM elicitation 反而更强。",
      "把问题换成“这个概念与你有多相关”时，SSR 仍达到 ρ≈82%、KS≈0.81，说明方法不限于购买意愿。"
    ],
    "takeaway": "SSR 的优势不是靠拟合调查数据，而是零样本的语义映射。"
  },
  {
    "id": "limits",
    "question": "主要局限是什么？",
    "answer": [
      "锚点语句是为这 57 个调查手工优化的，换到其他问卷/领域是否有效还不确定；嵌入模型和相似度度量的选择也会影响结果。",
      "人口统计只部分复现，且方法依赖 LLM 训练语料里对该领域的覆盖；它也不能替代真实购买行为、预算约束和文化语境。"
    ],
    "takeaway": "SSR 是低成本的筛选工具，不是人类调研的全面替代。"
  }
] satisfies PaperFAQ;

export default faq;
