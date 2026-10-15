import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "OPD / GKD 要解决什么问题？",
    "answer": [
      "离线蒸馏通常让学生拟合老师生成的数据，但学生部署时会走到自己生成的状态分布上。一旦学生跑偏，离线数据里没有这些状态，老师也没有在这些状态上纠正过它。",
      "OPD 的核心是让学生自己 rollout，再让老师在学生真实到达的状态上给信号，从而缓解状态分布不匹配。"
    ],
    "takeaway": "OPD 关心的是学生自己的状态分布。"
  },
  {
    "id": "gkd-vs-pg",
    "question": "GKD OPD 和 PG OPD 有什么区别？",
    "answer": [
      "GKD OPD 更像完整分布匹配，在学生状态上让学生分布靠近老师分布；PG OPD 则把老师对学生采样 token 的评价转成 token-level reward 或 advantage。",
      "二者都强调 on-policy，但复杂度和训练接口不同：GKD 更接近监督式 KL，PG OPD 更容易接入 PPO / GRPO 风格管线。"
    ],
    "takeaway": "GKD 匹配分布，PG OPD 更像把老师变成密集奖励。"
  },
  {
    "id": "teacher-role",
    "question": "为什么说老师只打分，不生成？",
    "answer": [
      "OPD 的关键不是让老师替学生写答案，而是学生先自己生成轨迹，老师再对这些轨迹上的 token 或分布进行评估。",
      "这和离线蒸馏不同：训练信号发生在学生会真实遇到的前缀状态上，因此更贴近部署时的错误模式。"
    ],
    "takeaway": "OPD 中老师是评审者，不是代写者。"
  },
  {
    "id": "mopd",
    "question": "MOPD 为什么需要多个老师？",
    "answer": [
      "一个老师很难在所有领域都最强。MOPD 让不同领域或能力的专家老师给学生提供信号，再把多个强项蒸回一个统一学生模型。",
      "这适合通用模型后训练：推理、代码、数学、工具调用等能力可以由不同老师覆盖。"
    ],
    "takeaway": "MOPD 是把多领域专家能力合并回一个学生。"
  },
  {
    "id": "limits",
    "question": "OPD 的主要坑在哪里？",
    "answer": [
      "OPD 需要强老师、稳定的学生 rollout、合理的 token 信号和足够覆盖的任务分布。老师过弱或与学生思考模式差异太大，都会让信号噪声变高。",
      "它省的是重新探索的成本，不是完全免除老师计算和数据设计成本。"
    ],
    "takeaway": "OPD 有效的前提是老师信号真的适配学生状态。"
  },
  {
    "id": "distribution-mismatch",
    "question": "状态分布不匹配为什么会伤害离线蒸馏？",
    "answer": [
      "离线蒸馏通常在老师或数据集前缀上训练，学生部署时却会生成自己的前缀。学生一旦偏离，训练中没见过这些状态。",
      "OPD 让训练发生在学生自己的前缀上，减少这种 train-test mismatch。"
    ],
    "takeaway": "生成任务里，前缀分布就是训练分布。"
  },
  {
    "id": "full-distribution",
    "question": "完整分布打分和 sampled token 打分有什么差别？",
    "answer": [
      "完整分布打分能看到所有 token 概率，信息更完整但计算更贵；sampled token 打分只看学生实际采样的 token，更便宜也更像策略梯度。",
      "选择哪种取决于成本、接口和想要的训练稳定性。"
    ],
    "takeaway": "完整分布更全，采样打分更贴近 RL 管线。"
  },
  {
    "id": "when-use",
    "question": "什么时候更适合用 OPD，而不是 SFT 或 RL？",
    "answer": [
      "当已经有强老师，且希望学生在自己生成状态上复制老师能力时，OPD 很合适。",
      "如果没有强老师或需要探索全新能力，仍然需要 RL、搜索或更强数据生成流程。"
    ],
    "takeaway": "OPD 适合复制已有强策略，不适合凭空发现能力。"
  }
] satisfies PaperFAQ;

export default faq;
