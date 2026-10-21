import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "R1 论文为什么是 2025 年的必读？",
    answer: [
      "它第一次系统证明：不用人类推理轨迹、只靠规则奖励的大规模 RL，就能在基座上激发出验证、反思、策略切换等行为。",
      "站内 [GRPO 与 DeepSeek-R1](/papers/grpo-deepseek-r1) 从算法视角讲过 GRPO；本文补上 R1 本体的完整故事：R1-Zero 涌现、多阶段管线、蒸馏与局限。"
    ],
    takeaway: "R1 把「推理能力从哪来」的答案从数据搬到了奖励。"
  },
  {
    id: "r1-zero",
    question: "R1-Zero 的「纯 RL」到底纯在哪？",
    answer: [
      "跳过 SFT 冷启动，直接在 DeepSeek-V3-Base 上跑 GRPO；提示模板只要求 <think>/<answer> 格式。",
      "奖励只有两条规则：答案正确性（数学比对 / 代码跑测试）与格式合规——明确不用神经奖励模型，因为大规模 RL 下容易被 reward hacking。"
    ],
    takeaway: "约束越少，涌现空间越大；规则奖励是可靠性的来源。"
  },
  {
    id: "emergence",
    question: "「aha moment」是真的涌现还是修辞？",
    answer: [
      "现象可观察：训练中模型开始自发言「Wait, wait... 让我重新想」，反思词频突然上升；AIME pass@1 从 15.6% 涨到 77.9%（cons@16 到 86.7%）。",
      "但要点是它没有被显式教过——模板只规定了输出格式，没规定内容。响应长度随训练稳定增长，说明模型自己学会用更多思考时间。"
    ],
    takeaway: "涌现的证据是行为频率与长度的同步跳变，不是单一样本。"
  },
  {
    id: "pipeline",
    question: "R1 为什么要加回冷启动 SFT？",
    answer: [
      "R1-Zero 两个硬伤：可读性差、中英混杂（基座是中英双语训练的）。",
      "R1 管线四步：少量冷启动 CoT 数据 SFT → 推理 RL（加语言一致性奖励）→ 拒绝采样 + 全能力 SFT（约 80 万样本）→ 第二轮 RL（规则 + 偏好奖励）。"
    ],
    takeaway: "冷启动不是教推理，是给推理一个人类可读的载体。"
  },
  {
    id: "distill",
    question: "蒸馏小模型为什么比直接 RL 小模型强？",
    answer: [
      "论文做了对照：给 Qwen-32B 直接跑同样 RL，不如用 R1 的 80 万样本 SFT 蒸馏。",
      "结论是「大模型的推理模式已显式存在，蒸馏即迁移」；而小模型自己 RL 探索空间不足。六个蒸馏版（Qwen 1.5B–32B + Llama 8B/70B）中 14B 超越 QwQ-32B。"
    ],
    takeaway: "先在大模型上 RL 出策略，再蒸馏，比让小模型自己学更划算——这是 OPD 思路的另一面。"
  },
  {
    id: "cost",
    question: "R1 的训练成本意味着什么？",
    answer: [
      "R1-Zero 用 64×8 H800 约 198 小时，R1 约 80 小时，SFT 数据准备 5K GPU 时——按 H800 每卡时 2 美元算，RL 阶段约数百万美元级。",
      "对比同期能力接近的闭源模型，这是「开源权重 + 低成本复现路径」组合拳的实证。"
    ],
    takeaway: "规则奖励砍掉了奖励模型训练与在线打分两块大头成本。"
  },
  {
    id: "limits",
    question: "R1 自己承认了哪些局限？",
    answer: [
      "结构化输出与工具使用偏弱（不能调搜索引擎、计算器）；简单问题过度思考浪费 token；中英之外语言混杂；对 prompt 工程敏感。",
      "论文明确说这些问题在下个版本解决——后来的 R1-0528 与 V3.2 部分兑现。"
    ],
    takeaway: "R1 的局限清单就是后续半年推理模型的 roadmap。"
  }
];

export default faq;
