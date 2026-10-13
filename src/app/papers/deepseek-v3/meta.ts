import type { Paper } from "@/lib/papers";

const paper = {
  slug: "deepseek-v3",
  title: "DeepSeek-V3：671B MoE 的极致性价比",
  navTitle: "DeepSeek-V3",
  paperTitle: "DeepSeek-V3 Technical Report",
  desc: "671B 参数、每 token 激活 37B，2.788M GPU 小时训完 14.8T token。MLA 把 KV cache 压掉 57 倍，无辅助损失的 bias 负载均衡，首个超大规模 FP8 训练。",
  motivation: "大模型继续放大时，算力成本、KV cache、MoE 负载不均和低精度训练稳定性都会成为瓶颈。DeepSeek-V3 的动机是证明一套更高性价比的工程组合——MLA、无辅助损失负载均衡、FP8 和多 token 预测——可以把 671B MoE 训练到强性能而不把成本拉爆。",
  tags: ["DeepSeek 系列", "MoE 架构", "注意力机制", "高效训练", "知识蒸馏", "推理优化"],
  icon: "🏗️",
  authors: ["DeepSeek-AI"],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2412.19437",
  codeUrl: "https://github.com/deepseek-ai/DeepSeek-V3",
} satisfies Paper;

export default paper;
