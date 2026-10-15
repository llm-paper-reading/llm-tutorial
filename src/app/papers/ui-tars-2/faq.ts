import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "UI-TARS-2 关注的 Agent 问题是什么？",
    "answer": [
      "GUI Agent 需要在真实界面中连续观察、规划、点击、输入和修正，任务成功依赖整条轨迹，而不是单次回答。",
      "UI-TARS-2 关注如何用多轮 RL 和数据飞轮提升这种长程界面操作能力。"
    ],
    "takeaway": "GUI Agent 的训练单位是轨迹。"
  },
  {
    "id": "trajectory",
    "question": "为什么说 Agent 是轨迹上的策略？",
    "answer": [
      "每一步操作都会改变界面状态，下一步决策依赖此前观察和动作。单步分类无法刻画这种闭环。",
      "因此训练和评估都要围绕状态—动作—反馈序列展开。"
    ],
    "takeaway": "Agent 能力来自连续决策，而非单点预测。"
  },
  {
    "id": "data-flywheel",
    "question": "数据飞轮如何让模型变强？",
    "answer": [
      "更强模型能完成更多任务并产生更高质量轨迹，这些轨迹又能反过来训练下一版模型。",
      "关键是要有筛选、验证和纠错机制，否则飞轮会放大错误行为。"
    ],
    "takeaway": "数据飞轮需要模型生成和质量控制一起工作。"
  },
  {
    "id": "multi-turn-rl",
    "question": "多轮 RL 和普通 SFT 的差别是什么？",
    "answer": [
      "SFT 多数是在示范动作上做模仿，多轮 RL 则根据整条轨迹是否成功来优化策略。",
      "这能直接奖励任务完成，但也带来更难的 credit assignment。"
    ],
    "takeaway": "多轮 RL 优化的是任务成功，而不是单步像不像。"
  },
  {
    "id": "test-time-scaling",
    "question": "推理时扩展为什么有效？",
    "answer": [
      "给 Agent 更多步数、更多尝试或更大搜索预算，可能提升复杂任务成功率。",
      "但推理预算不是免费午餐，过长轨迹也可能引入错误累积和延迟。"
    ],
    "takeaway": "GUI Agent 可以用推理预算换性能，但要控制成本。"
  },
  {
    "id": "vertical-agent",
    "question": "垂直 Agent 与合并是什么意思？",
    "answer": [
      "不同垂直场景可以训练专门 agent，例如网页、移动端或桌面软件操作。",
      "最终再把这些垂直能力合并到更通用的 GUI Agent 中。"
    ],
    "takeaway": "先专门化，再统一化，是 Agent 训练的一条路线。"
  },
  {
    "id": "reward-trajectory",
    "question": "为什么 GUI 任务奖励常常是轨迹级的？",
    "answer": [
      "单个点击可能看不出好坏，只有完成整个任务后才知道路径是否成功。",
      "这让 credit assignment 更难，也正是多轮 RL 的价值所在。"
    ],
    "takeaway": "GUI Agent 的反馈往往延迟到任务结束。"
  },
  {
    "id": "real-ui-risk",
    "question": "真实 UI 环境训练有什么风险？",
    "answer": [
      "界面会变化，动作可能不可逆，错误操作也可能带来副作用。",
      "因此训练和评测通常需要沙箱、回放、权限控制和明确任务边界。"
    ],
    "takeaway": "GUI Agent 需要安全可控的环境。"
  }
] satisfies PaperFAQ;

export default faq;
