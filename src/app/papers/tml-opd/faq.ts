import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "Thinking Machines 这篇 OPD 博客想解决什么问题？",
    "answer": [
      "它关注小模型专家化的后训练成本：RL 是 on-policy 但奖励稀疏，SFT / 离线蒸馏有密集监督但状态分布不匹配。",
      "OPD 试图把两者结合起来：学生自己 rollout，老师逐 token 打分，得到既 on-policy 又密集的训练信号。"
    ],
    "takeaway": "OPD 把学生状态和老师密集反馈合在一起。"
  },
  {
    "id": "advantage",
    "question": "reverse KL 为什么可以变成 advantage？",
    "answer": [
      "学生采样一个 token 后，可以比较学生给这个 token 的 logprob 和老师给同一 token 的 logprob。老师相对更认可的 token 得到正信号，老师不认可的 token 得到负信号。",
      "这就把 sampled-token reverse KL 转换成了逐 token advantage，可以复用 RL 风格的 rollout 和 policy update 基础设施。"
    ],
    "takeaway": "老师 logprob 与学生 logprob 的差，提供了局部纠偏信号。"
  },
  {
    "id": "cost",
    "question": "为什么 OPD 看起来比继续 SFT 或 RL 便宜？",
    "answer": [
      "继续 SFT 需要大量老师标准答案，RL 需要稀疏奖励下的探索；OPD 则让学生生成多条轨迹，老师只做 logprob scoring，把每个 token 都变成监督信号。",
      "博客中的数学实验显示，在已有 SFT checkpoint 上继续 OPD，可以用更少 prompts / steps 达到目标能力。"
    ],
    "takeaway": "OPD 省在更高效利用老师信号和学生轨迹。"
  },
  {
    "id": "single-prompt",
    "question": "为什么一个 prompt 也能学到东西？",
    "answer": [
      "即便 prompt 只有一个，学生的多次 rollout 会产生大量不同前缀状态。老师不是只给最终答案，而是在这些不同轨迹上给 token-level 偏好。",
      "因此 OPD 的监督状态数量不等于 prompt 数量；同一 prompt 也能展开出丰富的学生错误和局部决策。"
    ],
    "takeaway": "OPD 学的是轨迹上的局部决策，不只是记 prompt 的答案。"
  },
  {
    "id": "limits",
    "question": "OPD 省掉了什么，又没有省掉什么？",
    "answer": [
      "OPD 可以省掉一部分重新探索和稀疏奖励信用分配的成本，但它仍然需要一个足够强、足够适配任务的 teacher。",
      "如果目标能力老师自己没有，或者老师和学生的行为模式差太远，OPD 也不能凭空创造能力。"
    ],
    "takeaway": "OPD 省的是复制强策略的成本，不是发明强策略的成本。"
  },
  {
    "id": "teacher-scoring",
    "question": "teacher scoring 为什么比 teacher sampling 可能更便宜？",
    "answer": [
      "sampling 需要老师自回归生成完整答案，序列越长越贵；scoring 只是在学生给定轨迹上计算 logprob，通常更容易并行。",
      "OPD 利用这一点，把老师从生成者变成评审者。"
    ],
    "takeaway": "老师只评分，往往比老师重新写答案更省。"
  },
  {
    "id": "personalization",
    "question": "个性化实验想说明什么？",
    "answer": [
      "内部知识中训练可能提升领域问答，但会损伤原有指令遵循能力。OPD 可以把旧模型的行为偏好蒸回新模型。",
      "这说明 OPD 不只用于数学推理，也可用于 continual learning 后的行为恢复。"
    ],
    "takeaway": "OPD 可以帮助学新知识后找回旧行为。"
  },
  {
    "id": "rl-then-opd",
    "question": "为什么可以先 RL 探索，再用 OPD 复制？",
    "answer": [
      "RL 负责发现更好的策略，OPD 负责把已经发现的策略更高效地教给学生或 base model。",
      "这把“探索”和“复制”拆成两个阶段，降低重复探索成本。"
    ],
    "takeaway": "RL 发明做法，OPD 传播做法。"
  }
] satisfies PaperFAQ;

export default faq;
