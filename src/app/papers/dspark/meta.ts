import type { Paper } from "@/lib/papers";

const paper = {
  slug: "dspark",
  title: "DSpark：半自回归草稿与置信度调度的投机解码",
  navTitle: "DSpark",
  paperTitle: "DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation",
  desc: "DSpark 用并行骨干 + 轻量顺序头做半自回归草稿，缓解并行 drafter 的 suffix decay；再用置信度头与硬件感知调度器按负载动态决定验证长度。离线 accepted length 超过 Eagle3/DFlash 约 16%–31%，DeepSeek-V4 线上同等吞吐下每用户生成快 60%–85%。",
  motivation: "并行草稿一次前向生成整块 token，却因各位置独立预测而接受率快速衰减；同时无差别验证长块会在高并发下浪费关键 batch capacity。DSpark 要同时解决草稿质量与验证预算这两个瓶颈，而不是在自回归和并行之间二选一。",
  tags: ["DeepSeek 系列", "推理优化"],
  icon: "✨",
  authors: ["Xin Cheng", "Xingkai Yu", "Chenze Shao", "et al."],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2607.05147",
  sourceUrl: "https://arxiv.org/pdf/2607.05147",
  codeUrl: "https://github.com/deepseek-ai/DeepSpec",
} satisfies Paper;

export default paper;
