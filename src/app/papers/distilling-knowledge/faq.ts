import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    id: "problem",
    question: "这篇论文真正想解决什么问题？",
    answer: [
      "它解决的是训练和部署之间的矛盾：训练时可以使用很大的模型、强正则模型或模型集成慢慢抽取规律，但线上服务需要低延迟、低成本、易部署的单模型。",
      "Hinton 等人的关键想法是：不要只把大模型看成一组参数，而要把它学到的输入到输出的泛化映射压缩出来，让小学生模型去模仿这个映射。",
    ],
    takeaway: "蒸馏的目标不是简单变小，而是把老师的泛化方式迁移给学生。",
  },
  {
    id: "dark-knowledge",
    question: "dark knowledge 指的是什么？",
    answer: [
      "dark knowledge 指老师分布里非正确类别之间的相对概率关系。硬标签只告诉学生“这张图是 2”，但老师 softmax 还会透露它更像 3 还是更像 7。",
      "这些很小的错误类别概率编码了类别相似性和老师的归纳偏置。学生匹配这些 soft targets 时，学到的不只是答案，还包括老师如何组织类别空间。",
    ],
    takeaway: "暗知识主要藏在“错误答案之间的相对概率”里。",
  },
  {
    id: "bmw-example",
    question: "论文里 BMW、垃圾车和胡萝卜的例子想说明什么？",
    answer: [
      "这个例子想说明：模型的知识不只在“正确答案”里，也在它给错误答案分配的相对概率里（dark knowledge，暗知识）。对一张 BMW 图片来说，老师模型当然应该把最高概率给 BMW；但在错误类别里，“垃圾车”的概率也应当比“胡萝卜”高得多，因为它们至少同属车辆，而胡萝卜和汽车几乎没有视觉语义关系。",
      "硬标签只会说“这是 BMW”，不会告诉学生哪些错误更合理、哪些错误更离谱。老师输出的 soft probabilities 则把这种类别相似性编码了进去，这就是 dark knowledge；学生拟合这些相对概率时，就能学到更细的类别结构。",
    ],
    takeaway: "BMW 例子说明：暗知识不在最大概率类别里，而在错误类别之间的相对概率关系里。",
  },
  {
    id: "temperature",
    question: "为什么蒸馏要用温度 T？",
    answer: [
      "普通 softmax 往往太尖，正确类别接近 1，其他类别接近 0，暗知识会被压扁。提高温度 T 会把分布软化，让非最大类别的概率差异更容易被学生看见。",
      "蒸馏时老师用高温生成 soft targets，学生也在同样温度下匹配；部署时再把学生恢复到 T=1 做普通预测。",
    ],
    takeaway: "温度 T 的作用是把老师分布“摊开”，让暗知识显形。",
  },
  {
    id: "t2-scaling",
    question: "公式里的 T² 缩放为什么重要？",
    answer: [
      "当温度 T 变大时，soft-target loss 对学生 logits 的梯度量级大约会按 1/T² 缩小。如果不乘回 T²，调高温度不仅会软化分布，还会无意间削弱蒸馏项。",
      "所以论文建议在混合硬标签 loss 和软标签 loss 时，对高温 soft-target 交叉熵乘以 T²，让两类训练信号的相对权重更稳定。",
    ],
    takeaway: "T² 是为了补偿高温带来的梯度缩小，而不是一个随意常数。",
  },
  {
    id: "llm-relation",
    question: "这篇 2015 论文和现代 LLM 蒸馏有什么关系？",
    answer: [
      "现代 LLM 蒸馏仍然沿用这篇论文的核心语言：teacher logits / logprobs、soft targets、温度、KL 匹配，以及把强老师能力迁移到更小学生模型。",
      "但边界也要看清：这篇论文主要讨论分类和语音识别声学模型，数据通常来自固定 transfer set；MiniLLM、OPD 等后续工作则把老师信号搬到学生自己生成的序列状态上，问题从压缩分类器变成纠正生成策略。",
    ],
    takeaway: "它是现代 KD 的基准语言，但不是所有 on-policy LLM 蒸馏细节的直接模板。",
  },
  {
    id: "kd-vs-compression",
    question: "知识蒸馏和 model compression 是一回事吗？",
    answer: [
      "两者关系很近，但重点不同。早期 model compression 更强调把大模型或集成模型压缩成小模型；Hinton 这篇论文把重点推进到“知识”本身：学生要学习老师输出分布里的类别结构，而不是只拟合硬标签。",
      "所以可以把这篇论文看成对 model compression 思路的深化：压缩的不只是模型大小，而是老师学到的泛化行为。",
    ],
    takeaway: "KD 可以服务于压缩，但它的核心是迁移老师的输出分布和泛化方式。",
  },
  {
    id: "transfer-set",
    question: "transfer set 必须是原训练集吗？",
    answer: [
      "不一定。论文关心的是让老师在一批输入上给出 soft targets，再让学生拟合这些输出分布；这批输入可以来自原训练数据，也可以是没有标签的迁移数据。",
      "关键不是标签本身，而是这些输入能让老师暴露足够多的类别相似关系。如果 transfer set 覆盖太窄，学生能学到的泛化结构也会受限。",
    ],
    takeaway: "蒸馏需要的是老师在输入空间上的行为样本，而不只是人工标签。",
  },
  {
    id: "soft-target-regularization",
    question: "为什么 soft targets 会像正则器一样工作？",
    answer: [
      "硬标签把所有概率质量压到一个类别上，给学生的监督信号很尖；soft targets 则让学生看到“正确类别很高，但相近类别也有一点概率”的平滑分布。",
      "这种平滑分布会限制学生过度自信地记住训练样本，尤其在数据很少时更明显。论文的语音识别实验里，只用 3% 数据时，硬标签模型严重过拟合，而 soft targets 保留了接近全量数据训练的测试表现。",
    ],
    takeaway: "soft targets 不只是传答案，也在约束学生不要学得过尖、过自信。",
  },
  {
    id: "mythical-digit-3",
    question: "“没见过数字 3 也能识别 3”的实验说明了什么？",
    answer: [
      "这个实验不是说学生凭空学会了新类别，而是说明其他数字样本上的老师概率分布已经包含了“哪些形状接近 3、哪些不像 3”的结构信息。",
      "当学生拟合这些 soft targets 时，它能间接学到 3 在类别空间中的位置。调好 3 类 bias 后，学生虽然 transfer set 里没有 3，仍然能在测试时识别大部分 3。",
    ],
    takeaway: "暗知识可以跨样本传递类别结构，但不是凭空创造训练信号。",
  },
  {
    id: "specialists",
    question: "specialist models 和今天的专家模型有什么关系？",
    answer: [
      "论文里的 specialists 是围绕易混类别训练的专科模型：generalist 负责全局分类，specialist 只精细区分某个混淆簇，其余类别放进 dustbin。",
      "它和今天的 MoE 或多教师蒸馏有相似直觉：不同专家覆盖不同能力或类别区域。但本文 specialists 更像独立训练的辅助分类器，并不是训练时由 gating network 联合路由的 MoE。",
    ],
    takeaway: "specialists 是“分工专家”思想的早期形态，但机制上不同于现代 MoE。",
  },
] satisfies PaperFAQ;

export default faq;
