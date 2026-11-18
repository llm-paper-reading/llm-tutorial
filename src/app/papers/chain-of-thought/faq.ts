import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "为什么说 CoT 是「一句 prompt 改变一个领域」？",
    answer: [
      "方法本身只是把 few-shot 示例的答案从「The answer is 11」改成先写推理过程再给答案——零参数更新、零架构改动。",
      "但它确立了「推理发生在 token 流里」的范式：R1 的 RL 涌现、Qwen3 的 thinking 模式、o1 的 test-time compute 全部基于这个前提。"
    ],
    takeaway: "最重要的工作往往最简单——先确认能力在 prompt 层就能解锁。"
  },
  {
    id: "results",
    question: "核心数字有哪些？",
    answer: [
      "GSM8K 上 PaLM 540B + CoT 达 56.9%（8 个手写示例），超过微调 GPT-3 175B + verifier 的 55%，是当时 SOTA。",
      "标准提示下 PaLM 540B 只有 18%；GPT-3 175B 与 LaMDA 137B 加 CoT 也翻倍量级提升。"
    ],
    takeaway: "三个大模型（GPT-3/LaMDA/PaLM）上都验证了，不是单模型玄学。"
  },
  {
    id: "emergent",
    question: "「涌现能力」在这里指什么？",
    answer: [
      "CoT 只对约 100B 参数以上的模型有正收益；小模型生成流畅但不合逻辑的推理链，分数反而低于标准提示。",
      "这为「涌现能力随规模出现」提供了最早的清晰实例之一——能力不是渐变的，是阈值跳变。"
    ],
    takeaway: "读大模型评测时要看规模分解，平均值会掩盖跳变。"
  },
  {
    id: "robustness",
    question: "CoT 提示稳健吗？",
    answer: [
      "论文做了消融：换不同示例集、不同注释者写推理链，结果稳定；示例未做 prompt 工程。",
      "「问题难度」比「示例措辞」影响大：GSM8K（最难）翻倍，单步子集（SingleOp）收益近零甚至为负。"
    ],
    takeaway: "CoT 是难任务专属的杠杆——简单任务别硬加推理链。"
  },
  {
    id: "why-works",
    question: "论文怎么解释 CoT 为什么有效？",
    answer: [
      "机制论证有三：把问题分解为中间步骤允许更多计算、推理链让模型利用领域知识表达、逐 token 生成给每步推理留采样空间。",
      "诚实的部分：这是动机性解释而非证明；50 个正确答案的人工检查发现 46 个推理链也正确（92% 一致性）。"
    ],
    takeaway: "「答案对 = 推理对」在 2022 年大体成立，R1 时代 reward hacking 让这个假设变复杂。"
  },
  {
    id: "limits",
    question: "与后续推理模型的差距在哪？",
    answer: [
      "CoT prompting 只是解锁基座已有能力：GSM8K 56.9% vs R1 的 80%+——RL 训练的推理是「学会推理」，prompt 是「请求推理」。",
      "8 个示例是人工写的；自动生成推理链（STaR 等）与 RFT 把这一环也自动化了。"
    ],
    takeaway: "从 prompt 到 SFT 到 RL：推理能力的三个台阶，CoT 是第一阶。"
  }
];

export default faq;
