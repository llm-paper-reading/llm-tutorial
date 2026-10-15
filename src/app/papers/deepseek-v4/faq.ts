import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "DeepSeek-V4 解决的是哪类效率问题？",
    "answer": [
      "它面向百万 token 上下文，核心问题是长上下文推理中的注意力 FLOPs、KV cache 和训练稳定性成本。",
      "因此报告同时设计 Pro 与 Flash 双路线，分别覆盖更强能力和更高效率。"
    ],
    "takeaway": "V4 的关键词是百万上下文效率。"
  },
  {
    "id": "pro-flash",
    "question": "Pro 和 Flash 有什么差别？",
    "answer": [
      "Pro 更强调能力上限，Flash 更强调低成本和高吞吐。两者的总参数、激活参数和推理成本不同。",
      "读评测时要把模型版本分开看，不能把 Pro 的能力和 Flash 的成本混为一谈。"
    ],
    "takeaway": "Pro 看上限，Flash 看效率。"
  },
  {
    "id": "csa-hca",
    "question": "CSA + HCA 混合注意力想达到什么效果？",
    "answer": [
      "混合注意力的目标是在长上下文中减少无效计算，同时保留对远距离关键信息的访问能力。",
      "CSA 和 HCA 分担不同注意力角色，让模型不必对所有 token 做同等昂贵的处理。"
    ],
    "takeaway": "混合注意力是对长上下文成本的结构性拆分。"
  },
  {
    "id": "opd",
    "question": "为什么 V4 用在线蒸馏替换 mixed RL 阶段？",
    "answer": [
      "在线蒸馏能在学生自身轨迹上提供更密集的老师信号，可能比稀疏奖励 RL 更稳定、更高效。",
      "这说明 DeepSeek-V4 把 OPD 视为后训练的核心效率工具，而不只是补充蒸馏。"
    ],
    "takeaway": "OPD 被用来降低后训练探索和信用分配成本。"
  },
  {
    "id": "limits",
    "question": "百万上下文模型最难评估什么？",
    "answer": [
      "长上下文不是只看能塞多少 token，还要看模型是否真的利用远处信息、是否能跨文档推理、是否在真实任务中稳定。",
      "不同 benchmark 的输入构造、检索位置和评分方式差异很大，不能直接用单一分数下结论。"
    ],
    "takeaway": "百万上下文能力要看有效利用，而不是名义长度。"
  },
  {
    "id": "flash-pro-choice",
    "question": "实际使用时该选 Pro 还是 Flash？",
    "answer": [
      "如果任务追求最强推理和复杂长上下文理解，更适合 Pro；如果关注成本、吞吐和延迟，Flash 更符合定位。",
      "选择应按任务复杂度、上下文长度和预算决定，而不是只看模型名字。"
    ],
    "takeaway": "模型版本选择是成本—能力权衡。"
  },
  {
    "id": "teacher-scheduling",
    "question": "teacher scheduling 是什么直觉？",
    "answer": [
      "不同老师或同一老师不同阶段的信号成本和质量不同。调度策略决定何时、在哪些样本上调用老师。",
      "好的 teacher scheduling 可以提高蒸馏效率，避免把昂贵老师算力浪费在低价值样本上。"
    ],
    "takeaway": "老师算力也需要调度。"
  },
  {
    "id": "muon-mhc",
    "question": "Muon 和 mHC 在路线里说明什么？",
    "answer": [
      "百万上下文和超大模型训练不仅靠模型结构，也依赖优化器和训练稳定性工程。",
      "这些组件服务于更高吞吐、更稳训练和更低成本。"
    ],
    "takeaway": "长上下文训练是架构与优化共同问题。"
  }
] satisfies PaperFAQ;

export default faq;
