import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "paper-status",
    "question": "GLM-5 有论文吗？应该怎么看？",
    "answer": [
      "GLM-5 对应的是官方技术报告，而不是只靠发布博客的信息。报告提供了规模、架构、后训练和评测的系统说明。",
      "阅读时要区分报告明确给出的内容和外界推测，不补造数据配比、teacher routing 或内部系统细节。"
    ],
    "takeaway": "有官方报告，但仍要按披露边界阅读。"
  },
  {
    "id": "agentic-engineering",
    "question": "为什么叫 Agentic Engineering？",
    "answer": [
      "它强调从 vibe coding 走向更长程、更工程化的软件任务：模型不仅写片段代码，还要规划、调用工具、迭代修复和处理真实环境反馈。",
      "因此训练重点不只是代码能力，而是 agent RL 和工具使用轨迹。"
    ],
    "takeaway": "Agentic Engineering 是面向长程软件工程任务的模型定位。"
  },
  {
    "id": "scale",
    "question": "744B/40B 和 28.5T token 说明了什么？",
    "answer": [
      "这些数字说明 GLM-5 在总参数、激活参数和训练 token 上都比前代进一步扩展，同时仍然通过 MoE 控制每 token 计算量。",
      "评估这类模型时，要同时看总参数、激活参数、训练数据规模和推理成本。"
    ],
    "takeaway": "大总参不等于高推理成本，关键看激活参数和架构。"
  },
  {
    "id": "dsa-slime",
    "question": "DSA 和 slime 为什么重要？",
    "answer": [
      "DSA 关注长上下文注意力成本，让长程训练与推理更可承受；slime 则是异步 RL 基础设施，支撑 rollout 和训练解耦。",
      "这说明 GLM-5 的核心不只在模型结构，也在训练系统能否支撑长程 agent RL。"
    ],
    "takeaway": "长程 agent 能力依赖架构和基础设施共同扩展。"
  },
  {
    "id": "online-distill",
    "question": "GLM-5 的在线蒸馏在路线里起什么作用？",
    "answer": [
      "在线蒸馏用于把长程 agent 能力和更强策略稳定压回主模型，减少只靠 RL 探索带来的不稳定和成本。",
      "它延续了近期大模型后训练中“RL 探索 + 蒸馏巩固”的路线。"
    ],
    "takeaway": "在线蒸馏是把探索成果固化进主模型的环节。"
  },
  {
    "id": "vibe-to-agentic",
    "question": "从 vibe coding 到 agentic engineering 的区别是什么？",
    "answer": [
      "vibe coding 更像让模型生成代码片段或辅助开发；agentic engineering 强调模型能在真实工程环境里规划、执行、测试和修复。",
      "这要求训练覆盖更长程的软件任务轨迹。"
    ],
    "takeaway": "Agentic engineering 是从写代码走向经营工程任务。"
  },
  {
    "id": "long-context-agent",
    "question": "长上下文为什么对软件工程 Agent 重要？",
    "answer": [
      "真实代码仓库包含大量文件、历史上下文和依赖关系。Agent 需要在长上下文中定位相关信息并保持任务状态。",
      "因此长上下文效率直接影响工程任务可行性。"
    ],
    "takeaway": "软件工程 Agent 的上下文就是工作空间。"
  },
  {
    "id": "slime-async",
    "question": "异步 RL 基础设施为什么会成为论文重点？",
    "answer": [
      "长程 agent rollout 昂贵且耗时，如果生成和训练强同步，会严重拖慢迭代。",
      "异步基础设施可以让 rollout、评分和更新更高吞吐地协同。"
    ],
    "takeaway": "Agent RL 能力依赖训练系统吞吐。"
  }
] satisfies PaperFAQ;

export default faq;
