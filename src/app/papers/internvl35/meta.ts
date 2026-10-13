import type { Paper } from "@/lib/papers";

const paper = {
  slug: "internvl35",
  title: "InternVL3.5：级联 RL 与视觉分辨率路由",
  navTitle: "InternVL3.5",
  paperTitle: "InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency",
  desc: "上海 AI Lab 的开源多模态模型（1B–241B-A28B）：Cascade RL 两阶段（难度驱动重放 + 在线 off-policy）、Visual Resolution Router 按任务动态分配视觉 token 预算、DvD 视觉语言解耦部署 4.05× 加速；多模态推理较上代 +16%。",
  motivation: "开源多模态模型提升推理能力时常靠更大模型和更多视觉 token，但推理、效率和部署成本会同时恶化。InternVL3.5 想解决的是：如何用级联 RL 提升复杂多模态推理，再用分辨率路由和视觉语言解耦把推理成本降下来。",
  tags: ["多模态", "强化学习", "推理优化", "高效训练"],
  icon: "🌟",
  authors: ["Weiyun Wang", "et al."],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2508.18265",
  codeUrl: "https://github.com/OpenGVLab/InternVL",
} satisfies Paper;

export default paper;
