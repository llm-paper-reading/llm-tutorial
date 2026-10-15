import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "MiniLLM 为什么强调反向 KL？",
    "answer": [
      "生成式语言模型如果用常规 forward KL 拟合老师完整分布，学生容易被迫覆盖老师分布里大量低概率 token，生成时可能更啰嗦或质量下降。",
      "MiniLLM 使用 reverse KL 的直觉是让学生更集中地追随老师高概率模式，减少生成退化。"
    ],
    "takeaway": "MiniLLM 关注的是生成质量下的 KL 方向问题。"
  },
  {
    "id": "on-policy",
    "question": "为什么 MiniLLM 必须 on-policy？",
    "answer": [
      "如果只在老师或固定数据的前缀上训练，学生一旦自己生成偏了，就没有对应监督信号。on-policy 让学生在自己生成的前缀上接受老师反馈。",
      "这和 OPD 的共同点是都把训练状态移到学生实际会遇到的分布上。"
    ],
    "takeaway": "生成模型蒸馏的难点在学生自己的前缀状态。"
  },
  {
    "id": "reverse-kl-pg",
    "question": "反向 KL 怎么变成策略梯度形式？",
    "answer": [
      "MiniLLM 把学生采样序列上的 reverse KL 目标改写成可以用策略梯度优化的形式，让老师分数成为训练信号的一部分。",
      "这样它不需要枚举完整词表分布，而是在学生采样的 token 上获得更直接的更新方向。"
    ],
    "takeaway": "策略梯度是把 reverse KL 落到采样序列上的工程路径。"
  },
  {
    "id": "experiments",
    "question": "读 MiniLLM 实验时应关注什么？",
    "answer": [
      "不能只看平均分，还要看长文本生成是否退化、输出是否重复、是否过短或过长。MiniLLM 关心的是学生生成行为的质量，而不仅是单点指标。",
      "它的价值在于指出不同 KL 方向会显著影响生成模型的行为模式。"
    ],
    "takeaway": "生成任务里，分布方向会体现在文本形态上。"
  },
  {
    "id": "relation",
    "question": "MiniLLM 和 Hinton KD 的关系是什么？",
    "answer": [
      "Hinton KD 是固定输入上拟合老师 soft targets 的经典框架；MiniLLM 则把问题推进到自回归生成和学生自生成状态。",
      "它继承了老师—学生蒸馏思想，但改变了 KL 方向和采样状态。"
    ],
    "takeaway": "MiniLLM 是生成式、on-policy、reverse-KL 版本的蒸馏思路。"
  },
  {
    "id": "mode-seeking",
    "question": "反向 KL 的 mode-seeking 特性在文本里意味着什么？",
    "answer": [
      "反向 KL 更倾向于选择老师分布中的高概率模式，而不是平均覆盖所有可能输出。",
      "在文本生成里，这可能减少低质量长尾 token 的影响，让学生输出更集中、更可读。"
    ],
    "takeaway": "反向 KL 更像“抓住老师最认可的说法”。"
  },
  {
    "id": "exposure-bias",
    "question": "MiniLLM 和 exposure bias 有什么关系？",
    "answer": [
      "如果学生只在老师前缀上训练，生成时遇到自己的错误前缀就不会处理，这就是一种暴露偏差。",
      "on-policy 蒸馏让学生在自己生成的前缀上接受老师反馈，有助于缓解这个问题。"
    ],
    "takeaway": "on-policy 是修复生成前缀偏移的一种方式。"
  },
  {
    "id": "not-free",
    "question": "反向 KL 会不会导致学生过于保守？",
    "answer": [
      "有可能。mode-seeking 会让学生更偏向老师高概率区域，可能牺牲多样性或覆盖率。",
      "所以 reverse KL 不是免费午餐，需要结合任务目标和生成质量评估。"
    ],
    "takeaway": "反向 KL 提升集中性，也可能牺牲覆盖。"
  }
] satisfies PaperFAQ;

export default faq;
