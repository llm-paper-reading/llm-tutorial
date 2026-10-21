import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "Llama 3 报告在系列演进里的位置？",
    answer: [
      "它是开源阵营第一份「全流程教科书」：数据清洗、scaling law、4D 并行、多轮后训练每个环节都有数字。",
      "与 [Qwen2.5](/papers/qwen2-5) 同期同路线（数据优先、架构保守），两者是 2024 年 dense 训练的双参照系。"
    ],
    takeaway: "读 Llama 3 是看一个资源充足的团队如何把每个已知的 best practice 拉满。"
  },
  {
    id: "data",
    question: "15T 数据的清洗流水线有什么值得抄的？",
    answer: [
      "三级去重：URL 级（保留最新版）、文档级（全局 MinHash）、行级（30M 文档桶内出现超 6 次的行删除）。",
      "模型过滤用「Llama 2 标注 + DistilRoberta 打分」的组合；代码与数学走独立的域名抽取管线；markdown 标记被证明有害，全部移除。"
    ],
    takeaway: "行级去重虽然会误删高频好文本，但实测收益为正——激进去重优于保守。"
  },
  {
    id: "scaling",
    question: "scaling law 怎么算出 405B 的？",
    answer: [
      "用 6×10¹⁸ 到 10²² FLOPs 训 40M–16B 小模型，画 IsoFLOPs 抛物线找每个算力档的计算最优模型。",
      "拟合 N*(C)=AC^α 得 (α,A)=(0.53,0.29)，外推到 3.8×10²⁵ FLOPs 给出 402B 参数 / 16.55T token；IsoFLOPs 底部随算力变平，405B 是稳健选择。"
    ],
    takeaway: "两步法还能预测下游 benchmark：先连 NLL 与 FLOPs，再连 NLL 与任务准确率。"
  },
  {
    id: "parallel",
    question: "4D 并行每一维解决什么？",
    answer: [
      "TP 切权重矩阵（机内 NVLink）、CP 切序列长度（长上下文显存）、PP 按层切阶段、DP/FSDP 切数据与优化器状态。",
      "顺序 [TP,CP,PP,DP] 按网络带宽需求排布：最内层要最低延迟留在机内，最外层容忍跨 pod 延迟。"
    ],
    takeaway: "16K H100 上 38–43% BF16 MFU，8K 序列不需要激活检查点。"
  },
  {
    id: "long-context",
    question: "128K 上下文是怎么渐进上去的？",
    answer: [
      "预训练主体用 8K；末段分六个阶段逐步翻倍到 128K，共约 800B token。",
      "每阶段通过两个标准才升级：短上下文评测完全恢复、该长度大海捞针全解。"
    ],
    takeaway: "「先短后长、每步验收」的渐进方案与 Qwen2.5-Turbo 的四阶段方案同构。"
  },
  {
    id: "post-training",
    question: "后训练为什么选 DPO 而不是 PPO？",
    answer: [
      "报告明确说试过 PPO：DPO 在同等规模下计算更省、尤其在 IFEval 这类指令跟随上更好。",
      "两个关键补丁：DPO loss 里 mask 掉格式 token（防止尾重复/突然终止），加 0.2 系数的 NLL 正则保住 chosen 的对数概率。"
    ],
    takeaway: "Llama 3 的 DPO 不是裸用，两个稳定性补丁是常见踩坑的解药。"
  },
  {
    id: "quality",
    question: "SFT 数据的质量控制怎么做？",
    answer: [
      "四件套：主题分类（粗细两级桶）、质量打分（RM 分位 + LLM 三点打分取并集）、难度打分（Instag 意图数 + LLM 难度）、语义去重（RoBERTa 聚类内按质量×难度排序贪心选）。",
      "拒绝采样每 prompt 采 10–30 个响应，RM 选优；PagedAttention 让吞吐翻倍。"
    ],
    takeaway: "「模型生成的数据 + 模型打分过滤」是 Llama 3 后训练的底座。"
  },
  {
    id: "limits",
    question: "读 Llama 3 结果表要注意什么？",
    answer: [
      "405B 的对比对象是 GPT-4（2024 版）与 Nemotron-4 340B，Claude 3.5 Sonnet 在多数项上领先——报告自己承认。",
      "多模态部分（图像/视频/语音 adapter）只做组合式实验，未随 405B 发布。"
    ],
    takeaway: "Llama 3 的强项是语言与代码，多模态是占位性的组合方案而非原生训练。"
  }
];

export default faq;
