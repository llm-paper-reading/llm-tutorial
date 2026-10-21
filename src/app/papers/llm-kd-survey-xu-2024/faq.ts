import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    id: "difference-from-classic-survey",
    question: "这篇和通用 KD Survey 有什么区别？",
    answer: [
      "通用 KD Survey 更像知识蒸馏领域的基础分类地图，重点是 response / feature / relation knowledge、offline / online / self-distillation 等通用轴线。",
      "这篇 LLM KD survey 则把焦点放在大模型场景：指令遵循、推理、代码、领域适配、数据增强、黑盒老师、模型压缩和自我提升等 LLM 特有问题。",
    ],
    takeaway: "通用 survey 讲 KD 坐标系，LLM survey 讲这个坐标系在大模型时代如何变形。",
  },
  {
    id: "not-only-compression",
    question: "LLM KD 为什么不只是模型压缩？",
    answer: [
      "在传统语境里，KD 常被用于把大模型压缩成小模型；但 LLM 场景中，蒸馏还承担技能迁移、指令数据生成、领域适配、对齐行为复制和自我提升等角色。",
      "也就是说，LLM KD 不只是让学生更小，还要让学生继承老师的推理方式、任务能力、回答风格和领域知识。",
    ],
    takeaway: "LLM KD 是能力迁移与后训练基础设施，不只是压缩。",
  },
  {
    id: "teacher-signals",
    question: "LLM 蒸馏中 teacher signal 有哪些形态？",
    answer: [
      "最直接的是老师生成的答案文本；更细的是 token-level logits / logprobs；还可以包括推理链、解释、偏好判断、工具调用轨迹、领域样本和多模态输出。",
      "不同 teacher signal 决定了不同训练方法：有的像 SFT，有的像 KL matching，有的更接近 RL 或 OPD 中的 token-level reward。",
    ],
    takeaway: "LLM 老师不只给答案，也可以给概率、过程、偏好和轨迹。",
  },
  {
    id: "signal-levels",
    question: "为什么 sequence-level、token-level、policy-level 要区分？",
    answer: [
      "Sequence-level 蒸馏通常让学生模仿老师完整答案，简单但粒度粗；token-level 蒸馏能在每个位置提供更密集的概率信号；policy-level 或 on-policy 蒸馏则关心学生自己生成状态上的老师反馈。",
      "粒度越细，训练信号通常越密集，但工程成本和对老师接口的要求也越高。",
    ],
    takeaway: "蒸馏信号粒度决定了训练成本、监督密度和状态分布覆盖。",
  },
  {
    id: "data-augmentation",
    question: "数据增强在 LLM KD 中为什么重要？",
    answer: [
      "LLM 蒸馏经常依赖老师生成 instruction、回答、推理链或领域样本。老师不仅是打分器，也是合成训练数据的生成器。",
      "但合成数据不是越多越好，还需要去重、过滤、难度控制、多样性控制和质量评估，否则学生会继承老师错误或被低质量样本拖累。",
    ],
    takeaway: "LLM KD 的数据质量控制和老师能力同样重要。",
  },
  {
    id: "black-box-teacher",
    question: "为什么黑盒 API 老师会改变蒸馏方法？",
    answer: [
      "如果老师是闭源 API，学生通常拿不到完整 logits 或 hidden states，只能看到生成文本、少量 logprob 或偏好反馈。",
      "这会把方法从完整分布匹配推向 sequence-level distillation、instruction generation、preference distillation 或基于可见输出的弱监督。",
    ],
    takeaway: "老师接口越黑盒，蒸馏越依赖可见文本和可获得反馈。",
  },
  {
    id: "opd-minillm",
    question: "它和 MiniLLM / OPD 有什么关系？",
    answer: [
      "MiniLLM 和 OPD 是 LLM KD 中更偏 on-policy 的分支：学生自己生成前缀或序列，老师在这些学生状态上提供信号。",
      "这解决了传统离线蒸馏的状态分布不匹配问题，但也带来 rollout 成本、老师打分成本和训练稳定性问题。",
    ],
    takeaway: "MiniLLM / OPD 是 LLM KD 从固定数据走向学生自生成状态的代表路线。",
  },
  {
    id: "skills",
    question: "LLM KD 中的“技能迁移”具体指什么？",
    answer: [
      "技能可以是数学推理、代码生成、指令遵循、领域问答、工具调用、多轮对话或安全对齐。",
      "不同技能需要不同老师信号：推理可能需要 chain-of-thought 或过程监督，代码需要测试反馈，工具使用需要轨迹，安全对齐需要偏好和拒答边界。",
    ],
    takeaway: "LLM KD 的对象从“类别概率”扩展到了可执行技能。",
  },
  {
    id: "risks",
    question: "LLM KD 的主要风险是什么？",
    answer: [
      "第一是错误继承：老师幻觉、偏见或格式习惯会被学生学走。第二是能力坍缩：学生容量不足时，可能只学到表面风格而非真实推理能力。",
      "第三是评估困难：学生看似模仿老师输出，但在长尾任务、长程推理或工具环境中未必可靠。",
    ],
    takeaway: "LLM KD 要同时防止学错、学浅和评估失真。",
  },
  {
    id: "reading-path",
    question: "读完后应该接哪些站内论文？",
    answer: [
      "如果想看基础，接着读 Hinton KD 和通用 KD Survey；如果想看 on-policy 路线，读 MiniLLM、OPD / GKD、Thinking Machines OPD 和 Rethinking OPD。",
      "如果想看模型报告里的应用，读 Qwen3、MiMo-v2-Flash 和 Nemotron-Cascade 2，它们展示了在线蒸馏、多教师蒸馏和 RL 后训练在真实大模型中的用法。",
    ],
    takeaway: "这篇 survey 是 LLM 蒸馏论文线的导航页。",
  },
] satisfies PaperFAQ;

export default faq;
