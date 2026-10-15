import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "GRPO 为什么想去掉 critic？",
    "answer": [
      "传统 PPO 需要训练 value / critic 来估计基线，但在大模型 RLVR 场景里，critic 训练成本高、稳定性也不一定好。GRPO 用同一题的一组回答来估计相对优势，避免单独训练 critic。",
      "这种设计更适合可验证奖励任务：同一个 prompt 采样多条答案，用组内奖励的均值和标准差做归一化，判断哪条回答相对更好。"
    ],
    "takeaway": "GRPO 用组内相对表现替代 critic 基线。"
  },
  {
    "id": "group-advantage",
    "question": "“组相对优势”直觉是什么？",
    "answer": [
      "对同一道题生成多条回答，如果其中一条比组内平均奖励更高，它的 token 就获得正优势；低于组内平均则获得负优势。",
      "这让模型不需要知道全局价值函数，只需要在同一题的多个尝试之间比较好坏。"
    ],
    "takeaway": "GRPO 把“绝对值估计”变成了“同题多解相对比较”。"
  },
  {
    "id": "rlvr",
    "question": "RLVR 在 DeepSeek-R1 中为什么重要？",
    "answer": [
      "RLVR 的关键是奖励可验证，例如数学题最终答案、代码测试是否通过等。这样奖励不用完全依赖主观模型打分，可以更直接地推动推理能力。",
      "R1-Zero 展示了纯 RLVR 能激发长思考和自我修正，但也会带来可读性和格式问题，因此 R1 又加入冷启动 SFT 与多阶段训练。"
    ],
    "takeaway": "可验证奖励让推理 RL 更可靠，但还需要数据和格式工程配合。"
  },
  {
    "id": "zero-vs-r1",
    "question": "R1-Zero 和 R1 的差别是什么？",
    "answer": [
      "R1-Zero 更强调从 base model 直接用 RL 激发推理能力，是观察 emergent reasoning 的实验；R1 则是面向可用模型的完整训练流程。",
      "R1 加入冷启动数据、可读性约束、更多任务与蒸馏，让模型不仅会推理，也更适合真实使用。"
    ],
    "takeaway": "R1-Zero 是机制展示，R1 是产品化训练路线。"
  },
  {
    "id": "distillation",
    "question": "R1 蒸馏模型应该怎么看？",
    "answer": [
      "R1 的蒸馏模型把强推理轨迹迁移到更小模型上，说明推理行为可以通过数据和蒸馏显著下放。",
      "但蒸馏模型继承的是老师已探索出的行为，不等于小模型自己通过 RL 发现了同样策略。评估时要区分 base、Zero、R1 与 distilled variants。"
    ],
    "takeaway": "蒸馏结果强，不代表探索成本消失了。"
  },
  {
    "id": "format-reward",
    "question": "为什么 R1 训练里格式和可读性也重要？",
    "answer": [
      "纯 RLVR 可能让模型学会得到正确答案，却产生难读、混乱或不符合交互格式的推理过程。",
      "冷启动和格式约束可以让推理既有能力，也适合人类和下游系统使用。"
    ],
    "takeaway": "推理模型不能只对，还要可读、可控。"
  },
  {
    "id": "kl-control",
    "question": "GRPO 还需要 KL 或约束吗？",
    "answer": [
      "即便没有 critic，策略更新仍可能过度偏离初始模型或参考模型，因此很多实现会保留 KL 惩罚或相关约束。",
      "这些约束用于防止模型为了奖励牺牲语言质量、格式或通用能力。"
    ],
    "takeaway": "去掉 critic 不等于去掉所有稳定化手段。"
  },
  {
    "id": "distilled-size",
    "question": "为什么 R1 蒸馏到小模型后也很强？",
    "answer": [
      "小模型不需要重新通过 RL 探索全部推理策略，只要学习强老师已经生成的高质量推理轨迹。",
      "这说明一部分推理能力可以通过数据迁移，但蒸馏上限仍受学生容量和数据覆盖限制。"
    ],
    "takeaway": "蒸馏能复制轨迹，但受学生容量限制。"
  }
] satisfies PaperFAQ;

export default faq;
