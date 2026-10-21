import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "Qwen2.5 相对 Qwen2 改了什么？",
    answer: [
      "架构与 tokenizer 完全沿用 Qwen2，改动集中在三处：预训练数据 7T→18T、SFT 数据约百万级、RL 升级为离线 DPO + 在线 GRPO 两阶段。",
      "另外补回 3B/14B/32B 三个尺寸，形成 0.5B–72B 七档全覆盖。"
    ],
    takeaway: "Qwen2 定架构，Qwen2.5 定数据与后训练——这是阅读两份报告的正确分工。"
  },
  {
    id: "data",
    question: "18T 数据是怎么从 7T 涨出来的？",
    answer: [
      "四个抓手：用 Qwen2-Instruct 做多维度质量过滤；并入 Qwen2.5-Math 与 Qwen2.5-Coder 的领域语料；用 Qwen2-72B-Instruct 合成数学/代码/知识数据并用专用 RM 过滤；按领域上下采样平衡配比。",
      "报告特别指出电商、社媒、娱乐在网页数据里过量，科技、学术反而稀缺，需要主动重平衡。"
    ],
    takeaway: "18T 不是多爬数据，而是「模型过滤 + 领域注入 + 配比重平衡」的组合拳。"
  },
  {
    id: "scaling-law",
    question: "scaling law 在 Qwen2.5 里怎么用？",
    answer: [
      "不是常见的「算预算选模型尺寸」，而是为 44M–14B dense 与 44M–1B 激活的 MoE 拟合最优学习率与 batch size。",
      "再以最终 loss 为目标，反推 MoE 要与某个 dense 档位（如 72B、14B）打平需要多少激活与总参数。"
    ],
    takeaway: "把 scaling law 当超参计算器用，是这一代工程上的新姿势。"
  },
  {
    id: "rl",
    question: "离线 RL 和在线 RL 各管什么？",
    answer: [
      "离线（DPO）管奖励模型难以评估的能力：推理、事实性、指令遵循——信号由执行反馈与答案匹配预构建。",
      "在线（GRPO）管奖励模型能分辨的细微质量：真实性、有用性、简洁、切题、无害、去偏——按响应分数方差排序 query，每个 query 采 8 个响应。"
    ],
    takeaway: "「可验证的离线做、可打分的在线做」是 Qwen2.5 后训练的核心分工。"
  },
  {
    id: "long-context",
    question: "1M 上下文是怎么练出来的？",
    answer: [
      "Qwen2.5-Turbo 预训练分四阶段渐进：32K→65K→131K→262K，RoPE 基频提到 10,000,000，每阶段 40% 序列在当前最大长度。",
      "推理期再叠 YARN+DCA 四倍扩展到 1M；SFT 也分两阶段，第二阶段混入最长 262K 的长指令。"
    ],
    takeaway: "1M 是「渐进训练 + 推理外推」两级接力，不是一次训出来的。"
  },
  {
    id: "instruct",
    question: "为什么输出长度从 2K 提到 8K 也值得写进报告？",
    answer: [
      "当时指令模型的响应普遍不到 2,000 token，长文写作必然截断。",
      "Qwen2.5 用回译从预训练语料造长 query、加输出长度约束、用 Qwen2 过滤低质量配对，专门补这个产品级短板。"
    ],
    takeaway: "「能生成多长」与「能读多长」一样是硬能力，需要专门的数据工程。"
  },
  {
    id: "limits",
    question: "读 Qwen2.5 结果表要注意什么？",
    answer: [
      "Turbo / Plus 是 API 专有模型，只给了相对 GPT-4o-mini / GPT-4o 的定性比较，细节不可复现。",
      "RULER 上 7B-Instruct 在 128K 档掉到 55.1（Turbo 84.5），长度能力高度依赖渐进训练，不是所有尺寸共享。"
    ],
    takeaway: "Qwen2.5 的长上下文结论要分模型看，1M 只属于 Turbo。"
  }
];

export default faq;
