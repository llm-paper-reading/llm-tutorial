import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "Nemotron-Cascade 2 想解决什么问题？",
    "answer": [
      "它关注小激活 MoE 如何通过更强后训练追上更大模型。问题不只是模型大小，而是如何组织一串后训练阶段，把能力逐步推高。",
      "Cascade RL 和多域 OPD 共同服务于这个目标：先分阶段强化，再把不同领域能力合回统一模型。"
    ],
    "takeaway": "重点是后训练级联，而不是单轮 RL。"
  },
  {
    "id": "cascade-rl",
    "question": "Cascade RL 和普通 RL 有什么区别？",
    "answer": [
      "Cascade RL 把后训练拆成多个阶段，每个阶段针对不同能力或难度区间继续优化。",
      "这种方式更像课程学习：不是一次性把所有任务混在一起，而是让模型按能力路径逐步升级。"
    ],
    "takeaway": "Cascade RL 是分阶段推进能力边界。"
  },
  {
    "id": "mopd",
    "question": "为什么 Cascade RL 后还需要 MOPD？",
    "answer": [
      "级联 RL 可能得到多个阶段或多个领域的中间老师。MOPD 的作用是把这些分散的强项蒸回一个学生模型里。",
      "这样最终模型能同时吸收不同阶段、不同领域的能力，而不必部署多个专用模型。"
    ],
    "takeaway": "MOPD 是 Cascade 训练后能力合并的工具。"
  },
  {
    "id": "density",
    "question": "30B/3B 的智能密度应该怎么理解？",
    "answer": [
      "这类表述强调总参数和激活参数之间的效率：模型可能总参数较大，但每 token 只激活较小部分，从而控制推理成本。",
      "评估时既要看分数，也要看激活参数、吞吐、上下文长度和部署条件。"
    ],
    "takeaway": "智能密度要结合激活成本看。"
  },
  {
    "id": "limits",
    "question": "这篇报告读的时候要谨慎什么？",
    "answer": [
      "如果公开材料偏摘要化，很多训练细节、数据构成、teacher routing 或超参可能没有完整披露。",
      "因此适合把它作为路线判断和对比材料，而不是把每个未公开环节都当成确定配方。"
    ],
    "takeaway": "公开摘要能确认方向，但不能补造训练细节。"
  },
  {
    "id": "multi-domain",
    "question": "多域 OPD 中“多域”指什么？",
    "answer": [
      "不同能力领域如数学、代码、指令遵循、工具使用等可能由不同老师或不同阶段模型更擅长。",
      "多域 OPD 试图把这些领域强项统一蒸回一个模型。"
    ],
    "takeaway": "多域 OPD 是跨能力合并。"
  },
  {
    "id": "small-active-moe",
    "question": "小激活 MoE 为什么有吸引力？",
    "answer": [
      "MoE 可以拥有较大总参数提供容量，但每 token 只激活部分专家，从而降低推理计算。",
      "如果后训练足够强，小激活模型可能获得很高的单位成本能力。"
    ],
    "takeaway": "小激活 MoE 追求的是智能密度。"
  },
  {
    "id": "compare-routes",
    "question": "它和 DeepSeek / GLM / Kimi 路线怎么对照？",
    "answer": [
      "这些路线都在结合 MoE、RL、蒸馏和长上下文效率，但侧重点不同：有的重架构，有的重 agent 环境，有的重级联后训练。",
      "Nemotron-Cascade 2 的标签更偏后训练流程设计。"
    ],
    "takeaway": "同样是 MoE+后训练，不同团队优化的瓶颈不同。"
  }
] satisfies PaperFAQ;

export default faq;
