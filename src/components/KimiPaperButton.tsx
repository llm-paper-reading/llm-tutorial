"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const KIMI_NEW_CHAT_URL = "https://www.kimi.com/?chat_enter_method=new_chat";

export default function KimiPaperButton({ pdfUrl }: { pdfUrl: string }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prompt = useMemo(() => buildKimiPrompt(pdfUrl), [pdfUrl]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = async () => {
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2400);

    await copyText(prompt);
    setTimeout(() => {
      window.open(buildKimiUrl(), "_blank", "noopener,noreferrer");
    }, 900);
  };

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
      >
        <span>{copied ? "✅" : "🌙"}</span>
        Kimi 阅读
      </button>
      {copied && (
        <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-60 -translate-x-1/2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
          打开 Kimi 后，粘贴到输入框即可。
        </span>
      )}
    </span>
  );
}

function buildKimiPrompt(pdfUrl: string) {
  return `请阅读这篇论文 ${pdfUrl}，回答用户的以下问题`;
}

function buildKimiUrl() {
  return KIMI_NEW_CHAT_URL;
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
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
}
