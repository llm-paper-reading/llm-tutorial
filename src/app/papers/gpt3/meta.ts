import type { Paper } from "@/lib/papers";

const paper = {
  slug: "gpt3",
  title: "GPT-3：175B 与 in-context learning 的命名",
  navTitle: "GPT-3",
  paperTitle: "Language Models are Few-Shot Learners",
  desc: "GPT-3 论文精读：175B 参数、300B token、8 档规模的对照实验；命名并系统研究 in-context learning（zero/one/few-shot 不经梯度更新完成任务）；验证损失随算力延续幂律两个数量级；SuperGLUE few-shot 71.8 逼近微调 BERT-Large；二位数加法从 13B 到 175B 跳变。附录含基准污染分析。",
  motivation: "微调范式有三个瓶颈：每任务都要标注数据、微调后过拟合分布狭窄、且人类学语言并不需要大数据集。GPT-3 的动机是验证「规模换Few-shot」：把模型推到 175B，看纯靠 prompt 里的示例能否逼近微调——从而把 NLP 的交互方式从「训练模型」变成「写提示词」。",
  tags: ["GPT 系列", "基础架构", "高效训练"],
  icon: "🔄",
  authors: ["Tom B. Brown", "et al."],
  venue: "NeurIPS 2020",
  year: 2020,
  arxivUrl: "https://arxiv.org/abs/2005.14165",
  pdfUrl: "https://arxiv.org/pdf/2005.14165",
} satisfies Paper;

export default paper;
