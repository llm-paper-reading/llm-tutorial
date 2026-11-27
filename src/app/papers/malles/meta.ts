import type { Paper } from "@/lib/papers";

const paper = {
  slug: "malles",
  title: "MALLES：消费者偏好对齐的多智能体经济沙盘",
  navTitle: "MALLES",
  paperTitle: "MALLES: A Multi-agent LLMs-based Economic Sandbox with Consumer Preference Alignment",
  desc: "用 11.9 万消费者、3361 个品类的真实交易记录对 LLM 做跨品类后训练，把价格与折扣敏感性学进模型；再用多智能体讨论分担高维商品信息的认知负荷、用平均场稳定总体分布。零售购买命中率 0.700→0.775，购买量误差与稳定性优于现有 LLM 经济模拟基线。",
  motivation: "品类级交易数据稀疏、商品特征高维且多模态，传统模拟器难以同时处理；已有的 LLM 经济智能体又多停留在宏观语义推演，对价格弹性这类数值信号不敏感，也没有用真实成交数据对齐。MALLES 想把「真实交易后训练 + 多智能体讨论 + 总体校准」放进同一个沙盘。",
  tags: ["合成消费者", "营销"],
  icon: "🏪",
  authors: ["Yusen Wu", "Yiran Liu", "Xiaotie Deng"],
  venue: "arXiv",
  year: 2026,
  arxivUrl: "https://arxiv.org/abs/2603.17694",
  sourceUrl: "https://arxiv.org/pdf/2603.17694",
} satisfies Paper;

export default paper;
