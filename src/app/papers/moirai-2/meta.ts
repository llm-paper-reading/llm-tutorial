import type { Paper } from "@/lib/papers";

const paper = {
  slug: "moirai-2",
  title: "Moirai 2.0：更少即更多",
  navTitle: "Moirai 2.0",
  paperTitle: "Moirai 2.0: When Less Is More for Time Series Forecasting",
  desc: "Salesforce 的 decoder-only 时序基础模型：把 Moirai 1.0 的 masked encoder、多 patch、混合分布，换成单 patch、分位数损失与多 token 预测；只用 11.4M 参数，在 GIFT-Eval 上 MASE 0.728、CRPS 0.516，排名第 5/6，比 Moirai-Large 小约 30 倍、快约 2 倍且更准。",
  motivation: "Moirai 1.0 把时序基础模型做大做全，却也暴露出三处低效：masked encoder 只在被遮住的 15% token 上算损失，多 patch 让跨频率学习变复杂，混合分布又难训又容易在尾部失稳。Moirai 2.0 反过来做减法，用更简单的架构和更直接的损失换更好的精度与效率。",
  tags: ["时间序列", "推理优化"],
  icon: "🧶",
  authors: ["Chenghao Liu", "Taha Aksu", "Juncheng Liu", "et al."],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2511.11698",
  sourceUrl: "https://arxiv.org/pdf/2511.11698",
  codeUrl: "https://github.com/SalesforceAIResearch/uni2ts",
} satisfies Paper;

export default paper;
