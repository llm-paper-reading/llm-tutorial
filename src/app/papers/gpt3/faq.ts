import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "GPT-3 论文的历史地位是什么？",
    answer: [
      "它命名并系统研究了 in-context learning：zero/one/few-shot 三档设置下，不经任何梯度更新完成任务。",
      "同时是 scaling law 的实证基座：8 档模型（125M–175B）验证损失随算力延续幂律两个数量级——Kaplan et al. (2020) 的姊妹篇。"
    ],
    takeaway: "「大模型 + 提示词」这个交互范式在这里第一次被完整论证。"
  },
  {
    id: "icl",
    question: "in-context learning 的机制解释是什么？",
    answer: [
      "论文用「元学习」框架描述：预训练时模型在序列内部反复见到「子任务」，发展出广泛的技能与模式识别；推理时这些能力在单次前向内被激活。",
      "Figure 1.2 的对照：任务加不加自然语言描述，大模型的 in-context 学习曲线都更陡——规模提升的是「利用上下文信息的效率」。"
    ],
    takeaway: "论文承认这只是描述性框架，ICL 的机制理解至今仍是开放问题。"
  },
  {
    id: "arch",
    question: "架构上有什么创新吗？",
    answer: [
      "几乎没有：沿用 GPT-2 的修改版初始化、pre-norm、可逆分词，唯一新增是交替的 dense 与局部带状稀疏注意力（类似 Sparse Transformer）。",
      "175B 的具体超参（96 层、d_model 12288、96 头、上下文 2048）按 GPU 布局的计算效率与负载均衡选择，论文明确说验证损失对这些参数不敏感。"
    ],
    takeaway: "GPT-3 的论点就是「规模即能力」——架构保持最简。"
  },
  {
    id: "results",
    question: "few-shot 到底逼近了微调多少？",
    answer: [
      "SuperGLUE few-shot 平均 71.8，超过微调 BERT-Large（69.0），但距微调 SOTA（89.0）仍差 17 分。",
      "亮点在单项：CoQA 阅读理解 few-shot 85 F1（人类 91 左右）、闭域问答 TriviaQA few-shot 71.2——离人类仅数分。"
    ],
    takeaway: "GPT-3 证明的是「不用微调也可用」，不是「超过微调」。"
  },
  {
    id: "emergent",
    question: "哪些能力是跳变出现的？",
    answer: [
      "十项算术测试：从第二大的 13B 到 175B 有显著跳变（如三位数加法），小模型几乎为零。",
      "论文用了 'significant jump' 的表述——规模带来的非线性收益，是后来「涌现」讨论的早期证据。"
    ],
    takeaway: "算术跳变是 GPT-3 留给涌现争论最常被引用的图。"
  },
  {
    id: "data",
    question: "300B token 的训练数据是怎么配的？",
    answer: [
      "以 Common Crawl（过滤后约 410B）为底，混入高质量来源大幅上采样：WebText2、Books1/Books2、Wikipedia——高质量数据按权重约占 60%+。",
      "Common Crawl 过滤：与 WebText 相似度阈值、文档级模糊去重、每 500 词窗口去重。"
    ],
    takeaway: "「低质量大底 + 高质量高权重」的配比思路由此定型。"
  },
  {
    id: "limits",
    question: "论文自己列了哪些局限？",
    answer: [
      "文本生成质量仍会语义重复、逻辑断裂；长文本结构控制弱；所有能力仍是「有时可行」而非可靠。",
      "基准污染分析（附录 C）发现部分测试集与训练数据重叠，论文给出了污染率与受影响分析——这个诚实的附录后来成为标准操作。"
    ],
    takeaway: "局限性小节与污染分析是这篇论文最常被忽视、却最值得读的部分。"
  }
];

export default faq;
