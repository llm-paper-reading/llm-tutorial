import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    id: "difference-from-gou",
    question: "这篇和 Gou 2021 的 Knowledge Distillation: A Survey 有什么区别？",
    answer: [
      "Gou 2021 更像经典 KD 领域的基础分类地图，系统整理 response / feature / relation knowledge、offline / online / self-distillation 等核心轴线。",
      "Mansourian 2025 的 A Comprehensive Survey on Knowledge Distillation 覆盖时间更晚、范围更宽，把 diffusion models、3D data、foundation models、Transformers、视觉语言模型和语言模型等现代模型也纳入 KD 讨论。",
    ],
    takeaway: "Gou 2021 是经典地图，Mansourian 2025 是更新、更综合的现代 KD 全景。",
  },
  {
    id: "coverage",
    question: "这篇综述覆盖哪些新方向？",
    answer: [
      "除了传统 teacher-student training 和模型压缩，它还覆盖蒸馏来源、训练方案、算法、模态专用蒸馏、应用、方法比较、开放挑战和未来方向。",
      "特别值得注意的是，它把 KD 放进现代大模型和多模态模型语境里，包括大型神经网络、Transformer、视觉语言模型、语言模型、diffusion models 和 3D data。",
    ],
    takeaway: "它试图把 KD 从经典模型压缩扩展到现代基础模型生态。",
  },
  {
    id: "why-comprehensive",
    question: "为什么这篇叫 comprehensive survey？",
    answer: [
      "它的 comprehensive 主要体现在覆盖范围：不仅讨论知识来源、训练方案和算法，还讨论不同模态、不同应用领域、方法比较、挑战和未来方向。",
      "相比只聚焦分类器或 LLM 的 survey，它更像把 KD 在现代深度学习各分支里的用法做一次横向盘点。",
    ],
    takeaway: "comprehensive 指的是覆盖模型类型、模态、应用和挑战的广度。",
  },
  {
    id: "modern-deployment",
    question: "这篇论文为什么强调 constrained deployment？",
    answer: [
      "知识蒸馏最直接的动机之一，是让大型神经网络、Transformer、视觉语言模型和语言模型能在受限环境中部署。受限可能来自算力、显存、延迟、能耗或设备条件。",
      "因此 KD 不只是训练技巧，也是把先进模型转化为可用系统的一种部署手段。",
    ],
    takeaway: "现代 KD 的核心动机之一是让大模型能力进入真实部署约束。",
  },
  {
    id: "modalities",
    question: "模态专用蒸馏为什么重要？",
    answer: [
      "不同模态的知识形态不同：图像有空间结构，语言有序列依赖，视觉语言模型有跨模态对齐，3D 数据有几何关系，diffusion models 有生成过程。",
      "同一套 logit matching 很难覆盖所有场景，因此现代 KD 需要针对模态和任务设计不同的 teacher signal。",
    ],
    takeaway: "蒸馏方法要匹配模态结构，不能只搬分类器 recipe。",
  },
  {
    id: "relation-to-llm-survey",
    question: "它和 LLM KD Survey 是什么关系？",
    answer: [
      "LLM KD Survey 专门聚焦大语言模型中的知识蒸馏，重点是算法、技能迁移、领域适配、数据增强、自我提升和 LLM 训练管线。",
      "Mansourian 2025 这篇范围更广，LLM 只是其现代 KD 全景中的一部分；如果只关心大模型文本生成和后训练，LLM KD Survey 会更聚焦。",
    ],
    takeaway: "这篇更广，LLM KD Survey 更专。",
  },
  {
    id: "comparison",
    question: "为什么 survey 还要做方法比较？",
    answer: [
      "KD 方法很多，单看名称很难判断适合什么场景。方法比较能帮助读者理解不同算法在知识来源、训练成本、适用模型、性能收益和实现复杂度上的差异。",
      "这对工程选择尤其重要：部署约束下，最优方法不一定是最复杂的方法，而是最适合当前模型、数据和硬件条件的方法。",
    ],
    takeaway: "方法比较把 KD 从论文分类带回工程决策。",
  },
  {
    id: "challenges",
    question: "现代 KD 还有哪些开放挑战？",
    answer: [
      "挑战包括老师选择、师生容量差距、跨模态知识对齐、黑盒老师、评估标准、鲁棒性、安全性，以及如何在压缩效率和能力保持之间取得平衡。",
      "在基础模型时代，KD 还要面对更长上下文、更复杂任务、更昂贵 teacher 和更难验证的生成质量。",
    ],
    takeaway: "现代 KD 的难点已经从单一压缩扩展到系统级权衡。",
  },
  {
    id: "reading-path",
    question: "读完这篇后应该怎么接着读？",
    answer: [
      "如果想看经典基础，可以读 Hinton KD 和 Gou 2021 的 Knowledge Distillation Survey；如果想看 LLM 专项，可以读 A Survey on Knowledge Distillation of Large Language Models。",
      "如果想看具体方法，可以继续读 MiniLLM、OPD / GKD、Thinking Machines OPD、Rethinking OPD、Qwen3、MiMo-v2-Flash 和 Nemotron-Cascade 2。",
    ],
    takeaway: "这篇适合作为现代 KD 入口，再按兴趣分流到经典 KD、LLM KD 或多模态 KD。",
  },
] satisfies PaperFAQ;

export default faq;
