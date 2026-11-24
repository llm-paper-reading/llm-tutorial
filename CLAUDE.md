# 项目内容规范

## 构建与开发服务器

- 运行 `npm run build` 前先停掉 dev server（`lsof -ti:3742 | xargs kill`）：build 与 dev 同时跑会双份编译，内存峰值翻倍。
- dev server 的 Turbopack 缓存（`.next/dev/`）会随文件改动持续膨胀，超过 2–3GB 时停掉 dev server 后 `rm -rf .next/dev` 再重启；该目录不影响 `out/` 静态产物，重启后增量重建。

## 教程与论文图片规范

- 教程和论文页面应尽量包含关键图片或图表，尤其是能帮助理解模型架构、训练流程、算法机制、实验对比的核心图。
- 图片必须注明来源，优先在图注中写明论文、报告或官方资料名称，以及 Figure / Table 编号。
- 论文图片优先使用原始论文中的图；如果 PDF 中的图是矢量图，优先抽取为 SVG，避免截图导致失真。
- 如果原始资料不是图片格式，优先转换为矢量格式，例如 SVG；只有在矢量抽取效果不好或原图本身是位图时，才使用高分辨率 PNG / JPG等。
- 从论文中抽取图片时，尽量去掉论文自带的 caption，在 MDX 页面中使用本站统一风格的中文图注。
- 图片 caption 应先说明图展示的内容，再标注来源；来源信息使用更小字号，样式由全站统一组件或布局控制。
- **抽图必须用 `pdf-figure-extract` skill**（仓库地址：https://github.com/llm-paper-reading/pdf-figure-extract，独立维护；按需安装到 `.claude/skills/pdf-figure-extract/`），不要手估坐标直接裁。历史上 24 张图因手估 bbox 出现贴边裁字（顶部/底部文字被切一半）或图区误判（把正文、页眉、表格裁进图里）。skill 提供三段脚本：
  - 安装：`npx skills add llm-paper-reading/pdf-figure-extract`，或把仓库中的 `skills/pdf-figure-extract/` 目录复制到项目的 `.claude/skills/` 下；
  - `extract_fig.py`：PNG 提取（锚定 caption、自动注入白边、四边墨迹自检）；
  - `extract_svg.py`：矢量图提 SVG（经 `pdftocairo`，`--clip x0,y0,x1,y1` 手工指定矩形，单位 pt）；
  - `check_border.py`：批量边界检查（支持 PNG/JPG/SVG 目录），非零退出码即有问题，**不许忽略**。
- 抽图后必须做三项校验，全部通过才算完成：
  1. `check_border.py` 对目标目录跑一遍，全绿（四边墨迹 < 0.3%）；
  2. 用 fitz `get_text(clip=...)` 检查 clip 区域内不含 caption 文本、页眉、正文段落；
  3. 浏览器打开页面肉眼确认（提交前必须）。
- 常见坑（skill 已内置防护，手工操作时注意）：
  - 双栏排版页：caption 上方的启发式会把另一栏的图/正文误并入，必须 `--clip` 按栏指定矩形；
  - caption 格式差异：`Figure 1:`、`Figure 1 |`、`Fig. 1:`、`Figure 1.1`（章节编号）各论文不同，脚本锚定失败时改用 `--clip`；
  - caption 与图间隙过小（< 6pt）：clip 下界要卡在「图内容底」与「caption 顶」之间，先列出该 y 区间的文本行再定值；
  - 页眉/页脚：图区 union 可能伸进页眉（y < 40），clip 上界要避开；图与表格同页时，先分清目标块是 IMG 还是 TXT；
  - SVG 无法注入白边：贴边无法修复时改用 PNG 模式（自动加 1.2% 白边）；
  - 博客截图（非 PDF 来源）无法走此流程，贴边只能重新截图。
- 常用转换方式（skill 内部使用）：
  - `pypdf` / PyMuPDF：裁剪 PDF 页面盒，适合先定位图区域。
  - `pdftocairo -svg`：将裁剪后的 PDF 转为 SVG。
  - `pdftoppm -png`：仅在需要位图预览或 SVG 效果不好时使用。

## 知识溯源与引用规范

- 教程和论文页面的重要知识点必须添加引用，包括核心定义、算法公式、模型结构、训练流程、实验数字、参数规模、benchmark 结果和关键结论。
- 引用优先使用一手来源：原始论文、官方技术报告、官方文档、官方博客、项目 README、模型卡；第三方博客只能作为补充。
- 参数量、训练 token 数、GPU hours、benchmark 分数、上下文长度、吞吐提升等数字必须可追溯到明确来源；不确定时使用“报告称”“论文给出”等限定表达。
- 不补造未公开细节，包括 loss、teacher routing、数据配比、训练超参、系统架构等。
- 页面末尾尽量使用 `<References>` 统一列出来源，并说明每个来源支撑的内容；“参考资料”标题不纳入正文章节编号，统一写作 `## 参考资料`。
- 正文中的重要论断应在句末添加引用角标 `<Cite n={N} />`（多条用 `<Cite n={[1,4]} />`），编号与 `<References>` 列表条目一一对应；核心定义、公式、实验数字、benchmark 结果、关键结论必须带角标，同一论断只在首次出现处标注，小结/表格/FAQ 等汇总内容不重复标注。
- 站内已有相关教程或精读时，优先添加内部链接。
- 不同 harness、token budget、工具条件或评测口径下的结果，不直接横向排名。
- 追加引用时，若论文提供 tex 源（如 arXiv 源码），先读原文的 `\citep{...}` 使用位置与 `thebibliography` 的映射，再按正文短语反查对应工作，不凭印象补 arXiv 编号。
- 所有将进入 `<References>` 的 arXiv 链接，写入前必须用 arXiv API（`export.arxiv.org/api/query?id_list=...`）批量核对编号与标题一致；无 arXiv 的重要会议论文（KDD / CVPR / ECCV / NeurIPS workshop 等）优先使用 `openaccess.thecvf.com`、`dl.acm.org` 或会议官网（如 `kdd.org`）链接，并核对链接页面所示届次与年份是否和论文一致（URL 中的年份可能误导，例如接受列表挂在下一年站点下）。
- 原论文参考文献表也可能存在错误著录，关键条目（尤其跨界、重名、同缩写论文）需二次核实后再引用，不能整段照抄。
- 完成编辑后做一次编号一致性自检：`grep -oE 'Cite n=\{[^}]+\}' <page>.mdx | sort | uniq -c`，确认正文中出现的每个编号在 `<References>` 中都有且仅有一个对应条目，无错位、无悬空。
- 找不到稳定一手链接的引用，写明作者、题名、会议/期刊与年份即可，不强行附链接；严禁为了凑链接而引用错误或二手页面。
