import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "为什么说 InstructGPT 是对齐技术的分水岭？",
    answer: [
      "它把 RLHF 从摘要等单任务研究推进到「广谱指令跟随」，SFT → 奖励模型 → PPO 三步法从此成为行业标准骨架。",
      "站内 [Qwen1](/papers/qwen1) 的 RLHF、[DPO](/papers/dpo-rafailov) 的出发点、以及后来所有 Chat 模型的对齐管线，源头都在这里。"
    ],
    takeaway: "读 InstructGPT 是理解「为什么所有 Chat 模型长这样」的最短路径。"
  },
  {
    id: "100x",
    question: "「1.3B 胜过 175B」该怎么读？",
    answer: [
      "前提是同一架构、同分布的人类偏好评测：1.3B PPO-ptx 的输出在盲测中被偏好于 175B GPT-3。",
      "它证明的是「对齐的边际收益大于规模」——不是 1.3B 更聪明，而是 175B 没被教会听指令。175B InstructGPT 被偏好于 175B GPT-3 达 85±3%。"
    ],
    takeaway: "对齐是「让已有能力可用」的钥匙，与参数规模是两个正交的杠杆。"
  },
  {
    id: "three-steps",
    question: "三步法每一步的关键细节是什么？",
    answer: [
      "SFT：约 1.3 万条示范、16 epoch；验证损失 1 epoch 后就过拟合，但继续训 RM 分与人类偏好反而更高。",
      "RM：6B 就够（175B RM 训练不稳定）；标注一次排 K=4–9 个响应，C(K,2) 个对比对作为单个 batch 元素防止过拟合；输出按演示均值为 0 做归一化。",
      "PPO：环境是 bandit（出 prompt、答一次、拿奖励终止）；value 函数从 RM 初始化；每 token 加对 SFT 的 KL 惩罚。"
    ],
    takeaway: "「RM 不用最大」「对比对打包防过拟合」「KL 防过度优化」是三个最常被忽视的工程决策。"
  },
  {
    id: "alignment-tax",
    question: "对齐税是什么，怎么补？",
    answer: [
      "RLHF 后 SQuAD、DROP、HellaSwag、WMT 翻译等公共 NLP 任务回退——对齐的代价。",
      "补法是 PPO-ptx：目标函数里混入预训练分布的似然梯度（公式里的 γ 项），几乎不损失偏好分数地恢复公共任务表现；比单纯加大 KL 系数更优。"
    ],
    takeaway: "PPO-ptx 是后来「预训练梯度」「在线合并优化器」等对齐税补法的原型。"
  },
  {
    id: "data",
    question: "偏好数据是怎么收集的？",
    answer: [
      "约 40 名承包商标注（经敏感性筛选测试选拔）；SFT 约 1.3 万条 prompt、RM 约 3.3 万、PPO 约 3.1 万（纯 API）。",
      "prompt 主要来自 OpenAI API Playground（早期 InstructGPT 用户），按用户 ID 划分训练/验证/测试集防泄漏，训练集过滤 PII；冷启动由标注员自己写三类 prompt（任意任务、few-shot、用户用例）。"
    ],
    takeaway: "「用户真实分布 + 标注员冷启动」的配方被后续所有对齐数据管线继承。"
  },
  {
    id: "honesty",
    question: "诚实性与安全性的结论有多强？",
    answer: [
      "TruthfulQA 上真实且有信息的回答约为 GPT-3 的两倍；闭域任务的幻觉率从 41% 降到 21%。",
      "毒性：被要求「尊重」时输出减少约 25%，但 Winogender/CrowSPairs 偏向性无显著改善——论文对此如实报告。"
    ],
    takeaway: "RLHF 对「编造」改善明显，对「偏见」几乎无能为力——这个不对称至今仍成立。"
  },
  {
    id: "align-to-whom",
    question: "「对齐到谁」的讨论为什么重要？",
    answer: [
      "论文明确承认：模型对齐的是「特定人群的偏好」——标注员与研究者，不是广义的人类价值。",
      "标注员间一致率 72.6%，held-out 标注员 77.3%——泛化到未见标注员尚可，但论文强调对更广泛人群与争议输入仍需研究。"
    ],
    takeaway: "RLHF 的 H 是一个具体的、可质询的群体——这是对齐研究最重要的澄清之一。"
  },
  {
    id: "limits",
    question: "读结果表要注意什么？",
    answer: [
      "主要评测是自家标注员在 API prompt 分布上的盲测，不是公开 benchmark——偏好分数不可跨论文比较。",
      "InstructGPT 仍会犯低级错误（不跟随指令、编造、对简单问题长篇铺垫、不识别假前提），论文自己列了清单。"
    ],
    takeaway: "把它当方法论论文读，不要当排行榜论文读。"
  }
];

export default faq;
