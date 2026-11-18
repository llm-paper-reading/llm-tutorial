import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "frozen-why",
    "question": "LLM 参数一个都不改，凭什么能做时序预测？",
    "answer": [
      "Time-LLM 不改 LLM 的内部计算，而是把时序 patch 重编程成文本原型空间里的向量，再拼上一段自然语言前缀，让冻结的 LLM 在它熟悉的表示空间里做转换。",
      "需要训练的只有 patch 嵌入、文本原型线性探测、重编程交叉注意力与输出投影，合计不到 660 万参数；LLM 本身只提供通用的序列变换能力。"
    ],
    "takeaway": "冻结的是语言能力，学习的是「时序怎么进入语言空间」。"
  },
  {
    "id": "prototypes",
    "question": "文本原型（text prototypes）是什么？为什么不直接用整个词表？",
    "answer": [
      "文本原型是从预训练词嵌入里线性探测出的一小套向量，长程任务默认 1000 个、短期任务 100 个。",
      "完整词表有几万个 token，绝大部分与时序无关，直接做映射既浪费容量也难对齐；少量原型可以把每个 patch 表示成「short up」「steady down」这类可解释的语言线索组合。"
    ],
    "takeaway": "原型是压缩过的「时序语汇」，不是完整的自然语言词表。"
  },
  {
    "id": "pap",
    "question": "Prompt-as-Prefix 和让 LLM 直接输出数字有什么区别？",
    "answer": [
      "让 LLM 直接生成数字（Patch-as-Prefix）会把预测变成文本生成：模型对高精度数字不敏感，长区间容易失准，而且不同 LLM 的分词方式不同，同一个 0.61 可能被切成不同 token，需要额外后处理。",
      "Prompt-as-Prefix 只让 LLM 转换 patch 的表示，最后由一个线性投影输出数值，避开了数字分词与精度问题。"
    ],
    "takeaway": "PaP 把 LLM 当表示转换器，而不是数字生成器。"
  },
  {
    "id": "vs-gpt4ts",
    "question": "它和 One Fits All（GPT4TS）有什么不同？",
    "answer": [
      "GPT4TS 冻结的是 Transformer 块内的自注意力与 FFN，但位置嵌入与 LayerNorm 仍要训练，时序直接作为连续输入进入模型。",
      "Time-LLM 把 LLM 与词嵌入全部冻结，先把时序重编程到文本原型空间，再加入自然语言 Prompt；两者都在避免微调大模型，但 Time-LLM 多了显式的模态对齐。"
    ],
    "takeaway": "GPT4TS 改接口，Time-LLM 改表示空间。"
  },
  {
    "id": "sota",
    "question": "它是不是全面超过 PatchTST / TimesNet？成本高吗？",
    "answer": [
      "长程预测在 8 个数据集中 7 个第一，但相对 PatchTST 的平均 MSE 只低 1.4%；优势主要在少样本与零样本，分别比 PatchTST / TimesNet 低 8%–33%。",
      "可训练参数不到 0.2%，但端到端成本由 7B 主干决定：论文测得 ETTh1-96 需要约 3404M 参数、32GB 显存、0.517 秒/步；8 层版本约 976M、11GB、0.184 秒/步。"
    ],
    "takeaway": "省的是适配成本，不是推理成本。"
  },
  {
    "id": "backbone",
    "question": "可以换成别的 LLM 或处理多变量耦合吗？",
    "answer": [
      "论文默认 Llama-7B，也测了 8 层 Llama 与 GPT-2，结果显示主干越大效果越好；换模型时要重新对齐隐藏维度与分词器。",
      "方法按通道独立处理，每个变量单独预测，变量之间的显式相关性没有建模；多变量强耦合场景需要额外的通道交互设计。"
    ],
    "takeaway": "主干可换但要对齐接口，多变量相关性仍是开放问题。"
  }
] satisfies PaperFAQ;

export default faq;
