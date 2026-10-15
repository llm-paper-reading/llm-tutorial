import type { Paper } from "@/lib/papers";

const paper = {
  slug: "distilling-knowledge",
  title: "Distilling the Knowledge：知识蒸馏的起点",
  navTitle: "KD · Hinton",
  paperTitle: "Distilling the Knowledge in a Neural Network",
  desc: "Hinton、Vinyals、Dean 的经典蒸馏论文：用高温 softmax 暴露 dark knowledge，把笨重集成模型的泛化方式压进单个部署模型；MNIST、语音识别和 JFT specialists 证明 soft targets 不只是压缩，也是强正则。",
  motivation: "训练阶段可以用大模型、强正则和模型集成慢慢抽取结构，但线上部署要低延迟、低成本。本文要解决的是：能否把 cumbersome model 学到的“输入到输出的泛化映射”迁移到一个小得多、容易服务的学生模型里，而不只是复制硬标签。",
  tags: ["知识蒸馏", "高效训练", "基础架构"],
  icon: "💧",
  authors: ["Geoffrey Hinton", "Oriol Vinyals", "Jeff Dean"],
  venue: "NIPS Deep Learning Workshop",
  year: 2015,
  date: "2015-03",
  arxivUrl: "https://arxiv.org/abs/1503.02531",
  pdfUrl: "https://arxiv.org/pdf/1503.02531",
} satisfies Paper;

export default paper;
