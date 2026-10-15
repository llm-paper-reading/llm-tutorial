import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "DeepSeek-OCR 为什么说视觉 token 是被浪费的上下文？",
    "answer": [
      "很多文档图像包含大量排版、空白和视觉冗余，如果直接把高分辨率图像转成大量视觉 token，会迅速消耗上下文预算。",
      "DeepSeek-OCR 的目标是把图像中的文字、结构和语义压缩成更高效的上下文表示。"
    ],
    "takeaway": "OCR 在这里不只是识别文字，也是上下文压缩。"
  },
  {
    "id": "deepencoder",
    "question": "DeepEncoder 的“先感知，再压缩，后知识”是什么意思？",
    "answer": [
      "先感知是从图像中提取文字、布局和视觉结构；再压缩是减少视觉 token 数量；后知识是把压缩后的表示交给语言模型理解和推理。",
      "这样的分层能让视觉前端承担信息筛选，避免 LLM 被低价值视觉 token 淹没。"
    ],
    "takeaway": "视觉编码器要先筛选信息，再交给语言模型。"
  },
  {
    "id": "compression-ratio",
    "question": "为什么 10× 压缩比是重要分水岭？",
    "answer": [
      "压缩比太低，节省上下文不明显；压缩比太高，文字和版面细节会丢失。实验中的 10× 附近体现了效率和信息保真的折中。",
      "这个数字不应被理解成所有任务的固定最佳点，而是报告设置下的重要经验分界。"
    ],
    "takeaway": "压缩比要在 token 成本和信息保真之间折中。"
  },
  {
    "id": "deep-parsing",
    "question": "deep parsing 和普通 OCR 有什么区别？",
    "answer": [
      "普通 OCR 更关心把图像里的字识别出来；deep parsing 还要理解表格、公式、版面层级、阅读顺序和结构语义。",
      "这让 OCR 输出更适合进入 LLM 做问答、检索或文档分析。"
    ],
    "takeaway": "DeepSeek-OCR 的目标是结构化理解，而不只是转文字。"
  },
  {
    "id": "limits",
    "question": "DeepSeek-OCR 的局限在哪里？",
    "answer": [
      "压缩会带来信息损失，尤其是复杂图表、低质量扫描、公式和细粒度排版场景。",
      "另外，不同文档类型对“重要信息”的定义不同，统一压缩策略未必适合所有任务。"
    ],
    "takeaway": "视觉压缩越强，越需要警惕细节丢失。"
  },
  {
    "id": "contexts-optical-compression",
    "question": "为什么叫 contexts optical compression？",
    "answer": [
      "它把图像文档看成一种上下文载体，通过视觉编码器把高成本视觉输入压缩成更紧凑的语义上下文。",
      "这和传统 OCR 只输出文字不同，更强调为 LLM 节省上下文预算。"
    ],
    "takeaway": "这里的 OCR 是给上下文做光学压缩。"
  },
  {
    "id": "ocr1-ocr2",
    "question": "OCR 1.0 和 OCR 2.0 的区别是什么？",
    "answer": [
      "可以理解为从识别文字走向解析文档结构。OCR 2.0 更强调版面、表格、公式和语义层次。",
      "这让输出更适合下游问答、检索和文档智能任务。"
    ],
    "takeaway": "现代 OCR 要输出结构，而不只是字符。"
  },
  {
    "id": "llm-bottleneck",
    "question": "为什么视觉 token 会成为 LLM 瓶颈？",
    "answer": [
      "LLM 的上下文长度和注意力成本有限，视觉 token 太多会挤占文本和推理空间。",
      "压缩视觉 token 可以让模型在相同上下文预算里处理更多页面或更长文档。"
    ],
    "takeaway": "视觉输入越大，越需要信息筛选。"
  }
] satisfies PaperFAQ;

export default faq;
