import type { Paper } from "@/lib/papers";

const paper = {
  slug: "kd-survey-gou-2021",
  title: "Knowledge Distillation Survey：知识蒸馏全景图",
  navTitle: "KD Survey · Gou",
  paperTitle: "Knowledge Distillation: A Survey",
  desc: "Gou、Yu、Maybank、Tao 的 KD 综述：把知识蒸馏整理成“知识类型 × 训练方式 × 师生结构 × 算法族 × 应用场景”的分类坐标系，从 response / feature / relation knowledge 到 offline / online / self-distillation，适合作为 Hinton KD 之后、现代 LLM 蒸馏之前的全景地图。",
  motivation: "读完 Hinton KD 后，容易以为知识蒸馏就是高温 soft targets 和 KL 匹配；但 2015—2020 年间，KD 已经扩展到中间特征、样本关系、在线互教、自蒸馏、多教师和多任务应用。本文要解决的是：如何把分散的 KD 方法整理成一套可复用的分类地图，让后续论文可以按“蒸什么、怎么蒸、谁教谁、用在哪”来定位。",
  tags: ["知识蒸馏", "高效训练", "基础架构"],
  icon: "🗺️",
  authors: ["Jianping Gou", "Baosheng Yu", "Stephen J. Maybank", "Dacheng Tao"],
  venue: "International Journal of Computer Vision",
  year: 2021,
  date: "2020-06",
  arxivUrl: "https://arxiv.org/abs/2006.05525",
  pdfUrl: "https://arxiv.org/pdf/2006.05525",
} satisfies Paper;

export default paper;
