import type { Paper } from "@/lib/papers";

const paper = {
  slug: "kimi-k2",
  title: "Kimi K2：1T 参数 MoE 的 Agentic 训练",
  navTitle: "Kimi K2",
  paperTitle: "Kimi K2: Open Agentic Intelligence",
  desc: "1.04T 总参/32B 激活的超稀疏 MoE。MuonClip 优化器（Muon + QK-Clip）让 15.5T token 预训练零 loss spike；三步 agentic 数据合成管线 + 可验证奖励与 self-critique rubric 的 joint RL,non-thinking 模式下 SWE-bench Verified 65.8、Tau2-Bench 66.1。",
  motivation: "超大 MoE 要做 agent，首先卡在两件事：预训练容易 loss spike，后训练缺少可验证、多轮、工具化的数据闭环。Kimi K2 的动机是把“稳定训练 1T 级 MoE”和“训练会用工具的非思考模型”放到同一条流水线里解决，让开源模型不仅会答题，还会执行任务。",
  tags: ["Kimi 系列", "MoE 架构", "Agentic 训练", "数据合成", "高效训练", "强化学习"],
  icon: "⚡",
  authors: ["Kimi Team"],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2507.20534",
  pdfUrl: "https://arxiv.org/pdf/2507.20534",
  codeUrl: "https://huggingface.co/moonshotai/Kimi-K2-Instruct",
} satisfies Paper;

export default paper;
