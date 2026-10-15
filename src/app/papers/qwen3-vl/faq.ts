import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "Qwen3-VL 想跨过哪三个台阶？",
    "answer": [
      "它面向视觉感知、复杂推理和真实界面行动三类能力，而不是只做图像问答。",
      "因此架构和训练都围绕长视频、细粒度 OCR、GUI 操作和多模态推理展开。"
    ],
    "takeaway": "Qwen3-VL 的目标是从看懂到想清再到执行。"
  },
  {
    "id": "imrope",
    "question": "Interleaved-MRoPE 解决什么问题？",
    "answer": [
      "多模态输入有时间、高度、宽度等不同位置维度。Interleaved-MRoPE 把频率维交错分配给这些维度，让时间轴也获得足够频率覆盖。",
      "这对长视频尤其重要，因为模型需要在很长时间范围内定位和关联事件。"
    ],
    "takeaway": "位置编码要同时服务空间和时间。"
  },
  {
    "id": "deepstack",
    "question": "DeepStack 为什么不是只取最后一层视觉特征？",
    "answer": [
      "不同 ViT 层包含不同粒度的视觉信息：浅层更偏局部细节，深层更偏语义。DeepStack 把多层视觉特征注入 LLM 对应层，增强图文对齐和细节捕捉。",
      "这比单层投影更适合 OCR、grounding 和复杂界面理解。"
    ],
    "takeaway": "多层视觉注入能保留更多细粒度信息。"
  },
  {
    "id": "timestamp",
    "question": "Text-Timestamp Alignment 有什么用？",
    "answer": [
      "它把时间戳作为文本 token 与视频帧对齐，让模型能用语言形式表达和定位时间。",
      "这对长视频问答、事件定位和视频大海捞针任务很关键。"
    ],
    "takeaway": "时间定位被显式纳入语言接口。"
  },
  {
    "id": "limits",
    "question": "读 Qwen3-VL 官方材料要注意什么？",
    "answer": [
      "它主要来自官方博客和模型卡，很多训练细节、数据配比和完整消融并不像正式技术报告那样充分披露。",
      "因此可以信任其公开指标和架构说明，但对未公开机制要保持限定表达。"
    ],
    "takeaway": "官方发布材料适合把握能力和方向，细节不要补造。"
  },
  {
    "id": "ocr-languages",
    "question": "OCR 语言扩展说明了什么？",
    "answer": [
      "多语言 OCR 能力体现模型对不同文字系统、版式和视觉细节的覆盖。",
      "这对全球文档理解和 GUI 场景很重要。"
    ],
    "takeaway": "VLM 的实用性很大程度取决于细粒度 OCR。"
  },
  {
    "id": "gui-agent",
    "question": "视觉 Agent 操作 GUI 难在哪里？",
    "answer": [
      "GUI 任务需要识别界面元素、理解指令、规划动作并根据反馈修正。",
      "这要求模型把视觉 grounding 和多步决策结合起来。"
    ],
    "takeaway": "GUI Agent 是视觉理解和行动规划的结合。"
  },
  {
    "id": "video-needle",
    "question": "视频大海捞针测试说明什么？",
    "answer": [
      "它测试模型能否在长视频上下文中定位稀疏关键信息，而不是只理解短片段。",
      "高分说明长上下文机制和时间对齐在视频任务上有效。"
    ],
    "takeaway": "长视频能力看的是远距离定位和保持。"
  }
] satisfies PaperFAQ;

export default faq;
