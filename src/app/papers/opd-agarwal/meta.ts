import type { Paper } from "@/lib/papers";

const paper = {
  slug: "opd-agarwal",
  title: "OPD：学生自己犯错，老师逐步纠正",
  navTitle: "OPD / GKD",
  paperTitle: "On-policy Distillation of Language Models: Learning from Self-Generated Mistakes",
  desc: "把蒸馏从老师轨迹搬到学生 rollout：GKD 用 teacher top-k 前向 KL 做分布级监督，PG OPD 把反向 KL 变成 token reward，MOPD 再用 routing 合并多个领域老师。",
  motivation: "离线蒸馏只在老师或固定数据轨迹上训练，学生一旦生成时跑偏，就会进入训练集中没见过的状态。OPD 要解决的是把老师的逐 token 稠密信号施加到学生自己访问的 on-policy 状态上，兼得 RL 的状态覆盖与蒸馏的高信用分配效率。",
  tags: ["在线蒸馏", "知识蒸馏", "强化学习", "对齐与偏好优化"],
  icon: "🎬",
  authors: ["Rishabh Agarwal", "et al."],
  venue: "ICLR",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2306.13649",
} satisfies Paper;

export default paper;
