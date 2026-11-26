import type { Paper } from "@/lib/papers";

const paper = {
  slug: "vllm",
  title: "vLLM：PagedAttention 与 KV cache 分页管理",
  navTitle: "vLLM",
  paperTitle: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
  desc: "vLLM 论文精读：KV cache 连续预分配导致 60–80% 显存浪费（内碎片、外碎片、预留）；PagedAttention 借操作系统虚拟内存的分页思想，把 KV cache 切成固定大小的块按需分配、逻辑块映射物理块，浪费降到 4% 以下；块级 copy-on-write 与跨请求共享支持并行采样与 beam search。相同延迟下吞吐 2–4×。",
  motivation: "LLM 推理是 memory-bound：要提吞吐只能加大 batch，但 KV cache 按最大长度连续预分配，实际有效利用率最低只有 20.4%，显存浪费卡死了 batch 上限。vLLM 的动机是把操作系统解决内存碎片与共享的经典方案——虚拟内存与分页——搬到 KV cache 管理上，让「能装多少请求」不再被预留空间绑架。",
  tags: ["NVIDIA 系列", "推理优化", "注意力机制"],
  icon: "🚀",
  authors: ["Woosuk Kwon", "Zhuohan Li", "et al."],
  venue: "SOSP 2023",
  year: 2023,
  arxivUrl: "https://arxiv.org/abs/2309.06180",
  sourceUrl: "https://arxiv.org/pdf/2309.06180",
} satisfies Paper;

export default paper;
