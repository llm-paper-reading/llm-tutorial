import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "为什么 FlashAttention 是近年最有影响力的系统论文之一？",
    answer: [
      "它没有改注意力数学（输出精确相等），却同时拿到更快、更省内存、支持更长上下文三项收益。",
      "今天几乎所有 LLM 训练与推理栈的默认注意力实现都是它或其后续版本（FA2/FA3）。"
    ],
    takeaway: "「优化 IO 而非 FLOPs」这一视角改变了此后 kernel 设计的思考方式。"
  },
  {
    id: "io-bound",
    question: "为什么降 FLOPs 不等于变快？",
    answer: [
      "GPU 计算速度的增长远超显存带宽：A100 的 SRAM 约 19TB/s，HBM 只有 1.5-2TB/s，相差一个数量级。",
      "softmax、dropout 这类操作是 memory-bound——时间花在搬数据而不是算。标准实现把 N×N 的 S、P 矩阵写进 HBM 再读回来，纯粹为搬运付费。"
    ],
    takeaway: "先判断算子是 compute-bound 还是 memory-bound，再谈优化。"
  },
  {
    id: "tiling",
    question: "tiling 怎么解决 softmax 需要整行的问题？",
    answer: [
      "softmax 拆成 max m(x)、指数和 l(x) 两个统计量，两者都可以分块增量合并（类似流式算法的代数聚合）。",
      "每处理一个 KV 块就更新 (m, l) 并重缩放已累积的输出，全部在 SRAM 内完成，永不物化完整 N×N 矩阵。"
    ],
    takeaway: "在线 softmax 是分块注意力的数学钥匙。"
  },
  {
    id: "recompute",
    question: "反向传播为什么敢不存注意力矩阵？",
    answer: [
      "前向只保存输出 O 与 softmax 统计量 (m, l)，反向时在 SRAM 内用 Q/K/V 块重算 S 和 P。",
      "重算增加 FLOPs，但省掉的 HBM 读写更多——反向反而更快（选择性梯度检查点的高速版本）。"
    ],
    takeaway: "用廉价计算换昂贵内存访问，在 memory-bound 场景稳赚。"
  },
  {
    id: "io-complexity",
    question: "IO 复杂度结论怎么读？",
    answer: [
      "标准注意力 HBM 访问 Θ(Nd+N²)；FlashAttention 为 Θ(N²d²M⁻¹)，M 是 SRAM 大小——d² 远小于 M 时少一个数量级以上。",
      "论文还证明了下界：任何精确注意力算法都不可能在所有 M 取值上渐近更优——这个方案在精确注意力里已到理论极限。"
    ],
    takeaway: "少 9 倍 HBM 访问、快 7.6×（GPT-2 attention 部分），数字与理论对得上。"
  },
  {
    id: "sparse",
    question: "block-sparse 扩展为什么重要？",
    answer: [
      "块稀疏版跳过零块，IO 复杂度按稀疏率 s 直接打折，比 FlashAttention 再快 2-4×，可到 64K 序列。",
      "它证明 FlashAttention 是个「原语」：近似注意力可以先解决 IO 开销，再叠加稀疏化。"
    ],
    takeaway: "先用 IO 感知做底座，再叠加近似——顺序不能反。"
  },
  {
    id: "impact",
    question: "对长上下文训练意味着什么？",
    answer: [
      "内存线性于 N 使 16K/64K 序列可训：GPT-2 用 4K 上下文比 Megatron 1K 还快，困惑度好 0.7。",
      "Path-X（16K）与 Path-256（64K）首次有 Transformer 超过随机水平——长上下文本身带来新能力。"
    ],
    takeaway: "系统优化反哺模型能力：跑得快才能训得长，训得长才有新能力。"
  }
];

export default faq;
