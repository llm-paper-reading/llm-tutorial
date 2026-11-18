import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "vLLM 为什么是推理系统的分水岭？",
    answer: [
      "它把「KV cache 怎么放」从框架的连续张量约束里解放出来，用 OS 分页思想做到近零浪费。",
      "PagedAttention 加迭代级调度（continuous batching）成为此后所有推理引擎的标准配置，vLLM 本身也是开源推理栈的事实标准之一。"
    ],
    takeaway: "「系统问题用系统方案解」——LLM 推理的第一课。"
  },
  {
    id: "waste",
    question: "60–80% 的显存浪费是怎么来的？",
    answer: [
      "深度学习框架要求张量连续，于是每个请求的 KV cache 按最大可能长度预分配一整块。",
      "三种浪费：预留（为未来 token 留的空间长期占着）、内部碎片（实际输出远短于最大长度）、外部碎片（分配器级别的零头）。实测现有系统只有 20.4%–38.2% 的 KV cache 存着真实 token 状态。"
    ],
    takeaway: "为「不知道会多长」付出的代价，比想象大一个数量级。"
  },
  {
    id: "paging",
    question: "分页怎么搬到 KV cache 上？",
    answer: [
      "类比关系：块=页、token=字节、请求=进程。KV cache 切成固定大小块（如 16 token），按需分配物理块，逻辑块经 block table 映射到非连续物理块。",
      "注意力 kernel 改造为按块收集 K/V 再计算——PagedAttention 的「Paged」指的就是这个 kernel 侧适配。"
    ],
    takeaway: "固定块大小消灭外碎片，按需分配消灭预留，小块把内碎片压到近零。"
  },
  {
    id: "cow",
    question: "copy-on-write 在这里解决什么？",
    answer: [
      "并行采样与 beam search 里多个序列共享 prompt（甚至中间段）的 KV cache：逻辑块映射同一物理块，引用计数管理。",
      "需要写入时才真正复制（fork 的老戏码）：beam search 最多可省 55% 显存。"
    ],
    takeaway: "共享与写时复制让「高级解码算法」从显存灾难变成顺手功能。"
  },
  {
    id: "results",
    question: "2–4× 吞吐提升该怎么读？",
    answer: [
      "同等延迟水平下对比 FasterTransformer 与 Orca（含 Oracle 版）：吞吐 2–4×；序列越长、模型越大、解码越复杂（beam search）提升越大。",
      "注意对照口径：对比的是 2023 年的系统，数字不可与今日引擎横比；但「内存浪费决定 batch 上限」的机制至今成立。"
    ],
    takeaway: "省下的显存直接变成并发度，吞吐是显存利用率的函数。"
  },
  {
    id: "relation",
    question: "与 FlashAttention 是什么关系？",
    answer: [
      "互补而非竞争：FlashAttention 优化 kernel 内部的 IO 层级（SRAM vs HBM），vLLM 优化 kernel 外部的显存布局（碎片与共享）。",
      "现代引擎两者都装：分页的 KV 块进入 FlashAttention kernel 计算注意力。"
    ],
    takeaway: "一个管「算得快」，一个管「装得下」，合起来才是完整的推理效率。"
  },
  {
    id: "limits",
    question: "读 vLLM 论文要注意什么？",
    answer: [
      "块大小是精度无关的（数学等价），但极小块会带来 block table 的额外管理开销——论文给出了权衡。",
      "抢占式调度（swap/recompute）在显存耗尽时的行为、分布式 tensor parallel 的块管理是工程细节里最值得读的部分。"
    ],
    takeaway: "论文的核心贡献是机制与量化（浪费率 80% → 4%），不是某个具体数字。"
  }
];

export default faq;
