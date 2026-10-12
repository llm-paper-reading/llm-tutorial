"use client";

import { ComponentPropsWithoutRef } from "react";
import { usePathname } from "next/navigation";

const githubUrl = "https://github.com/llm-paper-reading/llm-tutorial";
const sourceBaseUrl = `${githubUrl}/edit/main/src/app`;

type ArticleTitleProps = ComponentPropsWithoutRef<"h1">;

export default function ArticleTitle({ children, className = "", ...props }: ArticleTitleProps) {
  const pathname = usePathname();
  const editUrl = getEditUrl(pathname);

  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <h1 className={`!mb-0 min-w-0 ${className}`} {...props}>
        {children}
      </h1>
      {editUrl ? (
        <a
          href={editUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex w-fit shrink-0 items-center gap-1 rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-500 !no-underline transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-emerald-700 dark:hover:text-emerald-400"
        >
          <span aria-hidden="true">✏️</span>
          编辑本页
        </a>
      ) : null}
    </div>
  );
}

function getEditUrl(pathname: string) {
  const route = pathname.replace(/\/$/, "");

  if (route.startsWith("/papers/") || route.startsWith("/tutorials/")) {
    return `${sourceBaseUrl}${route}/page.mdx`;
  }

  return null;
}
