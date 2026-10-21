import type { Paper } from "@/lib/papers";

const paper = {
  slug: "llama3",
  title: "Llama 3：15T token 与计算最优的 405B",
  navTitle: "Llama 3",
  paperTitle: "The Llama 3 Herd of Models",
  desc: "Llama 3 技术报告：15T token 预训练、IsoFLOPs scaling law 外推出 402B/16.55T 的计算最优点并训出 405B dense、4D 并行（TP/CP/PP/DP）在 16K H100 上 38–43% MFU、六阶段长上下文渐进到 128K、后训练用「拒绝采样 + SFT + DPO」六轮迭代。多模态用组合式 adapter 方案。",
  motivation: "开源模型的差距不再在架构而在数据质量与训练规模：Llama 2 只用了 1.8T token、上下文 4K。Llama 3 的动机是三个杠杆一起拉——把数据清洗与配比做到极致、用 scaling law 先算清 405B 的计算最优点、用 4D 并行把万卡集群跑满，同时后训练用可迭代的多轮 SFT+DPO 把指令跟随与工具使用做进开源权重。",
  tags: ["Llama 系列", "高效训练", "长上下文", "数据合成", "基础架构"],
  icon: "🦙",
  authors: ["Llama Team", "AI @ Meta"],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2407.21783",
  pdfUrl: "https://arxiv.org/pdf/2407.21783",
} satisfies Paper;

export default paper;
