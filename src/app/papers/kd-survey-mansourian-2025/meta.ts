import type { Paper } from "@/lib/papers";

const paper = {
  slug: "kd-survey-mansourian-2025",
  title: "A Comprehensive Survey：知识蒸馏新全景",
  navTitle: "KD Survey · Mansourian",
  paperTitle: "A Comprehensive Survey on Knowledge Distillation",
  desc: "Mansourian 等人的 2025 年 KD 综述：面向大型神经网络、Transformer、视觉语言模型和语言模型的实用部署，系统覆盖蒸馏来源、训练方案、算法、模态专用蒸馏、应用、方法对比、开放挑战和未来方向。",
  motivation: "Gou 2021 已经给出经典 KD 的分类地图，但 2021 之后，diffusion models、3D data、foundation models、Transformers、VLM 和 LLMs 让蒸馏问题明显扩展。本文要解决的是：如何用更新的视角重新梳理 KD，让它覆盖现代大模型和多模态模型的压缩、适配与部署。",
  tags: ["知识蒸馏", "高效训练", "基础架构", "多模态"],
  icon: "🧾",
  authors: [
    "Amir M. Mansourian",
    "Rozhan Ahmadi",
    "Masoud Ghafouri",
    "Amir Mohammad Babaei",
    "Elaheh Badali Golezani",
    "Zeynab Yasamani Ghamchi",
    "Vida Ramezanian",
    "Alireza Taherian",
    "Kimia Dinashi",
    "Amirali Miri",
    "Shohreh Kasaei",
  ],
  venue: "arXiv",
  year: 2025,
  date: "2025-03",
  arxivUrl: "https://arxiv.org/abs/2503.12067",
  pdfUrl: "https://arxiv.org/pdf/2503.12067",
} satisfies Paper;

export default paper;
