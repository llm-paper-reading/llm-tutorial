import type { Paper } from "@/lib/papers";

const paper = {
  slug: "instructgpt",
  title: "InstructGPT：RLHF 三步法的原始出处",
  navTitle: "InstructGPT",
  paperTitle: "Training language models to follow instructions with human feedback",
  desc: "InstructGPT 论文精读：SFT → 奖励模型 → PPO 三步法确立 RLHF 标准流程；1.3B InstructGPT 的输出被人类偏好超过 175B GPT-3（参数少 100 倍）；PPO-ptx 混合预训练梯度缓解对齐税；TruthfulQA 真实率翻倍、幻觉率 41%→21%。全文以「对齐谁」的讨论收尾。",
  motivation: "GPT-3 的下一 token 目标与「有用、诚实、无害地跟随指令」之间存在系统性错位：模型编造事实、不跟随指令、输出有害内容。InstructGPT 的动机是验证一条务实路线——用 40 人标注团队的偏好数据做 RLHF，让模型对齐用户意图，并量化「对齐税」的大小与补法。",
  tags: ["GPT 系列", "对齐与偏好优化", "强化学习"],
  icon: "🔄",
  authors: ["Long Ouyang", "et al."],
  venue: "NeurIPS 2022",
  year: 2022,
  arxivUrl: "https://arxiv.org/abs/2203.02155",
  pdfUrl: "https://arxiv.org/pdf/2203.02155",
} satisfies Paper;

export default paper;
