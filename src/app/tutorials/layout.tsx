import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import PrevNext from "@/components/PrevNext";
import TableOfContents from "@/components/TableOfContents";
import Comments from "@/components/Comments";
import { articleProseClassName } from "@/components/articleProseClassName";
import TutorialSectionNumbers from "@/components/TutorialSectionNumbers";
import { getTutorialsNav } from "@/lib/tutorials";

// 教程区三栏布局:
//   左 = 教程「之间」的导航(全部教程列表,跨篇跳转)
//   中 = 正文
//   右 = 教程「之内」的章节目录(本页 h2/h3,带滚动高亮)
export default function TutorialLayout({ children }: { children: ReactNode }) {
  const tree = getTutorialsNav();

  return (
    <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8">
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <Sidebar tree={tree} basePath="/tutorials" heading="全部教程" />
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <TutorialSectionNumbers />
        <article className={articleProseClassName}>{children}</article>
        <Comments />
        <PrevNext basePath="/tutorials" />
      </main>

      <aside className="hidden w-52 shrink-0 xl:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <TableOfContents />
        </div>
      </aside>
    </div>
  );
}
