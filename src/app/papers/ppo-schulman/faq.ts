import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "PPO 想解决什么问题？",
    "answer": [
      "PPO 想在策略梯度的易用性和 TRPO 的稳定性之间折中：既避免一次更新把策略推得太远，又不需要像 TRPO 那样实现复杂的二阶约束优化。",
      "它用概率比 ratio 的裁剪目标，把“新策略相对旧策略变化太大”的收益封顶，从工程上给策略更新加了一道保险丝。"
    ],
    "takeaway": "PPO 的核心不是更复杂，而是用裁剪把策略更新限制在相对安全的范围内。"
  },
  {
    "id": "clip",
    "question": "ratio 裁剪到底裁的是什么？",
    "answer": [
      "PPO 比较的是新旧策略对同一动作的概率比 r=πθ(a|s)/πold(a|s)。如果优势 A 为正，希望提高该动作概率；如果 A 为负，希望降低该动作概率。",
      "裁剪把 r 限制在 [1−ε,1+ε] 附近，让单个样本无法因为概率变化过大而继续增加目标值。"
    ],
    "takeaway": "裁剪限制的是新策略相对旧策略的概率变化收益。"
  },
  {
    "id": "clip-vs-kl",
    "question": "为什么 PPO 最常用 clip 版本，而不是 KL 惩罚版本？",
    "answer": [
      "论文同时研究了 KL penalty 和 clipped surrogate 两种形式。KL penalty 更接近信赖域思想，但需要调惩罚系数；clip 版本少一个动态惩罚超参，实践中更稳、更简单。",
      "这也是 PPO 被广泛采用的原因：它不是理论上最精细的近似，但足够稳定、易复现、易接入现有训练流水线。"
    ],
    "takeaway": "PPO-Clip 胜在工程稳健性。"
  },
  {
    "id": "llm-rlhf",
    "question": "PPO 和后来的 RLHF 有什么关系？",
    "answer": [
      "RLHF 里常见做法是用奖励模型给回答打分，再用 PPO 更新语言模型策略，同时加 KL 约束避免偏离参考模型太远。",
      "这里 PPO 提供的是策略优化器；奖励模型、KL 到参考模型、序列级采样等是 LLM 场景额外加上的组件。"
    ],
    "takeaway": "PPO 是 RLHF 的优化骨架之一，不等于完整 RLHF。"
  },
  {
    "id": "limits",
    "question": "PPO 有哪些局限？",
    "answer": [
      "PPO 的稳定来自保守更新，但它仍然依赖优势估计、奖励质量、采样分布和超参。裁剪不是严格信赖域约束，不能保证每次更新都安全。",
      "在 LLM 后训练里，PPO 还会受到奖励模型偏差、KL 系数、长序列 credit assignment 和 rollout 成本的影响。"
    ],
    "takeaway": "PPO 降低了策略优化难度，但没有消除奖励和分布问题。"
  },
  {
    "id": "gae",
    "question": "PPO 为什么经常和 GAE 一起出现？",
    "answer": [
      "PPO 需要优势估计来判断动作比基线好还是坏。GAE 用 λ 在偏差和方差之间折中，给 PPO 提供更稳定的优势信号。",
      "没有好的优势估计，clip 目标再稳也可能优化噪声。"
    ],
    "takeaway": "PPO 稳不稳，很大程度取决于优势估计质量。"
  },
  {
    "id": "minibatch-epochs",
    "question": "PPO 为什么可以对同一批 rollout 做多轮 minibatch 更新？",
    "answer": [
      "PPO 的 clip 目标限制了新旧策略偏离，使得同一批 on-policy 数据可以被重复利用几轮，而不至于像朴素策略梯度那样立刻过时。",
      "这提高了样本效率，也是 PPO 在工程上受欢迎的重要原因。"
    ],
    "takeaway": "clip 让 rollout 数据能被更安全地复用。"
  },
  {
    "id": "clip-epsilon",
    "question": "ε 该怎么理解？越大越好吗？",
    "answer": [
      "ε 越大，策略每次更新可偏离旧策略的空间越大，学习可能更快但更不稳；ε 越小，更新更保守但可能变慢。",
      "它不是固定越大越好，而是稳定性和学习速度之间的超参。"
    ],
    "takeaway": "ε 是 PPO 的保守程度旋钮。"
  }
] satisfies PaperFAQ;

export default faq;
