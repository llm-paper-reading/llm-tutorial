---
name: pdf-figure-extract
description: 从论文 PDF 中安全抽取 Figure 为 PNG/SVG，保证不贴边裁剪、不含论文自带 caption、可校验。用于把 arXiv/会议 PDF 中的架构图、曲线图、流程图抽取到 machine-learning-tutorial 等静态站点的 public/ 目录。触发场景：用户说"从论文抽取 Figure N"、"裁一张论文图"、"把 PDF 里的架构图拿出来"、"论文图片 404 / 撕裂 / 被切边"。
metadata:
  author: machine-learning-tutorial
  version: "1.1.0"
---

# PDF Figure Extract

## 何时使用

机器教程站点的论文页经常出现两类历史问题，本 skill 的职责就是消除它们：

| 问题 | 成因 | 本 skill 的防线 |
|---|---|---|
| 图被切边（顶部/底部字被切一半、坐标轴文字没截全） | 手估 bbox + 无校验 | 贴边自动检测 + 强制安全边距 |
| 图 404 / 撕裂 | 只写了 MDX 引用、没产出文件 | 提取后立即落盘并校验存在 |
| 把论文自带的 caption 也裁进图 | 用整页截图式提取 | 排除 caption 区，MDX 侧用中文图注 |

## 流程（四步，**不要跳步**）

1. **下载 PDF 放进临时目录**，绝不在 `public/` 里操作。
2. **定位 Figure**：用 `pdftotext -layout` 或 fitz 找到 `Figure N:` 所在页。
3. **抽取**用已验证脚本（都在 `${CLAUDE_SKILL_DIR}/scripts/`，先 `conda activate py3.12`）：
   - 矢量图（架构/示意图优先）→ `extract_svg.py` 直接转 SVG，无限清晰。
   - 位图/通用 → `extract_fig.py` 自动定位图区（caption 上方的 image/vector 块并集）并**注入强制白边**。
4. **校验**：
   - 文件存在；
   - 脚本自动校验四边墨迹比例（>0.3% 即 WARN 退出码 3，**不许忽略**）；
   - 用 `check_border.py` 可对目录批量复检；
   - 在浏览器打开目标路由肉眼确认（**提交前必须**，脚本判定 OK 不等于图裁对了内容）。

**禁止**：
- 无校验直接覆盖线上图片；
- 批量替换后不看页面；
- 把 PDF 的 caption 留在图里（MDX 用中文图注）；
- 跳过浏览器人工核对就 commit。

## 触发即用的三段脚本

先 `conda activate py3.12`：

- `extract_fig.py <pdf> <page> <fig> <out.png> [--dpi 300] [--margin-pt 20] [--clip x0,y0,x1,y1]`：PNG 提取，自动留白 + 边界自检。`fig` 支持 `1` 或章节式编号 `3.1`；`--clip` 指定显式矩形（pt）时跳过 caption 锚定。
- `extract_svg.py <pdf> <page> <fig> <out.svg> [--margin-pt 20] [--clip x0,y0,x1,y1]`：SVG 矢量提取（经 pdftocairo）。
- `check_border.py <path...>`：独立校验 PNG/JPG/SVG（目录可批量），背景感知，深色图不误报；SVG 先经 rsvg-convert 渲染再检查。

## 已知坑与对策（实战沉淀，遇到即查）

| 症状 | 原因 | 对策 |
|---|---|---|
| caption 锚定报 "not found" | 图注格式是 `Figure 1 \|`、`Fig. 1:`、`Figure 1 Illustration`（无冒号）、`Figure 1.1`（章节编号） | `--clip` 显式矩形；章节编号可作 `fig` 参数直接传 |
| 提取结果混入正文/另一栏的图 | 双栏排版，caption 上方启发式跨栏误并 | `--clip` 按栏指定：先打印页面块布局（`get_text('dict')` blocks + `get_drawings()`），确认目标栏的 x 区间 |
| 混入页眉（"TECHNICAL REPORT"、页码） | 图区 union 伸到 y < 40 | clip 上界压到页眉底线之下；落盘前用 `get_text(clip=...)` 检查无页眉文字 |
| 混入 caption 末行 | 图与 caption 间隙 < 6pt，clip 下界卡不准 | 列出 caption 顶上方 20pt 内的所有文本行 y 坐标，clip 下界取「图内容底 + 1~2pt、caption 顶 − 2pt」之间 |
| 底部 0.1–0.5% 残余墨迹 | x 轴标签/tick 线本身贴近 clip 下界（SVG 无法注入白边） | clip 再往下放 1~2pt；仍不行改用 `extract_fig.py` PNG 模式（自动加 1.2% 白边） |
| 表格被当图裁入 | 图与 Table 同页，块类型未区分 | 打印块布局看 `type==1`（IMG）与 TXT 块位置，clip 只圈目标 |
| 博客截图贴边 | 来源是网页截图，非 PDF | 此 skill 不适用，需浏览器重新截图 |

## 核对清单（提交前逐项过）

- [ ] 目标目录（`public/papers/<slug>/`）文件存在
- [ ] `python check_border.py` 全绿
- [ ] `get_text(clip=...)` 确认 clip 内无 caption / 页眉 / 正文
- [ ] dev server 下访问 `/papers/<slug>/` 所有 `<img>` 200、页面不再出现"裂图"或裁字
- [ ] caption 已剥离，页面用中文图注（项目是 MDX）
- [ ] 删除被替换的旧文件（PNG→SVG 迁移时旧 PNG 别留双份）

完成提取后，**推荐做法**：先做 e2e 浏览器人工核对（打开目标网页），再 commit；不要跨过这步。
