import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "这篇为什么要“重新思考” OPD？",
    "answer": [
      "OPD 看起来很自然：学生生成、老师纠正。但实践中强老师不一定总能教好学生，甚至可能出现负迁移。",
      "这篇论文试图解释 OPD 成功和失败的条件，而不是只把 OPD 当成万能 recipe。"
    ],
    "takeaway": "OPD 的关键不是老师越强越好，而是信号是否适配学生。"
  },
  {
    "id": "thinking-mode",
    "question": "为什么思考模式必须兼容？",
    "answer": [
      "如果老师和学生的 reasoning style 差异太大，学生在自己轨迹上得到的老师信号可能非常稀疏或不稳定。",
      "有效蒸馏需要老师在学生可能走到的前缀附近提供可学习的局部方向，而不是完全不同的解题路径。"
    ],
    "takeaway": "老师路线和学生路线太远，逐 token 信号会变差。"
  },
  {
    "id": "new-ability",
    "question": "为什么老师必须带来新能力？",
    "answer": [
      "如果老师只是在学生已经会的区域给出类似信号，OPD 的边际收益有限。真正有效的老师需要在学生薄弱但可达的状态上提供更好的下一步偏好。",
      "因此选老师不仅看总体分数，还要看它是否能覆盖学生缺的能力。"
    ],
    "takeaway": "好老师要给学生带来可学习的新信息。"
  },
  {
    "id": "high-prob-token",
    "question": "“有效信号集中在少数高概率 token”是什么意思？",
    "answer": [
      "许多 token 的老师—学生差异对最终行为影响很小，真正能改变轨迹质量的信号往往集中在关键高概率 token 或关键决策点。",
      "这解释了为什么 prompt 选择、冷启动和 teacher alignment 会显著影响 OPD 效果。"
    ],
    "takeaway": "OPD 的有效学习信号并不均匀分布在所有 token 上。"
  },
  {
    "id": "recipe",
    "question": "这篇给出的实用 recipe 是什么？",
    "answer": [
      "先用 off-policy 数据或冷启动让学生进入老师能有效纠正的区域，再选择与老师能力对齐、信号质量高的 prompts 做 OPD。",
      "也就是说，OPD 不是单独一步，而是要和 cold start、prompt selection、teacher selection 配合。"
    ],
    "takeaway": "先把学生带到可教区，再让老师逐步纠正。"
  },
  {
    "id": "strong-teacher-fail",
    "question": "为什么强老师也可能教失败？",
    "answer": [
      "强老师的整体能力高，不代表它在学生当前前缀上给出的局部信号可学习。如果两者推理风格差异太大，学生可能接收不到有效梯度。",
      "因此 teacher selection 要看适配性，不只是看 leaderboard 分数。"
    ],
    "takeaway": "老师强不等于信号适配。"
  },
  {
    "id": "weak-to-strong",
    "question": "weak-to-strong reverse distillation 有什么启示？",
    "answer": [
      "弱学生和强老师之间如果存在可连接的中间能力区域，蒸馏可能逐步拉近差距。",
      "但如果能力断层太大，直接蒸馏可能失败，需要冷启动或中间老师。"
    ],
    "takeaway": "能力差距需要可学习的桥。"
  },
  {
    "id": "prompt-selection",
    "question": "teacher-aligned prompt selection 为什么重要？",
    "answer": [
      "不是所有 prompt 都能产生高质量老师信号。有些 prompt 上老师和学生路径差异太大，训练信号会变噪。",
      "选择能让老师优势有效显现、且学生有机会学习的 prompt，是 OPD recipe 的关键部分。"
    ],
    "takeaway": "好 prompt 决定老师信号是否可用。"
  }
] satisfies PaperFAQ;

export default faq;
