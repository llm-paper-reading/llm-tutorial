import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "Kimi K2 想把什么做到极限？",
    "answer": [
      "K2 强调 token 效率和 agentic 能力：用更有效的数据、优化器和后训练，让大规模 MoE 在工具和任务环境中更强。",
      "它不是只追求参数规模，而是追求每个训练 token 和每次推理计算产生更多能力。"
    ],
    "takeaway": "K2 的关键词是 token 效率和 agentic intelligence。"
  },
  {
    "id": "muonclip",
    "question": "MuonClip 为什么重要？",
    "answer": [
      "Muon 类优化器追求更快、更适合大模型的更新方向，但稳定性是大规模训练的关键问题。MuonClip 试图在速度和稳定之间取得平衡。",
      "优化器设计直接影响训练能否在巨大规模上保持可控。"
    ],
    "takeaway": "优化器是大模型性价比路线的一部分。"
  },
  {
    "id": "data-rewrite",
    "question": "预训练数据“改写，而非重复”是什么意思？",
    "answer": [
      "与其简单重复低质量 token，不如通过改写、清洗和合成提升信息密度。",
      "这呼应了 token 效率目标：同样训练预算下，让模型看到更有价值的样本。"
    ],
    "takeaway": "数据质量和信息密度比 token 数量本身更关键。"
  },
  {
    "id": "agentic-data",
    "question": "Agentic 数据合成为何重要？",
    "answer": [
      "真实 agent 任务需要规划、工具调用、环境反馈和多步修正。静态文本很难覆盖这些状态。",
      "合成 agentic 数据是在可控环境中制造这类轨迹，让模型学习更接近真实任务的行为。"
    ],
    "takeaway": "Agent 能力需要轨迹数据，而不只是问答数据。"
  },
  {
    "id": "joint-rl",
    "question": "Joint RL 中可验证奖励和自我批评分别起什么作用？",
    "answer": [
      "可验证奖励给模型明确的成功信号，自我批评帮助模型在开放任务中评估和改进自己的输出。",
      "两者结合能覆盖更广任务，但也更依赖奖励设计和环境质量。"
    ],
    "takeaway": "Agent RL 需要多种反馈信号共同约束。"
  },
  {
    "id": "open-agentic",
    "question": "Open Agentic Intelligence 指什么？",
    "answer": [
      "它强调模型在开放任务中调用工具、规划步骤并完成复杂目标的能力。",
      "这比单轮问答更接近真实智能体使用场景。"
    ],
    "takeaway": "Agentic intelligence 看的是任务闭环能力。"
  },
  {
    "id": "moe-scale",
    "question": "1T 参数 MoE 的优势是什么？",
    "answer": [
      "大总参数提供容量，MoE 只激活部分专家来控制每 token 成本。",
      "这种设计适合在保持推理成本可控的同时扩展知识和能力。"
    ],
    "takeaway": "MoE 用稀疏激活换大容量。"
  },
  {
    "id": "self-critique",
    "question": "自我批评在 agentic 训练里有什么作用？",
    "answer": [
      "开放任务很难总有可验证奖励，自我批评可以提供额外反馈，帮助模型发现计划或输出中的问题。",
      "但自我批评也可能自信地错，因此通常需要和可验证信号或外部环境结合。"
    ],
    "takeaway": "自我批评是有用反馈，但不能单独保证正确。"
  }
] satisfies PaperFAQ;

export default faq;
