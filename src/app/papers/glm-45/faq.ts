import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "GLM-4.5 主要想解决什么问题？",
    "answer": [
      "GLM-4.5 关注一个模型如何同时具备 agent、reasoning、coding 等 ARC 能力，而不是在单一能力上极致优化。",
      "它用 MoE 架构控制激活成本，再用专家模型迭代和自蒸馏把多个领域能力合入统一模型。"
    ],
    "takeaway": "GLM-4.5 的关键词是 ARC 能力整合。"
  },
  {
    "id": "moe",
    "question": "为什么用 sigmoid 门控和无辅助损失均衡？",
    "answer": [
      "MoE 的难点是路由既要选对专家，又要避免少数专家过载。无辅助损失的均衡思路尝试减少传统 auxiliary loss 对主任务的干扰。",
      "sigmoid 门控与均衡机制共同服务于稳定训练和高效激活。"
    ],
    "takeaway": "路由设计同时影响质量、稳定性和吞吐。"
  },
  {
    "id": "expert-iteration",
    "question": "专家模型迭代是什么意思？",
    "answer": [
      "先在推理、代码、agent 等领域训练更专门的模型或能力，再把这些强能力通过蒸馏等方式汇总回主模型。",
      "这比直接把所有数据混训更有结构，可以减少不同能力之间的互相干扰。"
    ],
    "takeaway": "先分领域变强，再统一合流。"
  },
  {
    "id": "agentic-data",
    "question": "Agentic 数据为什么重要？",
    "answer": [
      "Agent 能力需要模型在环境中规划、调用工具、处理反馈。单纯静态问答数据很难覆盖这种长程交互。",
      "因此报告强调构造 agentic 数据和 RL 环境，让模型在更接近真实任务的轨迹上训练。"
    ],
    "takeaway": "Agent 能力来自环境轨迹，而不只是答案文本。"
  },
  {
    "id": "limits",
    "question": "读 GLM-4.5 的榜单时要注意什么？",
    "answer": [
      "不同模型在参数量、激活参数、工具环境、评测 harness 和上下文长度上差异很大，不能只按单一榜单横排。",
      "更合理的读法是看它在 ARC 三条能力线上的均衡性，以及单位激活成本下的表现。"
    ],
    "takeaway": "GLM-4.5 应按能力覆盖和效率一起评估。"
  },
  {
    "id": "arc",
    "question": "ARC 三类能力为什么要一起训练？",
    "answer": [
      "真实 agent 任务往往同时需要推理、代码和工具调用。单独强化某一类能力，可能无法解决长程任务中的能力组合问题。",
      "GLM-4.5 把 ARC 作为统一目标，说明它更关注综合智能体表现。"
    ],
    "takeaway": "Agentic 任务需要能力组合，而不是单项冠军。"
  },
  {
    "id": "thinking-mode",
    "question": "thinking / non-thinking 双模式有什么价值？",
    "answer": [
      "复杂任务可以使用 thinking 获得更强推理，简单任务则用 non-thinking 降低延迟和成本。",
      "双模式让同一模型适配不同任务预算。"
    ],
    "takeaway": "双模式是推理预算控制接口。"
  },
  {
    "id": "domain-experts",
    "question": "领域专家为什么最后还要蒸回一个模型？",
    "answer": [
      "多个专家分别强，但部署和调度复杂。蒸回一个统一模型可以减少多模型系统的运行成本。",
      "这也能让不同领域能力在共享底座中互相补充。"
    ],
    "takeaway": "专家迭代的终点是统一可部署模型。"
  }
] satisfies PaperFAQ;

export default faq;
