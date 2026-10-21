import type { Paper } from "@/lib/papers";

const paper = {
  slug: "qwen2",
  title: "Qwen2：GQA、细粒度 MoE 与对齐范式切换",
  navTitle: "Qwen2",
  paperTitle: "Qwen2 Technical Report",
  desc: "Qwen2 系列技术报告：GQA 替换 MHA、Qwen2-57B-A14B 的细粒度专家 + 共享专家 + upcycling 初始化、7T token 预训练、DCA+YARN 推到 128K、后训练从 PPO 切到 SFT+DPO。Qwen2-72B base 在 MMLU 84.2、GSM8K 89.5。",
  motivation: "Qwen1 的 PPO 对齐工程重、KV cache 大、上下文只有推理期技巧撑着。Qwen2 的动机是一次架构级换代：用 GQA 省推理内存、用细粒度 MoE 在中等激活参数下堆总容量、用轻量 DPO 替换四模型 PPO，并把长上下文从推理期技巧变成预训练末期的正式阶段。",
  tags: ["Qwen 系列", "MoE 架构", "高效训练", "长上下文", "对齐与偏好优化"],
  icon: "🧭",
  authors: ["An Yang", "et al."],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2407.10671",
  pdfUrl: "https://arxiv.org/pdf/2407.10671",
} satisfies Paper;

export default paper;
