import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "Mixtral 在 MoE 演进里的位置？",
    answer: [
      "它是第一个质量过硬的开源稀疏 MoE：47B 总参/13B 激活打平甚至超过 Llama 2 70B，把「MoE = 省钱不掉分」变成行业共识。",
      "站内 [Qwen2](/papers/qwen2) 的细粒度专家、[DeepSeek-V3](/papers/deepseek-v3) 的路由设计都把它当作对照系。"
    ],
    takeaway: "2024 年开源 MoE 浪潮的起点，欧洲线代表作。"
  },
  {
    id: "architecture",
    question: "8×7B 的参数账怎么算？",
    answer: [
      "基于 Mistral 7B：每层 FFN 换成 8 个同构专家，路由每 token 选 2 个加权求和。",
      "总参数 47B ≈ 7B 的注意力与嵌入共享 + 8 份 FFN；激活 13B ≈ 共享部分 + 2 份 FFN——所以叫 8×7B 而不是 56B。"
    ],
    takeaway: "MoE 的「×」是 FFN 复制数，注意力层是共享的。"
  },
  {
    id: "results",
    question: "「超过 Llama 2 70B」的口径是什么？",
    answer: [
      "多数评测（数学、代码、多语言显著领先；英语知识持平）上 13B 激活的 Mixtral 匹配或超过 70B dense。",
      "部署侧：低 batch 下推理更快（激活少）、大 batch 下吞吐更高——质量-成本曲线整体占优。"
    ],
    takeaway: "读作「同成本更强」而非「绝对最强」——对照的 70B 是 2023 年的配方。"
  },
  {
    id: "routing",
    question: "专家真的按领域分工吗？",
    answer: [
      "没有——这是论文最有意思的发现：在 Pile 各子域（ArXiv/生物/哲学等）上专家分配分布几乎一致，与均匀假设相差无几。",
      "真正的模式是语法与位置局部性：Python 的 self、英文的 Question 等词元稳定路由到同一专家；相邻 token 常走同一路径。"
    ],
    takeaway: "路由学到的是 token 级语法特征，不是人类想象的「领域专家」。"
  },
  {
    id: "instruct",
    question: "Instruct 版怎么训的？",
    answer: [
      "SFT + DPO（与 [Qwen2](/papers/qwen2) 同期的轻对齐路线），人类评测超过 GPT-3.5 Turbo、Claude-2.1、Gemini Pro。",
      "偏差与情感平衡（BBQ、BOLD）也更好——论文报告了这点，在当时的开源模型里少见。"
    ],
    takeaway: "MoE 基座对标准后训练完全兼容，无需特殊处理。"
  },
  {
    id: "limits",
    question: "读 Mixtral 要注意什么？",
    answer: [
      "8×7B 是「粗粒度」MoE（8 个大专家选 2 个）；Qwen2-57B-A14B 证明了细粒度（64 小专家选 8 + 共享）组合更灵活。",
      "路由负载均衡依赖训练期的辅助损失，论文未展开（DeepSeek-V3 的无损均衡是后续改进）；报告篇幅短，训练细节披露有限。"
    ],
    takeaway: "架构示范价值大于 recipe 披露价值——细节要去后续工作里找。"
  }
];

export default faq;
