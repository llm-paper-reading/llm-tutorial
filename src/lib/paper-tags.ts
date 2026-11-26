// 论文关键词注册表 —— 单一数据源。
// 所有 keyword 的名称、英文表述、图标、说明与参考解释页集中在这里维护；
// papers.ts 只描述论文本身，tag 字符串须与本文 KEYWORDS 的 name 一一对应。
// （papers.ts 由 getAllTags() 动态收集 tag 字符串，漏配 KEYWORDS 条目只会丢失图标/说明，不会报错——
//  新增 tag 时记得同步这里。）

export interface PaperTag {
  /** keyword 名称；papers.ts 的 Paper.tags 数组引用此名称 */
  name: string;
  /** 标准英文表述，用于 tooltip 与关键词说明表 */
  english: string;
  /** 图标（emoji），用于列表与侧边栏视觉区分 */
  icon: string;
  /** 可选图片图标路径；存在时优先用于页面展示 */
  iconSrc?: string;
  /** 一句话说明，用于悬浮提示与理解词义 */
  hint?: string;
  /** 较长的背景解释，用于关键词说明表；未配置时回退到 hint */
  description?: string;
  /** 高认可度的解释页面（Wikipedia、官方文档等） */
  reference?: {
    label: string;
    url: string;
  };
}

/**
 * 全部关键词。顺序即落地页筛选条与侧边栏的展示顺序。
 */
