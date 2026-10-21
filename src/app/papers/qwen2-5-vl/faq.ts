import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "Qwen2.5-VL 在 Qwen 视觉线里的位置？",
    answer: [
      "它是 Qwen2-VL 的原生动态分辨率路线做强的一代：窗口注意力 ViT、绝对时间 MRoPE、动态 FPS、HTML 文档解析、GUI Agent 全部在此定型。",
      "[Qwen3-VL](/papers/qwen3-vl) 的 Interleaved-MRoPE、DeepStack、文本时间戳对齐都是对这份报告机制的直接升级。"
    ],
    takeaway: "读 Qwen3-VL 前先读它，三个架构改动的「改了什么」才有参照系。"
  },
  {
    id: "dynamic-res",
    question: "原生动态分辨率牺牲了什么，换来了什么？",
    answer: [
      "换来：任意尺寸图像按 28 的倍数直接进 ViT，细粒度文字与小物体不再被 resize 抹掉；坐标用图像真实尺寸表示，模型感知真实尺度。",
      "牺牲：不同图像 token 数不同，计算负载不均。补救是 ViT 大部分层用窗口注意力（112×112 窗口）把复杂度拉回线性，训练时按输入长度动态打包均衡 LLM 负载。"
    ],
    takeaway: "动态分辨率的代价由窗口注意力和动态打包共同买单。"
  },
  {
    id: "mrope-time",
    question: "MRoPE 对齐绝对时间是什么意思？",
    answer: [
      "多模态 RoPE 把频率维分给时间/高/宽三个轴；Qwen2.5-VL 让时间轴的 ID 与视频的绝对时间戳对齐（帧时间戳换算成时间 ID）。",
      "效果是模型能比较不同 FPS 视频里事件的节奏，并做秒级的事件定位。"
    ],
    takeaway: "把「时间」变成模型可比较的绝对量，而不是随采样率漂移的序号。"
  },
  {
    id: "html",
    question: "为什么把文档解析统一成 HTML？",
    answer: [
      "表格、图表、公式、配图、乐谱、化学式各有各的结构，HTML 标签 + data-bbox 坐标属性可以统一承载全部版式信息。",
      "段落、表格、图表各自带坐标，阅读顺序按版式编排——一个通用模型替代传统的版面分析 + 文本抽取 + 图表理解多模型流水线。"
    ],
    takeaway: "文档解析的终局不是更好的专用模型，而是更通一的输出格式。"
  },
  {
    id: "gui-agent",
    question: "GUI Agent 能力是怎么训出来的？",
    answer: [
      "感知侧：收集手机/网页/桌面截图，合成引擎生成截图描述与 UI 元素 grounding 标注。",
      "决策侧：三端操作统一为函数调用格式共享动作空间；多步轨迹重排为函数序列，并让标注者对着操作前后截图写「为什么这么操作」的推理，再过滤低质量。"
    ],
    takeaway: "ScreenSpot Pro 43.6 对 Qwen2-VL 的 1.6，差距主要来自感知 grounding 而不是决策。"
  },
  {
    id: "stages",
    question: "三阶段预训练各练什么？",
    answer: [
      "阶段一（1.5T）：只训 ViT，图像描述/知识/OCR 对齐视觉与语言。",
      "阶段二（2T）：全参数解冻，交错数据、VQA、视频、grounding、agent、纯文本全上。",
      "阶段三（0.6T）：序列长拉到 32K，长视频、长 agent、长文档。"
    ],
    takeaway: "先对齐再全量再拉长——和 LLM 的「对齐→训练→长上下文」节奏同构。"
  },
  {
    id: "limits",
    question: "读 Qwen2.5-VL 结果表要注意什么？",
    answer: [
      "GUI Agent 在线评测里部分基线（GPT-4o、Gemini 2.0）用了 SoM 标注辅助，Qwen2.5-VL-72B 不用辅助标记直接可比或更好，口径要在表注里看清。",
      "OSWorld 上仍低于 Claude（8.83 对 14.90），桌面级长程操作是当时的保留短板。"
    ],
    takeaway: "grounding 已到产品级，长程桌面操作的可靠性还差一代。"
  }
];

export default faq;
