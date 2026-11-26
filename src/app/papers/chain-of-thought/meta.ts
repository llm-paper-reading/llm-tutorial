import type { Paper } from "@/lib/papers";

const paper = {
  slug: "chain-of-thought",
  title: "Chain-of-Thought：提示词里的推理涌现",
  navTitle: "Chain-of-Thought",
  paperTitle: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
  desc: "CoT 论文精读：在 few-shot 示例的答案前加上中间推理步骤，PaLM 540B 仅用 8 个示例就在 GSM8K 达到 56.9%（当时 SOTA，超微调 GPT-3 + verifier）；收益是涌现能力——约 100B 参数以下 CoT 反而降分；问题越难收益越大。DeepSeek-R1 的 RL 涌现、Qwen3 的 thinking 模式、o1 系列的思路都从这一个 prompt 技巧出发。",
  motivation: "规模提升了解答与样本效率，但数学、常识、符号推理仍然卡住——直接给答案的 few-shot 提示不够。Chain-of-Thought 的动机来自两个观察： rationale 增强训练有效但标注贵、few-shot 提示免微调但只适用于简单任务——把中间推理步骤写进 few-shot 示例，两个优点就可以合并，且不需要任何参数更新。",
  tags: ["基础架构", "对齐与偏好优化"],
  icon: "🔗",
  authors: ["Jason Wei", "Xuezhi Wang", "et al."],
  venue: "NeurIPS 2022",
  year: 2022,
  arxivUrl: "https://arxiv.org/abs/2201.11903",
  sourceUrl: "https://arxiv.org/pdf/2201.11903",
} satisfies Paper;

export default paper;
