import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import PrevNext from "@/components/PrevNext";
import TableOfContents from "@/components/TableOfContents";
import Comments from "@/components/Comments";
import { articleProseClassName } from "@/components/articleProseClassName";
import {
  getPapersNav,
  getPapersNavByDate,
  getPapersNavFlat,
} from "@/lib/papers";

// 论文区三栏布局,镜像 tutorials/layout.tsx:
//   左 = 论文「之间」的导航(全部论文列表,默认不分组按时间正序;关键词 / 时间分组可切换)
//   中 = 正文(PaperHeader + 阅读笔记 MDX)
//   右 = 论文「之内」的章节目录(本页 h2/h3,带滚动高亮)
export default function PaperLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8">
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <Sidebar
            tree={getPapersNavFlat()}
            basePath="/papers"
            heading="全部论文"
            treeLabel="列表"
            altTree={getPapersNav()}
            altLabel="关键词"
            altTree2={getPapersNavByDate()}
            altLabel2="时间"
            showLeafIcons={false}
          />
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <article className={articleProseClassName}>{children}</article>
        <Comments />
        <PrevNext basePath="/papers" />
      </main>

      <aside className="hidden w-52 shrink-0 xl:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <TableOfContents />
        </div>
      </aside>
    </div>
  );
}
