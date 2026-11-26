import type { Paper } from "@/lib/papers";

const paper = {
  slug: "rethinking-opd",
  title: "Rethinking OPD：强老师为何也会教不动",
  navTitle: "Rethinking OPD",
  paperTitle: "Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe",
  desc: "系统分析 OPD 成败：teacher 与 student 的思考模式要兼容，teacher 还要带来学生没见过的新能力；有效梯度集中在高概率 overlap token，失败可用 off-policy cold start 与 teacher-aligned prompts 修复，密集奖励在长轨迹上会退化。",
  motivation: "OPD 常被理解成“更强 teacher 逐 token 打分，student 自然变强”，但论文发现更强的 teacher 可能完全教不动，反而更弱的 teacher 能从更低的初始对齐出发成功。本文要解释的是：什么条件下 teacher 的信号是可吸收的新信息，什么情况下只是昂贵的噪声。",
  tags: ["在线蒸馏", "知识蒸馏", "强化学习"],
  icon: "🔍",
  authors: ["Yaxuan Li", "Yuxin Zuo", "Bingxiang He", "et al."],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2604.13016",
  pdfUrl: "https://arxiv.org/pdf/2604.13016",
  codeUrl: "https://github.com/thunlp/OPD",
} satisfies Paper;

export default paper;
