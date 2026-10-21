import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "Qwen2 在系列里的位置是什么？",
    answer: [
      "它是架构换代的一代：GQA、细粒度 MoE、DCA+YARN 长上下文、DPO 对齐都在这里定型。",
      "Qwen2.5 基本沿用 Qwen2 架构只改数据，Qwen3 的 MoE 思路也直接继承自 Qwen2-57B-A14B。"
    ],
    takeaway: "看懂 Qwen2 的架构选择，后面两代报告的架构部分基本不用重读。"
  },
  {
    id: "gqa",
    question: "GQA 解决了什么问题？",
    answer: [
      "多头注意力（MHA）每个头都存一份 KV cache，长上下文推理内存爆炸。",
      "GQA 让多个 query 头共享 KV 头：Qwen2-72B 用 64 query 头配 8 KV 头，KV cache 缩到 1/8。"
    ],
    takeaway: "Qwen2 各尺寸的 KV 每 token 开销显著低于 Qwen1.5，这是推理成本的第一刀。"
  },
  {
    id: "moe",
    question: "Qwen2 的 MoE「细粒度」细在哪？",
    answer: [
      "传统做法（如 Mixtral 8x7B）是 8 个大专家激活 2 个；Qwen2 用 64 个小专家激活 8 个外加共享专家。",
      "总参数与激活参数相同时，细粒度专家的组合数更多，路由更灵活。"
    ],
    takeaway: "「多而小」胜过「少而大」，这个粒度选择被 Qwen3-235B-A22B 直接继承。"
  },
  {
    id: "upcycling",
    question: "upcycling 初始化为什么要随机重置 50% 参数？",
    answer: [
      "专家从 dense 模型 FFN 复制而来，直接复制会让专家高度雷同。",
      "Qwen2 沿中间维打乱参数并随机重置每个专家一半参数，人为制造多样性，给训练期探索留空间。"
    ],
    takeaway: "MoE 冷启动的多样性是设计出来的，不是训出来的。"
  },
  {
    id: "data",
    question: "7T 到 12T 的取舍说明了什么？",
    answer: [
      "Qwen2 放宽质量阈值做了 12T 数据集，但 12T 模型没有比 7T 明显更强。",
      "团队最终选 7T 高质量集训练大模型，只在 0.5B 小模型上用了 12T。"
    ],
    takeaway: "数据规模有边际递减，质量阈值放松换不来等比例收益。"
  },
  {
    id: "dpo",
    question: "为什么从 PPO 切到 DPO？",
    answer: [
      "PPO 要同时跑 policy、value、reference、reward 四个模型，工程与算力负担重。",
      "Qwen2 用离线 DPO 处理预编译偏好集，再加在线阶段：采样多响应、奖励模型选出最好最差成对做 DPO，并用 Online Merging Optimizer 缓解对齐税。"
    ],
    takeaway: "「DPO 为主 + 在线采样构造偏好对」成为 Qwen 系列此后两代的默认骨架。"
  },
  {
    id: "limits",
    question: "读 Qwen2 结果表要注意什么？",
    answer: [
      "对比基线是 2024 年的 Llama-3、Mixtral-8x22B、Qwen1.5，数字不能与今日模型横比。",
      "128K 长上下文的验证主要靠大海捞针与困惑度，真正的长文档任务评估要到 Qwen2.5 的 RULER / LV-Eval 才补齐。"
    ],
    takeaway: "Qwen2 证明了长度可以推到 128K，Qwen2.5 才证明了它好用。"
  }
];

export default faq;
