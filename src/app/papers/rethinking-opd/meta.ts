import type { Paper } from "@/lib/papers";

const paper = {
  slug: "rethinking-opd",
  title: "Rethinking OPD：强老师为何也会教失败",
  navTitle: "Rethinking OPD",
  paperTitle: "Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe",
  desc: "系统解释 OPD 成败：teacher 和 student 要有兼容思考模式，teacher 还必须提供 student 未见过的新能力；有效信号集中在高概率 token，失败可用 cold start 与 teacher-aligned prompt selection 修复。",
  motivation: "OPD 很容易被理解成“更强老师逐 token 打分，小学生自然变强”，但实践中更大 teacher 也可能没有收益。Rethinking OPD 要解决的是解释这种失败：什么条件下 teacher signal 是可吸收的新信息，什么情况下只是昂贵的噪声。",
  tags: ["在线蒸馏", "知识蒸馏", "对齐与偏好优化", "强化学习"],
  icon: "🔍",
  authors: ["Yaxuan Li", "et al."],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2604.13016",
  pdfUrl: "https://arxiv.org/pdf/2604.13016",
  codeUrl: "https://github.com/thunlp/OPD",
} satisfies Paper;

export default paper;
