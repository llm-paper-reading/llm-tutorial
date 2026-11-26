import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "three-challenges",
    "question": "通用时序预测的三个难点是什么？",
    "answer": [
      "第一是跨频率：分钟级、小时级、日级数据的周期和 patch 尺度差异很大，单一 patch size 很难同时适配。",
      "第二是任意变量数：多变量序列的变量数不固定，各变量语义也不同；第三是分布异质：不同数据集的取值范围和分布形状不同，预定义的正态或 Student-t 未必合适。"
    ],
    "takeaway": "Moirai 的三个模块分别对应频率、变量数和分布。"
  },
  {
    "id": "multi-patch",
    "question": "多 patch size 投影是怎么工作的？",
    "answer": [
      "模型为 8、16、32、64、128 等不同 patch size 各学习一套输入/输出投影层；高频数据用更大的 patch 降低注意力开销，低频数据用更小的 patch 把计算留给 Transformer。",
      "每个频率按预设规则选择 patch size，但同一 patch size 的投影权重在不同频率间共享，所以不是每个数据集一套参数。"
    ],
    "takeaway": "用多套投影适配频率，而不是为每个频率训一个模型。"
  },
  {
    "id": "any-variate",
    "question": "Any-variate Attention 怎么处理不定的变量数？",
    "answer": [
      "它把多变量序列沿变量维展平成一条 token 序列，用 RoPE 编码时间位置，再用两个可学习的二值 bias 区分“同一个变量”和“不同变量”。",
      "这样模型可以接受任意数量的变量，并保持对变量顺序的置换等变、对变量索引的置换不变；变量数变化不需要改架构。"
    ],
    "takeaway": "把变量维拍平，用注意力 bias 告诉模型谁和谁是同一个变量。"
  },
  {
    "id": "mixture",
    "question": "为什么要用混合分布而不是单一分布？",
    "answer": [
      "不同数据集的支撑集和形状差异很大：正值数据不适合对称分布，重尾数据不适合正态分布。固定一个参数分布会在很多数据集上给出不合适的预测区间。",
      "Moirai 混合 Student-t、负二项、对数正态和低方差正态等分量，学习每个分量的权重和参数；训练目标是混合分布的负对数似然，推理时可以给出分位数和区间。"
    ],
    "takeaway": "混合分布让同一个模型适配不同支撑集和尾部形状。"
  },
  {
    "id": "lotsa",
    "question": "LOTSA 是什么，规模有多大？",
    "answer": [
      "LOTSA 是论文构建的大规模开放时序档案，约 27.6B 个观测，覆盖能源、交通、气候、云运维、网络、销售、自然、经济金融、医疗九个领域。",
      "数据频率从年度到秒级都有，其中小时级约占 72%、能源领域约占 59%；论文用 Arrow 统一存储，并公开数据、模型权重和 UNI2TS 训练库。"
    ],
    "takeaway": "LOTSA 的价值是规模和领域/频率多样性，而不只是观测数。"
  },
  {
    "id": "training",
    "question": "统一训练的任务分布是怎么采样的？",
    "answer": [
      "训练时随机裁一段最长 512 的窗口，再把窗口切成 lookback 和 horizon，预测长度按 15%–50% 的比例均匀采样，因此模型见过各种 context/horizon 组合。",
      "变量数从 beta-binomial（n=128, a=2, b=5，均值约 37）采样；还会对多变量做变量子采样，或把单变量序列随机拼成多变量，以增强任意变量数的泛化。"
    ],
    "takeaway": "随机 context/horizon/变量数，让模型在推理时可以接任意形状的输入。"
  },
  {
    "id": "results",
    "question": "零样本效果到底如何？",
    "answer": [
      "在 Monash 分布内评测上，单个 Moirai 的 normalized MAE 约 0.655（Small）/0.60（Base）/0.57（Large），低于图中最好的逐数据集基线 FFNN（约 0.745）。",
      "在 6 个未见数据集上的零样本概率预测中，Moirai 在 Solar、Turkey Power 上优于全监督基线，在 Electricity、Walmart、Weather、Istanbul 上接近但未必最好；总体是 competitive or superior，而不是全面碾压。"
    ],
    "takeaway": "一个模型跨数据集已很有竞争力，但逐数据集全监督仍有优势场景。"
  },
  {
    "id": "ablation",
    "question": "哪个设计最重要？",
    "answer": [
      "消融显示去掉多 patch size 后 normalized MAE 从 0.655 恶化到 1.156，是影响最大的模块；去掉 Any-variate Attention 恶化到 0.904，去掉 LOTSA 恶化到 0.809。",
      "去掉混合分布（0.740）和 sequence packing（0.785）也有明显退化，说明四个设计都不是装饰。"
    ],
    "takeaway": "多 patch size 是跨频率训练的关键，Any-variate Attention 和 LOTSA 次之。"
  }
] satisfies PaperFAQ;

export default faq;
