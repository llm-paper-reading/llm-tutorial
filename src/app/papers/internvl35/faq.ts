import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "problem",
    "question": "InternVL3.5 的多模态 RL 面临哪三道坎？",
    "answer": [
      "多模态 RL 要同时处理视觉感知、语言推理和奖励验证，难度比纯文本更高。",
      "InternVL3.5 通过 Cascade RL、视觉分辨率路由和部署解耦来处理这些问题。"
    ],
    "takeaway": "多模态 RL 的难点在感知、推理和效率同时优化。"
  },
  {
    "id": "cascade-rl",
    "question": "Cascade RL 在多模态里有什么作用？",
    "answer": [
      "离线重放可以复用已有轨迹，在线优化则让模型继续在当前策略下改进。级联方式把训练拆成更可控的阶段。",
      "这有助于降低多模态 RL 的不稳定性。"
    ],
    "takeaway": "Cascade RL 是把复杂多模态后训练分阶段推进。"
  },
  {
    "id": "resolution-router",
    "question": "Visual Resolution Router 为什么重要？",
    "answer": [
      "不同任务需要的视觉分辨率不同。OCR 和细粒度定位需要更多视觉 token，粗粒度识别则不一定。",
      "分辨率路由让模型按任务分配视觉预算，减少无效计算。"
    ],
    "takeaway": "视觉 token 应该按任务花，而不是固定花。"
  },
  {
    "id": "dvd",
    "question": "DvD 解耦部署是什么意思？",
    "answer": [
      "视觉模块和语言模块在部署时有不同成本和伸缩需求。解耦可以让系统按任务动态组合资源。",
      "这对多模态模型的真实服务很重要，因为视觉编码往往是额外瓶颈。"
    ],
    "takeaway": "多模态部署需要把视觉和语言成本分开管理。"
  },
  {
    "id": "limits",
    "question": "InternVL3.5 的结果应该怎么谨慎读？",
    "answer": [
      "多模态 benchmark 口径差异很大，尤其是 OCR、视频、GUI 和推理任务，不能简单合成一个总排名。",
      "还要关注视觉 token 成本、分辨率设置和推理预算。"
    ],
    "takeaway": "多模态能力要和视觉预算一起评估。"
  },
  {
    "id": "vit-mlp-llm",
    "question": "ViT–MLP–LLM 骨架为什么还重要？",
    "answer": [
      "ViT 提供视觉特征，MLP 对齐视觉和语言空间，LLM 负责语言推理和生成。",
      "很多 VLM 架构更新都在这个骨架上改进注入方式、分辨率和训练策略。"
    ],
    "takeaway": "VLM 的基本桥接问题仍是视觉到语言空间对齐。"
  },
  {
    "id": "online-offline",
    "question": "离线重放和在线优化为什么要结合？",
    "answer": [
      "离线重放样本效率高，在线优化更贴近当前策略。结合二者可以兼顾稳定和适应性。",
      "这对昂贵的多模态 RL 尤其重要。"
    ],
    "takeaway": "多模态 RL 需要复用旧轨迹，也要适应新策略。"
  },
  {
    "id": "reasoning-efficiency",
    "question": "多模态推理和效率为什么会冲突？",
    "answer": [
      "更高分辨率和更多视觉 token 能提升细节理解，但会显著增加计算成本。",
      "视觉路由和解耦部署就是在能力和效率之间做动态分配。"
    ],
    "takeaway": "看得越细越贵，因此需要路由。"
  }
] satisfies PaperFAQ;

export default faq;