export const KEYWORDS: PaperTag[] = [
  {
    name: "DeepSeek 系列",
    english: "DeepSeek Series",
    icon: "🐋",
    hint: "DeepSeek 系列模型与技术报告：R1、V3、V3.2、OCR 等",
    reference: {
      label: "Wikipedia：DeepSeek",
      url: "https://en.wikipedia.org/wiki/DeepSeek",
    },
  },
  {
    name: "Kimi 系列",
    english: "Kimi Series",
    icon: "🌙",
    hint: "月之暗面 Kimi 系列模型：K1.5、K2、K3 等",
    reference: {
      label: "Wikipedia：Moonshot AI",
      url: "https://en.wikipedia.org/wiki/Moonshot_AI",
    },
  },
  {
    name: "GLM 系列",
    english: "GLM Series",
    icon: "🧬",
    hint: "智谱 GLM 系列模型与 Agentic/Reasoning/Coding 训练路线",
    reference: {
      label: "Wikipedia：Zhipu AI",
      url: "https://en.wikipedia.org/wiki/Zhipu_AI",
    },
  },
  {
    name: "MiniMax 系列",
    english: "MiniMax Series",
    icon: "🪶",
    hint: "MiniMax 系列模型与稀疏注意力、多模态、长上下文路线",
    reference: {
      label: "Wikipedia：MiniMax Group",
      url: "https://en.wikipedia.org/wiki/MiniMax_(company)",
    },
  },
  {
    name: "Qwen 系列",
    english: "Qwen Series",
    icon: "🧭",
    hint: "阿里 Qwen 系列模型与技术报告：Qwen1、Qwen2、Qwen2.5、Qwen3 等",
    reference: {
      label: "Wikipedia：Qwen",
      url: "https://en.wikipedia.org/wiki/Qwen",
    },
  },
  {
    name: "Llama 系列",
    english: "Llama Series",
    icon: "🦙",
    hint: "Meta Llama 系列模型与技术报告：Llama 1、Llama 2、Llama 3 等",
    reference: {
      label: "Wikipedia：Llama (language model)",
      url: "https://en.wikipedia.org/wiki/Llama_(language_model)",
    },
  },
  {
    name: "GPT 系列",
    english: "GPT Series",
    icon: "🔄",
    hint: "OpenAI GPT 系列与对齐源头：GPT-3、InstructGPT 等",
    reference: {
      label: "Wikipedia：Generative pre-trained transformer",
      url: "https://en.wikipedia.org/wiki/Generative_pre-trained_transformer",
    },
  },
  {
    name: "NVIDIA 系列",
    english: "NVIDIA Series",
    icon: "🟩",
    hint: "英伟达 Nemotron 系列模型与 Cascade RL、多域蒸馏等后训练路线",
    reference: {
      label: "Wikipedia：Nvidia",
      url: "https://en.wikipedia.org/wiki/Nvidia",
    },
  },
  {
    name: "注意力机制",
    english: "Attention Mechanism",
    icon: "🎯",
    hint: "Transformer 的核心：稀疏化、线性化、分组查询等注意力结构的演进",
    reference: {
      label: "Wikipedia：Attention (machine learning)",
      url: "https://en.wikipedia.org/wiki/Attention_(machine_learning)",
    },
  },
  {
    name: "MoE 架构",
    english: "Mixture of Experts",
    icon: "🧩",
    hint: "混合专家：用极低激活比换超大总参数，路由与负载均衡是关键难题",
    reference: {
      label: "Wikipedia：Mixture of experts",
      url: "https://en.wikipedia.org/wiki/Mixture_of_experts",
    },
  },
  {
    name: "强化学习",
    english: "Reinforcement Learning",
    icon: "🕹️",
    hint: "强化学习在大模型后训练中的应用：PPO、GRPO、RLHF、RLVR 等，用偏好、规则或环境反馈优化策略",
    reference: {
      label: "Wikipedia：Reinforcement learning",
      url: "https://en.wikipedia.org/wiki/Reinforcement_learning",
    },
  },
  {
    name: "对齐与偏好优化",
    english: "Alignment and Preference Optimization",
    icon: "⚖️",
    hint: "RLHF / DPO 等：让模型输出符合人类偏好",
    reference: {
      label: "Wikipedia：Reinforcement learning from human feedback",
      url: "https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback",
    },
  },
  {
    name: "高效训练",
    english: "Efficient Training",
    icon: "⚡",
    hint: "优化器、数值精度、并行策略——同样的算力训出更强的模型",
    reference: {
      label: "Hugging Face：Efficient training",
      url: "https://huggingface.co/docs/transformers/performance",
    },
  },
  {
    name: "长上下文",
    english: "Long Context",
    icon: "📏",
    hint: "把上下文窗口推到 256K–1M 并保持检索精度",
    reference: {
      label: "Wikipedia：Large language model",
      url: "https://en.wikipedia.org/wiki/Large_language_model",
    },
  },
  {
    name: "多模态",
    english: "Multimodal Learning",
    icon: "👁️",
    hint: "视觉-语言联合建模：看懂图像与视频，而不只是文本",
    reference: {
      label: "Wikipedia：Multimodal learning",
      url: "https://en.wikipedia.org/wiki/Multimodal_learning",
    },
  },
  {
    name: "Agentic 训练",
    english: "Agentic Training",
    icon: "🤖",
    hint: "把多步工具调用、环境交互的完整轨迹作为训练单元",
    reference: {
      label: "Wikipedia：AI agent",
      url: "https://en.wikipedia.org/wiki/AI_agent",
    },
  },
  {
    name: "数据合成",
    english: "Synthetic Data",
    icon: "🛠️",
    hint: "程序化生成训练环境与任务，突破人工标注的规模与多样性上限",
    reference: {
      label: "Wikipedia：Synthetic data",
      url: "https://en.wikipedia.org/wiki/Synthetic_data",
    },
  },
  {
    name: "合成消费者",
    english: "Synthetic Consumers",
    icon: "🧑‍🤝‍🧑",
    hint: "用 AI 人格模拟真实消费者的思考与购买决策，补充或替代真人市场调研",
    description: "Synthetic consumers（合成消费者）指的是用 AI 构建的“虚拟消费者人格”（AI personas），用来模拟真实消费者如何思考、权衡并做出购买决策。它们就像数字化的市场调研受访者，可以在不需要真人小组（human panels）的情况下，对产品设计、定价、营销创意等给出即时反馈。",
    reference: {
      label: "Wikipedia：Consumer behaviour（相关概念）",
      url: "https://en.wikipedia.org/wiki/Consumer_behaviour",
    },
  },
  {
    name: "购买意愿",
    english: "Purchase Intent",
    icon: "🛍️",
    hint: "消费者购买某产品或服务的意向，常用 Likert 量表测量",
    reference: {
      label: "Wikipedia：Buyer decision process（相关概念）",
      url: "https://en.wikipedia.org/wiki/Purchase_decision",
    },
  },
  {
    name: "营销",
    english: "Marketing",
    icon: "📣",
    hint: "研究消费者行为、购买意愿、品牌与市场策略",
    reference: {
      label: "Wikipedia：Marketing",
      url: "https://en.wikipedia.org/wiki/Marketing",
    },
  },
  {
    name: "知识蒸馏",
    english: "Knowledge Distillation",
    icon: "💧",
    hint: "把强模型的 logits、soft targets、推理链或策略迁移到学生模型",
    reference: {
      label: "Wikipedia：Knowledge distillation",
      url: "https://en.wikipedia.org/wiki/Knowledge_distillation",
    },
  },
  {
    name: "在线蒸馏",
    english: "On-Policy Distillation",
    icon: "🎬",
    hint: "On-Policy Distillation：学生自己 rollout，老师在学生访问状态上逐 token 打分纠正",
    reference: {
      label: "Thinking Machines Lab：On-Policy Distillation",
      url: "https://thinkingmachines.ai/blog/on-policy-distillation/",
    },
  },
  {
    name: "推理优化",
    english: "Inference Optimization",
    icon: "🚀",
    hint: "部署侧提速降本：量化、投机解码、稀疏计算、KV cache 压缩",
    reference: {
      label: "Wikipedia：Model compression",
      url: "https://en.wikipedia.org/wiki/Model_compression",
    },
  },
  {
    name: "时间序列",
    english: "Time Series",
    icon: "📈",
    hint: "时序预测、补全、分类、异常检测，以及预训练模型向时序的跨域迁移",
    reference: {
      label: "Wikipedia：Time series",
      url: "https://en.wikipedia.org/wiki/Time_series",
    },
  },
  {
    name: "基础架构",
    english: "Foundational Architectures",
    icon: "🧱",
    hint: "奠基性工作：此后所有模型的共同骨架",
    reference: {
      label: "Wikipedia：Transformer (deep learning architecture)",
      url: "https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)",
    },
  },
];

