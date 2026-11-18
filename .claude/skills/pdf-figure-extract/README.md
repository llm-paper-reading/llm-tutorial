# pdf-figure-extract

从论文 PDF 中安全抽取 Figure 为 PNG / SVG，杜绝"截掉半边字 / 裁掉子图 / 混入 caption 或正文 / 图 404"。

详见 [SKILL.md](SKILL.md)。核心防线：

1. **caption 锚定**：以 `Figure N:` 图注为锚点向"上"找图区，硬停在 caption 之前；支持 `Figure 1.1` 章节编号。
2. **强制留白**：PNG 模式注入 1.2% 白边；`check_border.py` 校验四边墨迹（背景感知，SVG 先渲染再查）。
3. **`--clip` 显式矩形**：双栏排版、特殊图注格式（`Figure 1 |` / `Fig. 1:` / 无冒号）时按栏精确指定。
4. **内容核查**：用 fitz `get_text(clip=...)` 确认 clip 内无 caption / 页眉 / 正文。
5. **浏览器人工确认**才允许提交。

## 快速用

```bash
conda activate py3.12
cd /tmp && mkdir work && cd work
curl -sL -o paper.pdf "https://arxiv.org/pdf/2205.14135"

# 矢量图 → SVG（推荐）
python .claude/skills/pdf-figure-extract/scripts/extract_svg.py paper.pdf 2 1 fig1.svg

# 位图 → PNG（自动白边）
python .claude/skills/pdf-figure-extract/scripts/extract_fig.py paper.pdf 2 2 fig1.png

# 双栏页/特殊图注 → 显式矩形（pt）
python .claude/skills/pdf-figure-extract/scripts/extract_svg.py paper.pdf 7 8 fig8a.svg --clip "48,40,300,176"

# 批量边界检查（PNG/JPG/SVG/目录）
python .claude/skills/pdf-figure-extract/scripts/check_border.py path/to/papers/
```

## 何时不适合

- 博客/网页截图来源（非 PDF）：贴边只能重新截图。
- 跨页图：手工处理。
