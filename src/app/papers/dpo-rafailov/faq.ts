import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "DPO 想替代 RLHF 里的哪一部分？",
    "answer": [
      "传统 RLHF 先训练奖励模型，再用 PPO 优化策略。DPO 试图跳过显式奖励模型和在线 RL，把偏好数据直接转成一个监督式分类损失。",
      "它利用 KL 约束 RL 目标的解析形式，把隐式奖励写成策略 logprob 和参考模型 logprob 的差。"
    ],
    "takeaway": "DPO 把偏好优化改写成直接训练策略的损失。"
  },
  {
    "id": "secret-reward",
    "question": "为什么说语言模型“偷偷是奖励模型”？",
    "answer": [
      "在 KL 约束下，最优策略和奖励之间存在解析关系。给定策略和参考模型，就可以反推出一个隐式奖励。",
      "DPO 利用这个关系，把偏好对的胜负概率写成 chosen / rejected 的 logprob 差。"
    ],
    "takeaway": "DPO 的优雅来自策略—奖励的解析重参数化。"
  },
  {
    "id": "beta",
    "question": "β 控制什么？",
    "answer": [
      "β 控制策略偏离参考模型的强度。β 较小通常允许更大偏离，β 较大则更保守。",
      "实践中它影响对齐强度、输出多样性和过优化风险，需要结合数据质量调节。"
    ],
    "takeaway": "β 是偏好优化和参考模型约束之间的旋钮。"
  },
  {
    "id": "dpo-vs-ppo",
    "question": "DPO 和 PPO/RLHF 的主要差别是什么？",
    "answer": [
      "PPO/RLHF 需要奖励模型和采样更新，训练链路更长；DPO 直接用偏好对做离线监督式优化，实现更简单。",
      "但 DPO 也更依赖偏好数据分布和参考模型选择，不能完全替代需要在线探索的场景。"
    ],
    "takeaway": "DPO 简化了 RLHF，但不是所有偏好学习问题的终点。"
  },
  {
    "id": "limits",
    "question": "DPO 的局限在哪里？",
    "answer": [
      "DPO 假设偏好数据足够代表目标行为，也依赖 chosen / rejected 的质量。如果数据偏窄或偏噪，模型会直接继承这些偏差。",
      "此外，DPO 本身不探索新答案，只在已有偏好数据支持的区域更新策略。"
    ],
    "takeaway": "DPO 是强离线偏好优化器，但不是探索算法。"
  },
  {
    "id": "reference-model",
    "question": "参考模型在 DPO 里为什么重要？",
    "answer": [
      "参考模型定义了策略偏离的基准，也出现在隐式奖励的计算中。",
      "如果参考模型选择不当，DPO 的更新方向和保守程度都会受影响。"
    ],
    "takeaway": "DPO 不是只看偏好对，也看参考模型。"
  },
  {
    "id": "chosen-rejected",
    "question": "chosen / rejected 的 logprob 怎么用？",
    "answer": [
      "DPO 比较模型对 chosen 和 rejected 的序列 logprob 差，并相对参考模型进行校正。",
      "目标是让模型更偏向人类选择的回答，同时不过度偏离参考策略。"
    ],
    "takeaway": "DPO 训练的是偏好对之间的相对 logprob。"
  },
  {
    "id": "variants",
    "question": "为什么后来有 IPO、KTO、cDPO 等变体？",
    "answer": [
      "DPO 简洁但假设和数据条件有限，后续变体试图处理噪声偏好、单边反馈、长度偏差或更稳定的目标。",
      "这说明 DPO 是一个基础框架，而不是偏好优化的最终形态。"
    ],
    "takeaway": "DPO 开启了一族直接偏好优化方法。"
  }
] satisfies PaperFAQ;

export default faq;
