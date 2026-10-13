import type { Paper } from "@/lib/papers";

const paper = {
  slug: "mimo-v2-flash",
  title: "MiMo-v2-Flash：多教师在线蒸馏出的高效推理模型",
  navTitle: "MiMo-v2-Flash",
  paperTitle: "MiMo-v2-Flash Technical Report",
  desc: "309B 总参 / 15B 激活 MoE，用 128-token SWA + 全局注意力混合、MTP 投机解码和 MOPD 后训练，把多领域强老师的 dense token-level 信号压进 Flash 部署模型。",
  motivation: "强推理模型可以靠更大模型和更长采样堆性能，但线上部署关心的是延迟、吞吐和成本。MiMo-v2-Flash 要解决的是如何让小激活 Flash 模型继承多领域强老师的策略，同时保留可验证奖励带来的任务正确性。",
  tags: ["在线蒸馏", "知识蒸馏", "强化学习", "高效训练", "推理优化", "MoE 架构", "长上下文"],
  icon: "⚡",
  authors: ["Bangjun Xiao", "et al."],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2601.02780",
} satisfies Paper;

export default paper;
