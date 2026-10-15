import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "为什么 Qwen3 是后训练分水岭？",
    "answer": [
      "Qwen3 把混合推理、在线蒸馏和多阶段后训练系统化地放进一个开源模型家族中，展示了“会想”和“能高效部署”可以同时设计。",
      "它不仅报告模型结果，也给出从离线蒸馏到在线蒸馏、再到混合推理模式的训练路线。"
    ],
    "takeaway": "Qwen3 的重点是后训练范式，而不只是模型规模。"
  },
  {
    "id": "hybrid-thinking",
    "question": "混合推理是什么意思？",
    "answer": [
      "混合推理指模型既可以使用 thinking 模式进行长链推理，也可以使用 non-thinking 模式直接回答。",
      "这样同一个模型可以在复杂任务上花更多计算，在简单任务上保持低延迟。"
    ],
    "takeaway": "混合推理是在质量和成本之间按任务切换。"
  },
  {
    "id": "dense-moe",
    "question": "Dense 和 MoE 家族为什么要同时存在？",
    "answer": [
      "不同部署场景需要不同参数规模、激活成本和吞吐特性。Dense 模型简单稳定，MoE 模型可以在更大总参数下控制每 token 激活成本。",
      "Qwen3 同时发布多个尺寸，是为了覆盖从边缘部署到高性能服务的不同梯度。"
    ],
    "takeaway": "模型家族化本身就是部署策略的一部分。"
  },
  {
    "id": "opd",
    "question": "Qwen3 里的在线蒸馏为什么重要？",
    "answer": [
      "在线蒸馏让学生在自己生成的状态上接受老师信号，能比继续离线 SFT 或单纯 RL 更高效地复制推理行为。",
      "报告中的 GPU hours 对比也让 OPD 成为 Qwen3 后训练路线中最受关注的部分之一。"
    ],
    "takeaway": "Qwen3 把 OPD 从论文概念推进到大模型训练配方中。"
  },
  {
    "id": "limits",
    "question": "读 Qwen3 结果时要注意什么？",
    "answer": [
      "不同尺寸、Dense/MoE、Thinking/Instruct 版本的能力边界不同，不能只拿一个榜单分数代表整个家族。",
      "另外，在线蒸馏效果依赖老师能力、prompt 选择和训练状态，并不是对所有任务都无条件增强。"
    ],
    "takeaway": "Qwen3 要按模型版本和评测口径分别读。"
  },
  {
    "id": "thinking-toggle",
    "question": "为什么一个模型要同时支持 thinking 和 non-thinking？",
    "answer": [
      "复杂任务需要显式推理，简单任务则更需要低延迟和简洁回答。一个模型支持两种模式，可以按任务选择计算预算。",
      "这也让部署方不必维护两套完全不同模型。"
    ],
    "takeaway": "混合模式是在能力和延迟之间动态折中。"
  },
  {
    "id": "gpu-hours",
    "question": "Qwen3 的 GPU hours 对比应该怎么读？",
    "answer": [
      "GPU hours 只能在相同实验设置下比较。OPD 相对 RL 更省的结论有意义，但不能拿不同 harness、不同数据或不同模型规模直接横排。",
      "读数字时要看任务、起点 checkpoint、teacher 和评测口径。"
    ],
    "takeaway": "成本数字必须连同实验口径一起读。"
  },
  {
    "id": "qwen3-vs-tml",
    "question": "Qwen3 和 Thinking Machines OPD 的关系是什么？",
    "answer": [
      "Qwen3 技术报告给出 OPD 在大模型后训练中的结果，Thinking Machines 博客则用更教学化的方式解释 OPD 为什么高效。",
      "两者可以互相印证：一个提供报告数字，一个提供机制和 recipe 解释。"
    ],
    "takeaway": "Qwen3 给证据，TML 博客讲机制。"
  }
] satisfies PaperFAQ;

export default faq;
