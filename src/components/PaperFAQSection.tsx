import { getPaperFAQ } from "@/lib/paper-faq";

export default function PaperFAQSection({ slug }: { slug: string }) {
  const faq = getPaperFAQ(slug);
  if (faq.length === 0) return null;

  return (
    <section className="mb-8">
      <details className="rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm transition hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-800">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 marker:hidden [&::-webkit-details-marker]:hidden">
          <div className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
            Paper FAQ
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-zinc-500 ring-1 ring-zinc-200 dark:bg-zinc-950/60 dark:text-zinc-400 dark:ring-zinc-800">
            {faq.length} 个问题
            <span aria-hidden="true">⌄</span>
          </span>
        </summary>

        <div className="space-y-2.5 border-t border-zinc-200 p-5 pt-4 dark:border-zinc-800">
          {faq.map((item, index) => (
            <details
              key={item.id}
              className="group rounded-xl border border-zinc-200 bg-white transition hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-emerald-800"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-3 text-sm font-medium text-zinc-900 marker:hidden dark:text-zinc-100 [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-900">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1 leading-6">{item.question}</span>
                <span className="mt-1 text-zinc-400 transition group-open:rotate-180 dark:text-zinc-500">
                  ⌄
                </span>
              </summary>
              <div className="space-y-3 border-t border-zinc-100 px-4 pb-4 pt-3 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                {item.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="list-disc space-y-1 pl-5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {item.takeaway && (
                  <p className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-medium leading-6 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
                    记忆点：{item.takeaway}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </details>
    </section>
  );
}