/** name → PaperTag 的索引。 */
const BY_NAME = new Map(KEYWORDS.map((k) => [k.name, k]));

/** 全部 keyword 名称（注册表顺序）。 */
export function getAllKeywords(): string[] {
  return KEYWORDS.map((k) => k.name);
}

/** keyword 的图标；未注册的名称回退默认 🏷️。 */
export function getTagIcon(tag: string): string {
  return BY_NAME.get(tag)?.icon ?? "🏷️";
}

/** keyword 的图片图标路径；未配置则返回 undefined。 */
export function getTagIconSrc(tag: string): string | undefined {
  return BY_NAME.get(tag)?.iconSrc;
}

/** keyword 的一句话说明；未注册返回 undefined。 */
export function getTagHint(tag: string): string | undefined {
  return BY_NAME.get(tag)?.hint;
}

/** keyword 的标准英文表述；未注册返回 undefined。 */
export function getTagEnglish(tag: string): string | undefined {
  return BY_NAME.get(tag)?.english;
}

/** keyword 的较长背景解释；未配置时回退到 hint。 */
export function getTagDescription(tag: string): string | undefined {
  const entry = BY_NAME.get(tag);
  return entry?.description ?? entry?.hint;
}

/** keyword 的高认可度解释页面；未配置返回 undefined。 */
export function getTagReference(tag: string): PaperTag["reference"] | undefined {
  return BY_NAME.get(tag)?.reference;
}

/** 拼接 tooltip：中文名 · 英文名 · 说明。 */
export function getTagTitle(tag: string): string | undefined {
  const entry = BY_NAME.get(tag);
  if (!entry) return undefined;
  return [entry.name, entry.english, entry.hint].filter(Boolean).join(" · ");
}
