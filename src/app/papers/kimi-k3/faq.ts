import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "Kimi K3 面对哪三堵墙？",
    "answer": [
      "3T 级模型会同时遇到长上下文注意力成本、MoE 路由稳定性和训练 / 推理效率瓶颈。",
      "K3 用混合注意力、LatentMoE 和路由均衡等机制应对这些问题。"
    ],
    "takeaway": "K3 是超大规模下的效率与稳定性工程。"
  },
  {
    "id": "kda",
    "question": "KDA 的“擦除再写入”是什么意思？",
    "answer": [
      "KDA 用类似 delta rule 的线性注意力更新记忆：先对旧信息进行遗忘或修正，再写入新信息。",
      "这样可以用更低复杂度维护长程状态，而不必每次完整扫描全部历史 token。"
    ],
    "takeaway": "KDA 试图把长上下文记忆变成可更新状态。"
  },
  {
    "id": "hybrid-attention",
    "question": "为什么 KDA 还要配 Gated MLA？",
    "answer": [
      "线性注意力效率高，但表达能力和精确检索能力可能不足；MLA 类注意力能补充更强的内容寻址。",
      "混合配比是在效率和表达能力之间折中。"
    ],
    "takeaway": "混合注意力用不同机制覆盖不同信息路径。"
  },
  {
    "id": "latent-moe",
    "question": "Stable LatentMoE 解决什么问题？",
    "answer": [
      "超大 MoE 路由容易出现专家过载、路由塌缩或负载不均。LatentMoE 通过潜空间路由和均衡策略提升稳定性。",
      "Quantile Balancing 这类方法的目标是更直接地把专家负载拉回均衡区间。"
    ],
    "takeaway": "MoE 规模越大，路由稳定越关键。"
  },
  {
    "id": "rl-synthesis",
    "question": "知识图谱引导的 RL 任务合成有什么意义？",
    "answer": [
      "知识图谱可以帮助系统性覆盖概念、关系和任务难度，减少合成任务的随机性。",
      "对大模型 RL 来说，任务分布设计本身就是能力边界设计。"
    ],
    "takeaway": "任务合成决定模型会在哪些能力维度上继续进化。"
  },
  {
    "id": "attnres",
    "question": "AttnRes 想解决什么？",
    "answer": [
      "超深模型中注意力输出和残差路径的比例会影响训练稳定和信息保留。AttnRes 用注意力化残差改善信息流。",
      "它体现了超大模型中残差设计也需要重新工程化。"
    ],
    "takeaway": "大模型稳定性不只看主干层，也看残差路径。"
  },
  {
    "id": "quantile-balancing",
    "question": "Quantile Balancing 为什么比固定步调节更直接？",
    "answer": [
      "固定步调节负载可能反应慢或震荡，Quantile Balancing 试图根据负载分布直接求更合适的均衡点。",
      "在大规模专家路由中，负载控制需要更精准。"
    ],
    "takeaway": "专家越多，均衡算法越关键。"
  },
  {
    "id": "frontier-open",
    "question": "Kimi K3 的“开源前沿”应该怎么理解？",
    "answer": [
      "它试图在超大参数、混合注意力和 MoE 路由上推进开源模型上限。",
      "但前沿能力仍需结合训练细节、评测口径和部署成本来判断。"
    ],
    "takeaway": "开源前沿既是能力问题，也是系统成本问题。"
  }
] satisfies PaperFAQ;

export default faq;
