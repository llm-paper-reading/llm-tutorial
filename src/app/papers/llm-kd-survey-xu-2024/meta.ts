import type { Paper } from "@/lib/papers";

const paper = {
  slug: "llm-kd-survey-xu-2024",
  title: "LLM KD Survey：大模型知识蒸馏路线图",
  navTitle: "LLM KD · Xu",
  paperTitle: "A Survey on Knowledge Distillation of Large Language Models",
  desc: "面向 LLM 的知识蒸馏综述：系统梳理大模型蒸馏的算法、技能迁移、垂直领域应用、数据增强、模型压缩、自我提升和未来方向，强调 LLM KD 已从传统压缩扩展为能力迁移与后训练基础设施。",
  motivation: "传统 KD 主要围绕分类器压缩、soft targets 和中间特征迁移；LLM 时代的蒸馏还要处理指令遵循、推理、对齐、代码、工具使用、领域适配和黑盒教师等问题。本文要解决的是：如何把大模型知识蒸馏从“压小模型”重新整理成 LLM 后训练、技能迁移和数据生成的路线图。",
  tags: ["知识蒸馏", "在线蒸馏", "高效训练", "对齐与偏好优化"],
  icon: "🧭",
  authors: [
    "Xiaohan Xu",
    "Ming Li",
    "Chongyang Tao",
    "Tao Shen",
    "Reynold Cheng",
    "Jinyang Li",
    "Can Xu",
    "Dacheng Tao",
    "Tianyi Zhou",
  ],
  venue: "arXiv",
  year: 2024,
  date: "2024-02",
  arxivUrl: "https://arxiv.org/abs/2402.13116",
  pdfUrl: "https://arxiv.org/pdf/2402.13116",
} satisfies Paper;

export default paper;
