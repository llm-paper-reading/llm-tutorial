import type { Paper } from "@/lib/papers";

const paper = {
  slug: "scaling-laws",
  title: "Scaling Laws：性能随规模的幂律",
  navTitle: "Scaling Laws",
  paperTitle: "Scaling Laws for Neural Language Models",
  desc: "Kaplan et al. 2020 幂律定律：损失随参数量 N、数据量 D、算力 C 各自成幂律（跨六个数量级）；L(N,D) 联合公式给出过拟合规律（N 增 8 倍只需 D 增 5 倍）；计算最优结论——算力应主要花在更大模型上、远未收敛时就停，D ∝ C^0.27。后续 GPT-3 幂律延续、Chinchilla 修正、Llama 3 IsoFLOPs 全部由此出发。",
  motivation: "语言模型该多大、配多少数据、训多久，此前全靠试。Scaling Laws 的动机是用一组可控实验拟合出损失与 N/D/C 的定量关系，让「下一个模型怎么训」变成可外推的算术题——并顺带回答：形状重要还是规模重要。",
  tags: ["基础架构", "高效训练", "GPT 系列"],
  icon: "📏",
  authors: ["Jared Kaplan", "Sam McCandlish", "et al."],
  venue: "arXiv",
  year: 2020,
  arxivUrl: "https://arxiv.org/abs/2001.08361",
  pdfUrl: "https://arxiv.org/pdf/2001.08361",
} satisfies Paper;

export default paper;
