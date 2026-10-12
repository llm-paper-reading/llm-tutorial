const githubUrl = "https://github.com/llm-paper-reading/llm-tutorial";
const contributeUrl = `${githubUrl}/issues`;
const linkClass =
  "font-medium text-zinc-700 transition hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-400";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <p>开源中文教程，欢迎一起改进内容。</p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="项目链接">
          <a href={githubUrl} target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={contributeUrl} target="_blank" rel="noreferrer" className={linkClass}>
            参与贡献
          </a>
        </nav>
      </div>
    </footer>
  );
}
