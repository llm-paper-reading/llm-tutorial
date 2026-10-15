import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "MiMo-v2-Flash 到底在压缩什么？",
    "answer": [
      "它不是简单把参数变少，而是在模型架构、长上下文注意力、教师信号和推理解码上同时做效率压缩。",
      "目标是在保持推理能力的同时，让 Flash 版本具备更低推理成本和更高部署可用性。"
    ],
    "takeaway": "Flash 不是低配版，而是围绕效率重新组织训练和推理。"
  },
  {
    "id": "mopd",
    "question": "MOPD 在这里起什么作用？",
    "answer": [
      "MOPD 把多个领域老师的能力转成密集过程信号，让学生模型在不同领域都能吸收更强老师的局部判断。",
      "这比只看最终答案更适合推理模型，因为中间 token 和步骤也包含重要训练信号。"
    ],
    "takeaway": "MOPD 是把多老师过程能力压进一个高效模型。"
  },
  {
    "id": "swa",
    "question": "SWA + 全局注意力混合有什么意义？",
    "answer": [
      "滑动窗口注意力降低长上下文成本，但纯局部窗口可能丢失全局信息。混合全局注意力可以在控制成本的同时保留跨段信息通路。",
      "这种结构服务于 Flash 定位：更便宜地处理长上下文，而不是完全牺牲全局建模。"
    ],
    "takeaway": "局部注意力省成本，全局注意力补信息。"
  },
  {
    "id": "mtp",
    "question": "MTP 为什么和 Flash 模型相关？",
    "answer": [
      "MTP 可以用于投机解码或多 token 预测，让小模型在推理时更高效地产生候选 token。",
      "对于 Flash 版本，训练和推理阶段的效率优化需要配套，MTP 是推理吞吐提升的一部分。"
    ],
    "takeaway": "Flash 的效率来自训练信号和解码路径的共同设计。"
  },
  {
    "id": "limits",
    "question": "MiMo-v2-Flash 的局限是什么？",
    "answer": [
      "它仍然受老师模型能力和任务分布约束。老师没有覆盖到的能力，学生很难通过蒸馏凭空获得。",
      "此外，高效模型在极难任务和长程 agent 行为上是否能稳定追上更大模型，还需要看更细的评测。"
    ],
    "takeaway": "蒸馏能压缩强能力，但不能替代能力来源。"
  },
  {
    "id": "token-reward",
    "question": "token-level teacher reward 比最终奖励多了什么？",
    "answer": [
      "最终奖励只告诉模型答案整体好坏，token-level reward 能指出每一步生成是否接近老师策略。",
      "这对长链推理尤其重要，因为错误可能发生在中间步骤。"
    ],
    "takeaway": "逐 token 信号能缓解长推理的信用分配问题。"
  },
  {
    "id": "flash-vs-teacher",
    "question": "Flash 模型和老师模型的关系是什么？",
    "answer": [
      "Flash 版本通常不是从零发现全部能力，而是通过多教师蒸馏和后训练吸收更强模型的过程信号。",
      "它的价值在于用更低成本保留足够多的推理能力。"
    ],
    "takeaway": "Flash 是能力压缩与效率设计的结合。"
  },
  {
    "id": "eval-efficiency",
    "question": "评价 Flash 模型时只看分数够吗？",
    "answer": [
      "不够。Flash 的卖点是质量和效率的组合，需要同时看延迟、吞吐、上下文长度、解码策略和硬件条件。",
      "如果只看榜单分数，会忽略它作为高效模型的核心定位。"
    ],
    "takeaway": "Flash 要按质量 / 成本一起评估。"
  }
] satisfies PaperFAQ;

export default faq;
