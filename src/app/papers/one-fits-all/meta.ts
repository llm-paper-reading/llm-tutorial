import type { Paper } from "@/lib/papers";

const paper = {
  slug: "one-fits-all",
  title: "GPT4TS（One Fits All）：冻结预训练 Transformer 统一时序分析",
  navTitle: "GPT4TS · One Fits All",
  paperTitle: "One Fits All: Power General Time Series Analysis by Pretrained LM",
  desc: "阿里达摩院冻结 GPT2 的自注意力与 FFN，只训练输入嵌入、位置嵌入、LayerNorm 与输出层，就让同一个主干在预测、补全、分类、异常检测、少样本与零样本七类时序任务上达到 SOTA 或相当水平；论文进一步把深层自注意力解释为一种 PCA 式低秩投影。官方代码把这套模型命名为 GPT4TS，社区与后续论文多以该简称引用。",
  motivation: "时序任务长期各自为战：公开数据集规模小（最大的也不到 10GB）、领域分布差异大，无法像 NLP/CV 那样从头预训练一个 foundation model。论文换了个问法：能不能不训时序预训练，直接借用语言或图像域预训练 Transformer 已经学到的通用运算能力，只重写输入输出接口？",
  tags: ["时间序列"],
  icon: "📈",
  authors: ["Tian Zhou", "Peisong Niu", "Xue Wang", "Liang Sun", "Rong Jin"],
  venue: "NeurIPS",
  year: 2023,
  arxivUrl: "https://arxiv.org/abs/2302.11939",
  pdfUrl: "https://arxiv.org/pdf/2302.11939",
  codeUrl: "https://github.com/DAMO-DI-ML/One_Fits_All",
} satisfies Paper;

export default paper;
