"use client";

import { useEffect, useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { usePyodide } from "@/hooks/usePyodide";

interface CodeRunnerProps {
  /** 初始代码 */
  defaultCode: string;
  /** 额外需要预装的 Python 包,如 ["scikit-learn"] */
  packages?: string[];
  /** 是否允许编辑,默认 true */
  editable?: boolean;
}

const statusLabel: Record<string, string> = {
  idle: "运行",
  loading: "加载 Python 中…",
  ready: "运行",
  error: "加载失败",
};

export default function CodeRunner({
  defaultCode,
  packages,
  editable = true,
}: CodeRunnerProps) {
  const [code, setCode] = useState(defaultCode.trim());
  const [output, setOutput] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [errored, setErrored] = useState(false);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const { status, load, run, cancel } = usePyodide();
  const editorRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setTheme(root.classList.contains("dark") ? "dark" : "light");
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const handleRun = async () => {
    setRunning(true);
    setErrored(false);
    setOutput("");
    setImages([]);
    // 流式显示输出:worker 每产生一段 stdout/stderr 就追加,无需等执行结束。
    const { promise } = run(code, packages, (chunk) =>
      setOutput((prev) => prev + chunk)
    );
    const res = await promise;
    if (res.error) {
      setOutput((prev) => prev + (prev ? "\n" : "") + res.error);
      setErrored(true);
    } else if (res.result !== null) {
      setOutput((prev) => prev + (prev ? "\n" : "") + res.result);
    }
    if (res.images.length) setImages(res.images);
    // 既无文本也无图时给出占位
    if (!res.error && res.result === null && !res.images.length) {
      setOutput((prev) => prev || "(无输出)");
    }
    setRunning(false);
  };

  const handleStop = () => {
    cancel();
    setRunning(false);
  };

  const handleReset = () => {
    setCode(defaultCode.trim());
    setOutput("");
    setImages([]);
    setErrored(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // 剪贴板 API 不可用时的兜底:用临时 textarea + execCommand
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* 忽略 */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // loading 仅在「尚未运行、运行时还在下载」时算忙;运行中由 running 单独表达。
  const busy = running || status === "loading";

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div
        ref={editorRef}
        onMouseEnter={() => status === "idle" && load()}
      >
        <CodeMirror
          value={code}
          theme={theme}
          extensions={[python()]}
          editable={editable}
          onChange={setCode}
          basicSetup={{ lineNumbers: true, foldGutter: false }}
          className="text-sm"
        />
      </div>

      <div className="flex items-center gap-2 border-t border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800">
        <button
          onClick={handleRun}
          disabled={busy || status === "error"}
          className="rounded-md bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "运行中…" : statusLabel[status] ?? "运行"}
        </button>
        {running && (
          <button
            onClick={handleStop}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-500"
            title="中断执行(会重置 Python 运行时)"
          >
            ⏹ 停止
          </button>
        )}
        {editable && (
          <button
            onClick={handleReset}
            disabled={busy}
            className="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-200 disabled:opacity-50 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            重置
          </button>
        )}
        <button
          onClick={handleCopy}
          className="ml-auto flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-700"
          title="复制代码"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-emerald-400">已复制</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>复制</span>
            </>
          )}
        </button>
        <span className="text-xs text-zinc-500 dark:text-zinc-500">Python · Pyodide</span>
      </div>

      {output && (
        <pre
          className={`overflow-x-auto border-t border-zinc-200 bg-zinc-50 px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950 ${
            errored ? "text-red-600 dark:text-red-400" : "text-zinc-800 dark:text-zinc-200"
          }`}
        >
          {output}
        </pre>
      )}

      {images.length > 0 && (
        <div className="flex flex-col items-center gap-3 border-t border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-950">
          {images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={`data:image/png;base64,${src}`}
              alt={`图形输出 ${i + 1}`}
              className="max-w-full rounded bg-white"
            />
          ))}
        </div>
      )}
    </div>
  );
}
