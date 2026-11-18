import type { Paper } from "@/lib/papers";

const paper = {
  slug: "mixtral",
  title: "Mixtral 8×7B：开源稀疏 MoE 的标志作",
  navTitle: "Mixtral 8×7B",
  paperTitle: "Mixtral of Experts",
  desc: "Mixtral 8×7B 精读：Mistral 7B 架构上每层换 8 个 FFN 专家、路由每 token 选 2 个——47B 总参数、13B 激活，32K 上下文，多数基准超过 Llama 2 70B 与 GPT-3.5；数学代码多语言优势最大。路由分析显示专家不按领域分工而按语法/位置局部性分配。Apache 2.0 发布并推动 vLLM 集成 MoE kernel。",
  motivation: "Dense 模型的参数全部参与每次计算，能力和成本线性绑定。稀疏 MoE 的动机是解耦：总参数承载知识容量，激活参数控制推理成本——但此前开源 MoE 的质量一直落后同成本 dense。Mixtral 要证明一个干净实现的 SMoE 可以在同等推理预算下超过大得多的 dense 模型，并以宽松许可证打开商用大门。",
  tags: ["MoE 架构", "基础架构", "高效训练"],
  icon: "🇫🇷",
  authors: ["Albert Q. Jiang", "et al."],
  venue: "arXiv",
  year: 2024,
  arxivUrl: "https://arxiv.org/abs/2401.04088",
  pdfUrl: "https://arxiv.org/pdf/2401.04088",
} satisfies Paper;

export default paper;
