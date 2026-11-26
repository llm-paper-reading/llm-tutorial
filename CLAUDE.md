# 项目内容规范

## 构建与开发服务器

- 运行 `npm run build` 前先停掉 dev server（`lsof -ti:3742 | xargs kill`）：build 与 dev 同时跑会双份编译，内存峰值翻倍。
- dev server 的 Turbopack 缓存（`.next/dev/`）会随文件改动持续膨胀，超过 2–3GB 时停掉 dev server 后 `rm -rf .next/dev` 再重启；该目录不影响 `out/` 静态产物，重启后增量重建。

## 教程与论文图片规范

- 教程和论文页面应尽量包含关键图片或图表，尤其是能帮助理解模型架构、训练流程、算法机制、实验对比的核心图。
- 图片必须注明来源：图注先说明图展示的内容，再标注论文、报告或官方资料名称及 Figure / Table 编号；来源信息使用更小字号，样式由全站统一组件或布局控制。
- 论文图片优先使用原始论文中的图。矢量内容优先抽取为 SVG，避免截图失真；原始资料不是图片格式时也优先转矢量；只有矢量效果不好或原图本身是位图时，才使用高分辨率 PNG / JPG。
- 从论文抽图时去掉论文自带的 caption，在 MDX 页面中使用本站统一风格的中文图注。
- **抽图必须用 `pdf-figure-extract` skill**（https://github.com/llm-paper-reading/pdf-figure-extract，独立维护），不要手估坐标直接裁——历史上 24 张图因手估 bbox 出现贴边裁字（顶部/底部文字被切一半）或图区误判（把正文、页眉、表格裁进图里）。安装：`npx skills add llm-paper-reading/pdf-figure-extract`，或把仓库中的 `skills/pdf-figure-extract/` 目录复制到项目的 `.claude/skills/` 下；用法、`--clip` 与双栏 / 特殊图注等已知坑见 skill 的 `SKILL.md`，此处不重复。

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
