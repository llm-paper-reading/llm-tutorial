export type ResourceLink = {
  title: string;
  href: string;
  tag?: string;
  desc: string;
};

export type ResourceGroup = {
  id: string;
  title: string;
  desc: string;
  links: ResourceLink[];
};

export const featuredResources: ResourceLink[] = [
  {
    title: "Hugging Face Papers",
    href: "https://huggingface.co/papers/trending",
    tag: "趋势发现",
    desc: "Papers with Code Trending 当前会跳转到这里，适合快速扫大模型、多模态与开源模型的每日热门论文。",
  },
  {
    title: "arXiv Recent",
    href: "https://arxiv.org/list/cs.CL/recent",
    tag: "一手来源",
    desc: "预印本源头入口，可从 cs.CL、cs.LG、cs.AI 等分类追踪最新提交。",
  },
  {
    title: "Arxiv Daily",
    href: "https://www.arxivdaily.com/",
    tag: "每日追踪",
    desc: "按日期和方向浏览 arXiv 每日新增论文，适合快速发现大模型、机器学习与多模态新工作。",
  },
  {
    title: "Cool Papers",
    href: "https://papers.cool/",
    tag: "快速浏览",
    desc: "苏剑林推出的沉浸式 arXiv 论文筛选与浏览辅助工具。",
  },
  {
    title: "Semantic Scholar",
    href: "https://www.semanticscholar.org/",
    tag: "引用检索",
    desc: "查作者、引用、相关论文和影响力，适合从一篇论文扩展到完整文献网络。",
  },
];

export const resourceGroups: ResourceGroup[] = [
  {
    id: "paper-reading",
    title: "论文精读",
    desc: "用精读、脉络梳理和社区讨论补足原文阅读。",
    links: [
      {
        title: "李沐论文精读",
        href: "https://github.com/mli/paper-reading",
        desc: "经典与前沿论文精读视频、路线图与笔记索引。",
      },
      {
        title: "Emergent Mind",
        href: "https://www.emergentmind.com/",
        desc: "按主题聚合论文、趋势和技术脉络解读。",
      },
    ],
  },
  {
    id: "reading-tools",
    title: "阅读工具",
    desc: "辅助管理、标注、翻译和讨论论文内容。",
    links: [
      {
        title: "alphaXiv",
        href: "https://www.alphaxiv.org/",
        desc: "arXiv 论文评论、讨论与社区解读。",
      },
      {
        title: "ReadPaper",
        href: "https://readpaper.com/",
        desc: "论文收藏、标注、翻译与 AI 辅助阅读。",
      },
    ],
  },
  {
    id: "citation-maps",
    title: "引用图谱",
    desc: "从一篇论文扩展到相关工作、作者网络和引用脉络。",
    links: [
      {
        title: "Connected Papers",
        href: "https://www.connectedpapers.com/",
        desc: "从种子论文生成相似论文关系图。",
      },
      {
        title: "ResearchRabbit",
        href: "https://www.researchrabbitapp.com/",
        desc: "跟踪作者、合集与引用网络。",
      },
      {
        title: "Litmaps",
        href: "https://www.litmaps.com/",
        desc: "可视化文献网络并追踪新增论文。",
      },
      {
        title: "Inciteful",
        href: "https://inciteful.xyz/",
        desc: "基于引用关系扩展相关论文。",
      },
    ],
  },
  {
    id: "conference-archives",
    title: "会议归档",
    desc: "回到会议、期刊或开放评审平台核对一手资料。",
    links: [
      {
        title: "OpenReview",
        href: "https://openreview.net/",
        desc: "ICLR 等会议投稿、评审与讨论。",
      },
      {
        title: "ACL Anthology",
        href: "https://aclanthology.org/",
        desc: "ACL 系列 NLP 论文官方归档。",
      },
      {
        title: "CVF Open Access",
        href: "https://openaccess.thecvf.com/",
        desc: "CVPR、ICCV、ECCV 论文开放归档。",
      },
    ],
  },
  {
    id: "ai-news-trends",
    title: "AI 资讯与趋势",
    desc: "跟踪 AI 研究、工程、产品和产业社区的最新变化。",
    links: [
      {
        title: "The Gradient",
        href: "https://thegradient.pub/",
        desc: "机器学习研究长文与观点文章。",
      },
      {
        title: "Latent Space",
        href: "https://www.latent.space/",
        desc: "大模型工程、产品与社区趋势。",
      },
      {
        title: "Interconnects",
        href: "https://www.interconnects.ai/",
        desc: "开源模型、训练与政策分析。",
      },
      {
        title: "AI News",
        href: "https://news.smol.ai/",
        desc: "AI 每日新闻摘要与社区链接。",
      },
      {
        title: "机器之心",
        href: "https://www.jiqizhixin.com/",
        desc: "中文 AI 资讯、论文与产业动态。",
      },
    ],
  },
];
