import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    id: "relation-to-hinton",
    question: "这篇 survey 和 Hinton 2015 有什么关系？",
    answer: [
      "Hinton 2015 给出了经典 KD 的核心范式：用老师的 soft targets、温度和输出分布去训练学生模型。Gou 等人的 survey 则把这个范式扩展成更完整的领域地图。",
      "可以把 Hinton KD 看成 response-based knowledge distillation 的代表起点，而这篇 survey 说明 KD 还可以蒸中间特征、样本关系、attention map，以及在线互教和自蒸馏等更多形式。",
    ],
    takeaway: "Hinton 2015 是经典起点，Gou survey 是分类地图。",
  },
  {
    id: "title-ambiguity",
    question: "这篇 survey 和 2025 年的 A Comprehensive Survey 有什么区别？",
    answer: [
      "这篇的规范题名是 Knowledge Distillation: A Survey，作者是 Gou、Yu、Maybank 和 Tao，发表于 2021 年，重点是经典 KD 的通用分类坐标系。",
      "2025 年 Mansourian 等人的 A Comprehensive Survey on Knowledge Distillation 是另一篇更晚的综述，覆盖范围扩展到 diffusion models、3D data、foundation models、Transformers 和 LLMs 等更新方向。本站将二者作为不同论文分别收录。",
    ],
    takeaway: "Gou 2021 是通用 KD 早期地图；Mansourian 2025 是更新、更综合的 KD 综述。",
  },
  {
    id: "knowledge-types",
    question: "论文把 knowledge 分成哪几类？",
    answer: [
      "综述将 KD 中的知识大体分为 response-based、feature-based 和 relation-based 三类。response-based 学老师最终输出，feature-based 学老师中间表示，relation-based 学样本或特征之间的结构关系。",
      "这个分类的好处是把“知识”从 soft labels 扩展到模型内部表示和样本结构，解释了为什么 KD 不只是 logits matching。",
    ],
    takeaway: "response、feature、relation 是读 KD 方法的三根主轴。",
  },
  {
    id: "training-schemes",
    question: "offline / online / self-distillation 有什么区别？",
    answer: [
      "Offline distillation 使用一个预训练好且固定的老师，学生在固定老师信号上学习；online distillation 中老师和学生或多个 peer 会在训练过程中一起演化；self-distillation 则让模型自身的层、阶段或 checkpoint 提供监督。",
      "这条轴线回答的是：老师什么时候存在、是否固定、是否和学生共同训练。现代 OPD 可以看作把 online / on-policy 思想推进到学生自生成序列状态上。",
    ],
    takeaway: "训练方式的核心差别在老师是否固定、是否在线参与。",
  },
  {
    id: "teacher-student-design",
    question: "teacher-student 架构设计最容易踩什么坑？",
    answer: [
      "最常见的问题是容量差距：老师太强、学生太小，学生可能无法表达老师的决策边界或中间表示。另一个问题是架构不兼容，例如 CNN 老师和 Transformer 学生的中间层并不天然对齐。",
      "因此很多方法会引入 teacher assistant、多教师、层映射或中间投影，让老师信号落到学生可学习的区域。",
    ],
    takeaway: "强老师不一定是好老师，关键是信号是否适配学生。",
  },
  {
    id: "feature-kd",
    question: "feature-based KD 为什么不只是 logit KD 的补充？",
    answer: [
      "Logit KD 只监督最终输出，学生可能学到答案分布，却未必学到老师内部的层级表示。Feature-based KD 直接约束中间层，让学生在表征空间里靠近老师。",
      "这对视觉任务很重要，因为中间特征包含边缘、纹理、部件、语义等不同层次的信息；只看最终分类概率可能浪费这些可迁移知识。",
    ],
    takeaway: "feature KD 让学生学老师怎么表示，而不只是学老师怎么回答。",
  },
  {
    id: "relation-kd",
    question: "relation-based KD 的核心直觉是什么？",
    answer: [
      "Relation-based KD 关注的不是单个样本的输出或特征，而是样本之间、特征之间或层之间的关系结构。老师知道哪些样本相似、哪些类别容易混淆、哪些表示距离应该接近。",
      "学生保持这些关系结构时，即使单点表示不完全相同，也能继承老师组织数据空间的方式。",
    ],
    takeaway: "relation KD 蒸的是结构，而不只是点。",
  },
  {
    id: "llm-era",
    question: "这篇 survey 对 LLM 蒸馏还适用吗？",
    answer: [
      "适用，但需要扩展理解。它的 taxonomy 仍然能帮助我们区分蒸 logits、hidden states、关系结构还是 trajectories，也能区分 offline、online、self-distillation。",
      "但 LLM 时代新增了学生自生成序列、teacher logprob scoring、长程 credit assignment、黑盒老师和工具轨迹等问题，这些超出了 2020 年 survey 的主要讨论范围。",
    ],
    takeaway: "经典 taxonomy 仍有用，但 LLM 蒸馏需要叠加 on-policy 和长程生成视角。",
  },
  {
    id: "reading-path",
    question: "读完这篇后应该读哪些站内文章？",
    answer: [
      "如果想补基础，先读 Hinton KD、知识蒸馏总览、经典知识蒸馏教程和交叉熵 / KL；如果想看 LLM 时代演进，再读 MiniLLM、OPD / GKD、Thinking Machines OPD 和 Rethinking OPD。",
      "如果关注大模型训练配方，可以继续看 Qwen3、MiMo-v2-Flash、Nemotron-Cascade 2 这些把 OPD、多教师蒸馏和 RL 结合起来的论文。",
    ],
    takeaway: "这篇 survey 是 KD 阅读路线里的地图层。",
  },
  {
    id: "main-value",
    question: "这篇论文最大的价值是什么？",
    answer: [
      "它最大的价值不是提出一个新算法，而是把当时分散的 KD 方法组织成一套可复用的分类坐标系。",
      "有了这套坐标系，读新论文时就可以先定位：它蒸的是哪类知识、使用什么训练方式、师生结构怎么设计、目标函数解决什么约束。",
    ],
    takeaway: "它是 KD 方法论的地图，而不是单点算法。",
  },
] satisfies PaperFAQ;

export default faq;
