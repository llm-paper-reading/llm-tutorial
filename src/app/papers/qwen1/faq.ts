import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "为什么 2026 年还要读 Qwen1 的报告？",
    answer: [
      "它是整个 Qwen 系列的起点：tokenizer、ChatML 格式、SFT+RLHF 流水线在 Qwen2/2.5/3 里一脉相承。",
      "报告把数据清洗、词表设计、对齐细节写得比后续版本更细，适合理解这条技术路线的原始取舍。"
    ],
    takeaway: "读 Qwen1 是理解 Qwen 系列为什么这样演化的最短路径。"
  },
  {
    id: "tokenizer",
    question: "152K 词表多出来的 token 花在哪了？",
    answer: [
      "Qwen1 以 tiktoken 的 cl100k 为起点，扩充中文字词与其他语言词条，数字拆成单个数字。",
      "报告用压缩率实验说明：同等信息量下 Qwen tokenizer 产生的 token 更少，直接降低中文场景的服务成本。"
    ],
    takeaway: "中文能力的第一笔投资在 tokenizer，不在参数量。"
  },
  {
    id: "context",
    question: "Qwen1 怎么把 2K 上下文拉到 8K 以上？",
    answer: [
      "训练仍是 2048 上下文；推理时用免训练技巧：NTK-aware 插值、LogN-Scaling、分层窗口注意力。",
      "报告 Table 3 显示组合使用后 8192/16384 长度上困惑度几乎不崩。"
    ],
    takeaway: "训练不改、推理扩展，是当时小团队最务实的长上下文方案。"
  },
  {
    id: "alignment",
    question: "Qwen1 的 RLHF 和后来流行的方法有何不同？",
    answer: [
      "它用的是经典 PPO：奖励模型先做偏好模型预训练（PMP）再精调，策略训练带 KL 惩罚与预训练梯度。",
      "Qwen2 起转向 DPO 为主，Qwen2.5 引入 GRPO 在线 RL——对比着读能看到对齐范式的迁移。"
    ],
    takeaway: "Qwen1 是这条家族里最后一个 PPO 时代的完整记录。"
  },
  {
    id: "specialists",
    question: "Code-Qwen 和 Math-Qwen 是怎么来的？",
    answer: [
      "都以 Qwen base 为起点：Code-Qwen 在约 90B 代码 token 上继续预训练（8K 上下文）再做代码 SFT；Math-Qwen 直接在增强数学指令集上 SFT。",
      "Code-Qwen-14B-Chat 在 HumanEval 达 66.4 pass@1，超过同参数级对手。"
    ],
    takeaway: "先通用再专业化的「基座续训」模式从这里定型。"
  },
  {
    id: "agent",
    question: "报告里的 agent 能力评估说明了什么？",
    answer: [
      "Qwen1 用 self-instruct 迭代造了约 2000 条 ReAct 格式样本混入 SFT，就在工具选择、代码解释器、Hugging Face Agent 三类评测上拿到接近 GPT-4 的成绩。",
      "这说明 agent 能力可以通过少量格式正确的数据注入，而不必重训。"
    ],
    takeaway: "格式即能力：ReAct 数据的注入门槛比想象中低。"
  },
  {
    id: "limits",
    question: "读 Qwen1 结果表要注意什么？",
    answer: [
      "对比基线停在 2023 年的 Llama2 / Baichuan2 / GPT-3.5 时代，分数不能与今日模型横比。",
      "长上下文是推理期技巧换来的，与 Qwen2 起的原生长上下文训练不是一回事。"
    ],
    takeaway: "把它当历史坐标读，而不是当排行榜读。"
  }
];

export default faq;
