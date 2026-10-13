import type { Paper } from "@/lib/papers";

const paper = {
  slug: "minillm-gu",
  title: "MiniLLM：用反向 KL 做在线蒸馏",
  navTitle: "MiniLLM",
  paperTitle: "MiniLLM: On-Policy Distillation of Large Language Models",
  desc: "早期 OPD 代表：把 LLM 蒸馏从 forward KL 改成 reverse KL，让学生在自己的生成分布上学习老师认可的高概率模式，缓解长文本暴露偏差。",
  motivation: "传统知识蒸馏常用 forward KL 覆盖老师分布，但生成式 LLM 的长尾 token 会让小模型变得发散，长文本里暴露偏差不断累积。MiniLLM 要解决的是用 reverse KL 和 on-policy 优化，让学生只在自己会生成的轨迹上学习老师真正认可的模式。",
  tags: ["在线蒸馏", "知识蒸馏", "对齐与偏好优化"],
  icon: "🪶",
  authors: ["Yuxian Gu", "Li Dong", "Furu Wei", "Minlie Huang"],
  venue: "ICLR",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2306.08543",
} satisfies Paper;

export default paper;
