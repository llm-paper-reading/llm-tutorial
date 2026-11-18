import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "CAI 在对齐谱系里的位置？",
    answer: [
      "它是 InstructGPT 的 RLHF 之后第二大范式分支：监督信号从人类偏好换成「原则 + AI 判断」（RLAIF），为 Claude 系列的行为风格奠基。",
      "与站内 [InstructGPT](/papers/instructgpt)、[DPO](/papers/dpo-rafailov) 构成对齐方法的三步演进。"
    ],
    takeaway: "「用 AI 监督 AI」从这篇开始成为严肃的工程选项。"
  },
  {
    id: "constitution",
    question: "「宪法」具体是什么？",
    answer: [
      "一小份自然语言原则（论文实验约 16 条，源自联合国人权宣言等来源改写），涵盖无害性、有益性等维度。",
      "作者强调：任何 AI 系统都隐含某种原则——宪法只是把它写成可审查的文本；改目标只需改这份文本，不用重新标注。"
    ],
    takeaway: "把训练目标外化为一份可版本控制的文档，是对齐透明化的关键一步。"
  },
  {
    id: "two-stage",
    question: "两阶段各自解决什么？",
    answer: [
      "监督阶段：让 helpful 模型回复有害 prompt，再让它按随机抽取的原则自我批评、改写（可多轮），用最终改写做 SFT——快速改变行为分布，减少 RL 阶段的探索需求。",
      "RL 阶段：从 SFT 模型采样成对回复，AI 按原则评判偏好（可带 CoT），训练偏好模型 PM，再以 PM 为奖励做 RL。"
    ],
    takeaway: "先「上分布」再「精修」——两阶段分工与 R1 的冷启动 SFT + RL 同构。"
  },
  {
    id: "evasive",
    question: "「不回避」为什么重要？",
    answer: [
      "RLHF 的无害模型学会敷衍拒绝（因为标注者奖励回避），且一旦拒绝对话就废掉。",
      "CAI 训出的模型会解释拒绝理由、正面回应用户——减少 helpfulness 与 harmlessness 的张力，也使自动化红队测试可扩展。"
    ],
    takeaway: "拒绝的方式与拒绝本身同等重要。"
  },
  {
    id: "cot",
    question: "CoT 在 CAI 里起什么作用？",
    answer: [
      "AI 评判偏好时可先生成一段依据原则的推理再给结论，提升判断质量与透明度（RL-CAI CoT 版本在人类评估中最佳）。",
      "这把 [CoT prompting](/papers/chain-of-thought) 从任务技巧扩展为监督基础设施。"
    ],
    takeaway: "让裁判先想再判，是 RLAIF 质量的重要杠杆。"
  },
  {
    id: "limits",
    question: "读结果要注意什么？",
    answer: [
      "结论在 Anthropic 内部 52B 模型上得出，宪法与 prompt 未随早期版本完全公开（附录给了节选）。",
      "「AI 判断替代人类判断」引入新的偏差面：原则文本本身、AI 对原则的解读都可能出错——论文承认这是 scaling supervision 的风险面。"
    ],
    takeaway: "范式有效不等于具体数字可迁移；原则的质量决定上限。"
  }
];

export default faq;
