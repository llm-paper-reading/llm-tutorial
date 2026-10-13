import type { Paper } from "@/lib/papers";

const paper = {
  slug: "ui-tars-2",
  title: "UI-TARS-2：GUI Agent 的多轮强化学习",
  navTitle: "UI-TARS-2",
  paperTitle: "UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning",
  desc: "字节跳动的原生 GUI Agent（截图进 → 动作出）：多轮交互式 RL 把整个任务轨迹当训练单元，浏览器沙箱/安卓/游戏环境提供可验证 reward；PPO（明确胜过 GRPO）+ Length-Adaptive GAE；数据飞轮 + 交互式标注平台；推理时放大交互步数预算持续涨分。",
  motivation: "GUI Agent 不能只学单步点击：真实任务需要多轮观察、纠错和跨应用操作，而 DOM/接口依赖也限制了泛化。UI-TARS-2 的问题意识是把整个交互轨迹作为 RL 训练单元，用可验证环境奖励训练一个只看截图也能持续行动的通用 GUI 智能体。",
  tags: ["Agentic 训练", "强化学习", "多模态", "数据合成"],
  icon: "🖥️",
  authors: ["Haoming Wang", "et al."],
  venue: "arXiv",
  year: 2025,
  arxivUrl: "https://arxiv.org/abs/2509.02544",
  pdfUrl: "https://arxiv.org/pdf/2509.02544",
  codeUrl: "https://github.com/bytedance/ui-tars",
} satisfies Paper;

export default paper;
