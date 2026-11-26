import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "DSpark 要解决投机解码的哪两个问题？",
    "answer": [
      "第一是并行草稿的质量问题：并行 drafter 一次前向预测整块，每个位置看不到块内已采样的 token，越靠后越容易拼出跨模式组合，接受率快速衰减。",
      "第二是验证预算问题：无差别验证整块草稿，在低并发时只是浪费一点算力，在高并发时会挤占服务其他请求的 batch capacity。DSpark 分别用半自回归架构和置信度调度器处理这两个问题。"
    ],
    "takeaway": "草稿要更会利用块内依赖，验证要知道在哪里停。"
  },
  {
    "id": "semi-autoregressive",
    "question": "“半自回归”到底是什么意思？",
    "answer": [
      "草稿大部分计算仍然由并行骨干一次完成，保持 T_draft 近似 O(1)；然后在这个并行 logits 上叠加一个很轻的、从左到右的顺序头，让每个位置能条件于块内已经采样的 token。",
      "它不改变逐 token 概率的形式：每个位置仍然是对词表的普通 softmax，所以 rejection sampling 仍然可以拿到精确的 draft 概率，保持无损。"
    ],
    "takeaway": "重并行、轻顺序：速度靠骨干，依赖靠小头。"
  },
  {
    "id": "markov-vs-rnn",
    "question": "Markov head 和 RNN head 该怎么选？",
    "answer": [
      "Markov head 只看前一个 token，用低秩矩阵近似 V×V 转移，实现最轻，是默认方案。RNN head 维护块内 recurrent state，能看到更长前缀。",
      "论文发现 RNN head 只带来边际增益，主要在长块长上；考虑到实现复杂度和部署性质，生产配置使用 Markov head。"
    ],
    "takeaway": "局部一阶依赖已经能补上大部分 suffix decay。"
  },
  {
    "id": "confidence-head",
    "question": "置信度头预测的是什么？",
    "answer": [
      "它预测的是条件存活概率：在前面所有草稿 token 都被接受的前提下，当前位置的 token 能通过目标模型验证的概率。",
      "训练标签是解析接受率 1 - 1/2 ||p_d - p_t||_1，也就是该步的期望接受概率；因此它输出的是可以连乘的绝对概率，而不只是用于排序的分数。"
    ],
    "takeaway": "调度需要的是“前缀能活到多长”的概率，不是单独的置信度排名。"
  },
  {
    "id": "calibration",
    "question": "为什么置信度头还要做校准？",
    "answer": [
      "神经网络置信度通常过度自信。静态阈值只关心排序，但 DSpark 的调度器要用累计乘积估计期望接受 token 数，绝对概率偏了，吞吐估计就会偏。",
      "STS 从左到右逐位置做温度缩放，最小化累计乘积的 ECE；温度缩放是保序变换，不会破坏原有的排序。校准后平均 ECE 从 3%–8% 降到约 1%。"
    ],
    "takeaway": "要排序看 AUC，要估吞吐必须校准。"
  },
  {
    "id": "scheduler",
    "question": "硬件感知调度器如何决定每个请求验证多长？",
    "answer": [
      "它把所有请求的所有候选位置按累计存活概率排序，逐个加入验证池，每次更新 batch token 数 B 和期望接受 token 数 τ，用 Θ = τ · SPS(B) 评估吞吐，保留最优前缀长度。",
      "由于存活概率随位置单调不增，扩展一位的边际收益正好是当前位置的存活概率，所以按全局排序贪心加入就能覆盖最优分配。SPS(B) 是引擎初始化时 profile 出来的成本表。"
    ],
    "takeaway": "验证长度不是单请求阈值，而是全局 batch capacity 的分配问题。"
  },
  {
    "id": "early-stopping",
    "question": "为什么 early stopping 对无损性很重要？",
    "answer": [
      "Markov 置信度头的下一步分数依赖已经采样出的当前 token。如果调度器先看完整候选池再决定，是否接纳当前 token 就可能反过来依赖这个 token 本身，破坏 rejection sampling 要求的 non-anticipating 性质。",
      "Algorithm 1 一旦吞吐不再提升就停止，让截断决策只用到当前步为止的信息。线上版本为了绕过锯齿状 SPS 去掉了 early stopping，但改用两步前的置信度决定容量上限，用异步方式重建因果屏障。"
    ],
    "takeaway": "调度可以聪明，但不能偷看未来 token。"
  },
  {
    "id": "production-gain",
    "question": "线上 60%–85% 和 +661% 该怎么理解？",
    "answer": [
      "60%–85%（V4-Flash）和 57%–78%（V4-Pro）是在 matched practical throughput 下，每用户生成速度的提升，是比较稳定的口径。",
      "严格 SLA 下的 +661% / +406% 是相对 MTP-1 的吞吐比值。此时 MTP-1 已接近可服务边界、只能维持很小并发，比值会被放大；论文把它主要当作“DSpark 扩展了可行交互前沿”的证据，而不是代表性倍数。"
    ],
    "takeaway": "看前沿扩展，不要只看最夸张的相对数字。"
  }
] satisfies PaperFAQ;

export default faq;
