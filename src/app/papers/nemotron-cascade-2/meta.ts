import type { Paper } from "@/lib/papers";

const paper = {
  slug: "nemotron-cascade-2",
  title: "Nemotron-Cascade 2：Cascade RL 与多域 OPD",
  navTitle: "Nemotron-Cascade 2",
  paperTitle: "Nemotron-Cascade 2: Post-Training LLMs with Cascade RL and Multi-Domain On-Policy Distillation",
  desc: "30B MoE / 3B 激活的高智能密度后训练模型：SFT 后扩展 Cascade RL 覆盖推理与智能体任务，再用 MOPD 从多领域中间老师恢复回退 benchmark。",
  motivation: "多阶段 RL 往往会在某些 benchmark 上涨分、同时让其他能力回退；小激活 MoE 还必须把每一点后训练收益压缩得足够高效。Nemotron-Cascade 2 要解决的是用 Cascade RL 拉高多域能力，再用多域在策略蒸馏把各阶段最强能力稳定合回一个开放模型。",
  tags: ["在线蒸馏", "强化学习", "知识蒸馏", "Agentic 训练", "MoE 架构"],
  icon: "⛓️",
  authors: ["Zhuolin Yang", "et al."],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2603.19220",
  pdfUrl: "https://arxiv.org/pdf/2603.19220",
} satisfies Paper;

export default paper;
