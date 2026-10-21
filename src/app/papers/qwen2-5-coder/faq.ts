import type { PaperFAQ } from "@/lib/paper-faq";

const faq: PaperFAQ = [
  {
    id: "why-read",
    question: "为什么代码模型的报告值得非代码方向读者看？",
    answer: [
      "它是一份「领域模型怎么做数据配比」的完整案例：70:20:10 的反直觉结论、四级渐进过滤、合成数据配执行验证。",
      "仓库级 FIM 也代表了一类通用思路：把结构上下文显式编码进训练格式。"
    ],
    takeaway: "把 Qwen2.5-Coder 当「领域化配方手册」读，收获超出代码范围。"
  },
  {
    id: "mixture",
    question: "为什么 70% 代码反而比 100% 代码更强？",
    answer: [
      "报告在 7B 上做了 100:0:0、85:10:5、70:20:10 三组配比实验。",
      "结果 70:20:10 在 HumanEval/MBPP、MATH/GSM8K、MMLU/C-Eval 全线最高，平均分 55.0 对纯代码的 31.3。"
    ],
    takeaway: "文本与数学是代码能力的「暗营养」，一点不吃反而饿着。"
  },
  {
    id: "grounding",
    question: "Text-Code Grounding 数据的四级过滤是什么？",
    answer: [
      "从 Common Crawl 召回文档、教程、博客等代码相关文本，做粗到细的四级层级过滤（fastText 等小模型构建）。",
      "每级过滤后 1.5B 模型的 HumanEval+MBPP 平均分从 41.6 提到 46.8。"
    ],
    takeaway: "「讲代码的自然语言」是代码模型的重要语料，且小模型过滤就够用。"
  },
  {
    id: "fim",
    question: "仓库级 FIM 比文件级 FIM 多了什么？",
    answer: [
      "文件级 FIM 只在单文件内挖空补全；仓库级 FIM 用 repo_name、file_sep 等特殊 token 拼接整个仓库的文件序列，再在其中一个文件里挖空。",
      "上下文因此从 8K 扩到 32K（RoPE 基频同步提至 1M，YARN 外推到 128K），模型学会跨文件找定义与依赖。"
    ],
    takeaway: "跨文件补全的关键不是更长窗口，而是把「文件结构」编码进 token 流。"
  },
  {
    id: "instruction",
    question: "指令数据怎么保证代码真的能跑？",
    answer: [
      "三道工序：CodeBERT 语言识别筛主流语言；LLM 从 GitHub 代码片段反向合成指令；checklist 九维打分（一致性、正确性、清晰度、注释、教育价值等）。",
      "最后过「多语言沙箱」：AST 静态检查 + 自动生成单元测试 + 隔离执行，自包含代码必须跑通才保留。"
    ],
    takeaway: "执行反馈是代码指令数据的最终裁判，人工审核无法规模化到这个位置。"
  },
  {
    id: "scaling",
    question: "报告里「Scaling is All You Need」讨论了什么？",
    answer: [
      "观察到同代内代码推理能力随尺寸稳定上升，尺寸是当时最可靠的收益来源。",
      "结合三阶段流水线（文件级预训练 → 仓库级预训练 → SFT/DPO），32B 把同尺寸竞品全面拉开。"
    ],
    takeaway: "在数据配方确定后，尺寸是最可预测的杠杆——这为后续 Qwen3-Coder 系列埋下伏笔。"
  },
  {
    id: "limits",
    question: "读 Qwen2.5-Coder 结果表要注意什么？",
    answer: [
      "对比基线停在 2024 年（DeepSeek-Coder-V2、CodeStral、GPT-4o-20240806），数字不能与今日模型横比。",
      "多语言指令数据用 multi-agent 协作合成，报告未给完整消融，合成质量的上限没有量化。"
    ],
    takeaway: "配方可信度高于具体分数，结论可迁移、数字要看年份。"
  }
];

export default faq;
