import type { PaperFAQ } from "@/lib/paper-faq";

const faq = [
  {
    "id": "why-strong-teacher-fails",
    "question": "为什么强老师也可能教不动学生？",
    "answer": [
      "OPD 的监督只发生在学生自己访问到的前缀上。如果老师的推理路径与学生差太远，老师在这些前缀上给出的局部偏好就无法组成一条可学的改进路径。",
      "另一种情况是老师分数更高，但它的优势只体现在学生到不了的状态，或者它与学生在当前状态上的高概率分布几乎一样，这时逐 token 监督没有多少新增信息。"
    ],
    "takeaway": "老师强不等于信号可学；要看它在学生状态上能否提供新信息。"
  },
  {
    "id": "two-conditions",
    "question": "论文总结的两个成功条件是什么？",
    "answer": [
      "第一是思考模式兼容：学生和老师的 top-k 高概率 token 要有足够重叠，否则逐 token 对齐容易变成噪声。",
      "第二是老师要带来新知识：即使思考模式一致、分数更高，如果老师和学生是在同一套数据和 recipe 下训出来的，老师可能只是把同样的东西拟合得更好，没有可迁移的新能力。"
    ],
    "takeaway": "能对上话（overlap 高）和有的可教（新知识）是两件不同的事。"
  },
  {
    "id": "reverse-distillation",
    "question": "weak-to-strong reverse distillation 实验说明了什么？",
    "answer": [
      "这里的 reverse 不是“弱模型教强模型”，而是把 RL 的方向反过来：把 RL 之后的 checkpoint 当学生，蒸回它 RL 之前的版本。",
      "结果是学生几乎精确回退到 RL 前的性能；换成一个更大、分数更高的同家族 teacher，训练轨迹也几乎一样。说明 OPD 学到的是老师的思考模式，而不是老师榜单上的分数。"
    ],
    "takeaway": "OPD 主要在传递推理模式；benchmark 分数不能预测蒸馏效果。"
  },
  {
    "id": "overlap-metrics",
    "question": "overlap ratio、overlap-token advantage、entropy gap 分别该看什么？",
    "answer": [
      "overlap ratio 看学生和老师的 top-k 候选空间是否对齐；overlap-token advantage 看重叠 token 上的置信度是否一致，越接近零越好；entropy gap 看两边在同一状态上的不确定性是否匹配。",
      "成功 run 通常表现为 overlap ratio 持续上升、advantage 靠近零、entropy gap 收窄；失败 run 则三条曲线都停滞。"
    ],
    "takeaway": "三条曲线要一起看，单看 loss 容易把弱信号误判成收敛。"
  },
  {
    "id": "overlap-ablation",
    "question": "为什么只优化 overlap token 也能追平标准 OPD？",
    "answer": [
      "论文把 top-k 支持集拆成重叠和非重叠两部分分别训练，发现只优化重叠部分几乎能追平标准 Student Top-k，而非重叠部分明显更弱。",
      "因为共享的高概率 token 已经承载了约 97%–99% 的概率质量，非重叠 token 的概率很小，贡献的梯度也有限；而且 overlap 优化会自我强化，把更多质量集中到老师偏好的共享 token 上。"
    ],
    "takeaway": "OPD 的主战场是学生与老师共享的高概率 token。"
  },
  {
    "id": "cold-start",
    "question": "off-policy cold start 具体怎么做？",
    "answer": [
      "先用老师生成的 rollout 对学生做一轮 SFT，把学生拉到老师的思考模式附近，再从 SFT checkpoint 出发做标准 OPD。",
      "论文用 Qwen3-1.7B-Base 和 Qwen3-4B teacher，生成约 20 万条数学 rollout 做 SFT，然后用去重后的剩余 prompt 做 OPD；比直接从 base 做 OPD 更稳，最终上限也更高。"
    ],
    "takeaway": "学生太弱时，先离线把它带进可教区，再切到 on-policy。"
  },
  {
    "id": "teacher-prompts",
    "question": "teacher-aligned prompt 为什么有效，又有什么风险？",
    "answer": [
      "老师的策略是被它后训练时的 prompt 塑造的。用相同的模板或相同分布的问题，能让学生生成的状态更接近老师熟悉的状态，从而让高概率 token 的对齐更有效。",
      "但只用老师后训练见过的 prompt 会显著降低学生熵，压缩探索空间。论文建议混入分布外 prompt，保留一部分探索能力。"
    ],
    "takeaway": "prompt 对齐要适度，过纯会把学生训得又窄又自信。"
  },
  {
    "id": "long-horizon",
    "question": "为什么 OPD 在长轨迹上会失效？",
    "answer": [
      "老师的监督是在学生前缀上给出的。学生走得越远，前缀越偏离老师熟悉的状态，老师的局部条件分布就越不可靠。",
      "论文发现中等长度（3K–7K）效果最好，10K/15K 会出现后期 collapse；让老师从学生前缀继续作答，增益从 1K 前缀的约 +0.37 降到 16K 前缀的约 +0.02。"
    ],
    "takeaway": "密集 token 奖励有长度上限，长程任务需要分段或混合稀疏奖励。"
  }
] satisfies PaperFAQ;

export default faq;
