"use client";

import { useMemo, useState } from "react";
import Slider from "./Slider";

// LoRA 的低秩旁路探索器:
//   - 冻结的 W0(d×k) + 可训练的 B(d×r)、A(r×k),ΔW = BA
//   - r 滑大 → B/A 变宽变高、参数线性增长
//   - α/r 是旁路的有效缩放:α 固定时,调大 r 会削弱旁路幅度
// 纯 useState + useMemo,无定时器、无随机 —— SSR 安全。

const DIMS = [1024, 4096, 8192] as const;
type Dim = (typeof DIMS)[number];

function fmt(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return `${Math.round(n)}`;
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white px-2.5 py-2 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">{label}</div>
      <div
        className={`mt-0.5 font-mono text-sm font-semibold ${
          accent ? "text-amber-700 dark:text-amber-400" : "text-zinc-800 dark:text-zinc-100"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

export default function LoRAExplorer() {
  const [r, setR] = useState(8);
  const [alpha, setAlpha] = useState(16);
  const [d, setD] = useState<Dim>(4096);

  const { full, lora, ratio, scale, pct } = useMemo(() => {
    const full = d * d;
    const lora = r * (d + d); // B: d×r, A: r×d
    const ratio = full / lora;
    const scale = alpha / r;
    const pct = (lora / full) * 100;
    return { full, lora, ratio, scale, pct };
  }, [d, r, alpha]);

  // 图形尺寸(d×k 方阵、B 的高、A 的宽都按同一比例缩放)
  const W = 500;
  const H = 228;
  const rankScale = (r - 1) / 63; // 0..1
  const B_W = 10 + rankScale * 34; // B 的宽度 ∝ r
  const A_H = 10 + rankScale * 34; // A 的高度 ∝ r
  const B_X = 178;
  const A_X = B_X + B_W + 7;
  const BOX_Y = 46;
  const BOX_H = 96;
  const A_Y = BOX_Y + (BOX_H - A_H) / 2;
  const A_W = 86;

  const dimBtn = (v: Dim) =>
    `rounded-md border px-2 py-1 text-[11px] font-medium transition-colors ${
      d === v
        ? "border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400 dark:bg-sky-950/50 dark:text-sky-300"
        : "border-zinc-200 text-zinc-500 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400"
    }`;

  return (
    <div className="my-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="grid gap-5 lg:grid-cols-[1fr_240px] lg:items-start">
        <div>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="viz-smooth mx-auto h-auto w-full max-w-full rounded-lg bg-chart-surface shadow-sm"
            role="img"
            aria-label="LoRA 前向分解:冻结的 W0 加上低秩旁路 B 乘 A"
          >
            {/* W0 冻结方阵 */}
            <rect
              x={30}
              y={BOX_Y}
              width={BOX_H}
              height={BOX_H}
              rx={6}
              fill="#6366f1"
              opacity={0.14}
              stroke="#6366f1"
              strokeWidth={1.4}
            />
            <text x={30 + BOX_H / 2} y={BOX_Y + BOX_H / 2 - 14} textAnchor="middle" fontSize={15} fontWeight={700} fill="currentColor" className="text-indigo-500 dark:text-indigo-300">
              W₀
            </text>
            <text x={30 + BOX_H / 2} y={BOX_Y + BOX_H / 2 + 4} textAnchor="middle" fontSize={10} fill="var(--chart-muted)">
              d × k
            </text>
            <text x={30 + BOX_H / 2} y={BOX_Y + BOX_H / 2 + 22} textAnchor="middle" fontSize={10} fill="currentColor" className="text-indigo-500 dark:text-indigo-300">
              冻结
            </text>

            <text x={148} y={BOX_Y + BOX_H / 2 + 7} textAnchor="middle" fontSize={20} fill="var(--chart-fg)">
              +
            </text>

            {/* B: d×r,高度固定、宽度随 r 变 */}
            <rect
              data-smooth
              x={B_X}
              y={BOX_Y}
              width={B_W}
              height={BOX_H}
              rx={4}
              fill="#f59e0b"
              opacity={0.9}
            />
            <text x={B_X + B_W / 2} y={BOX_Y - 7} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--chart-accent)">
              B
            </text>

            {/* A: r×k,宽度固定、高度随 r 变 */}
            <rect
              data-smooth
              x={A_X}
              y={A_Y}
              width={A_W}
              height={A_H}
              rx={4}
              fill="#f59e0b"
              opacity={0.72}
            />
            <text x={A_X + A_W / 2} y={A_Y - 7} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--chart-accent)">
              A
            </text>

            <text x={A_X + A_W / 2} y={BOX_Y + BOX_H + 18} textAnchor="middle" fontSize={10} fill="var(--chart-muted)">
              r × k
            </text>
            <text x={B_X + B_W / 2} y={BOX_Y + BOX_H + 18} textAnchor="middle" fontSize={10} fill="var(--chart-muted)">
              d × r
            </text>

            <text x={A_X + A_W + 12} y={BOX_Y + BOX_H / 2 + 5} textAnchor="start" fontSize={15} fill="var(--chart-fg)">
              =
            </text>
            <text x={A_X + A_W + 30} y={BOX_Y + BOX_H / 2 - 4} textAnchor="start" fontSize={12} fontWeight={700} fill="var(--chart-fg)">
              ΔW
            </text>
            <text x={A_X + A_W + 30} y={BOX_Y + BOX_H / 2 + 13} textAnchor="start" fontSize={10} fill="var(--chart-muted)">
              rank ≤ r
            </text>

            {/* 有效缩放徽章 */}
            <rect x={140} y={BOX_Y + BOX_H + 34} width={240} height={26} rx={6} fill="#f59e0b" opacity={0.14} />
            <text x={260} y={BOX_Y + BOX_H + 51} textAnchor="middle" fontSize={11} fontWeight={600} fill="var(--chart-accent)">
              h = W₀x + (α/r)·BAx, α/r = {scale.toFixed(2)}
            </text>

            <text x={W / 2} y={H - 6} textAnchor="middle" fontSize={10} fill="var(--chart-muted)">
              橙色的 B、A 可训练;随着 r 变大,它们从细条慢慢变宽变高
            </text>
          </svg>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Stat label="全量参数 / 层" value={fmt(full)} />
            <Stat label="LoRA 参数 / 层" value={fmt(lora)} accent />
            <Stat label="压缩比" value={`${ratio.toFixed(0)}×`} accent />
            <Stat label="有效缩放 α/r" value={scale.toFixed(2)} />
          </div>

          <div className="mt-4 space-y-2">
            <div>
              <div className="flex items-baseline justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span>全量微调(每个矩阵)</span>
                <span className="font-mono">{fmt(full)}</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div className="h-full rounded-full bg-indigo-500" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <span>LoRA(同一矩阵)</span>
                <span className="font-mono">
                  {fmt(lora)} · {pct < 0.01 ? "<0.01" : pct.toFixed(2)}%
                </span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div className="h-full rounded-full bg-amber-500" style={{ width: `${Math.max(pct, 0.4)}%` }} />
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              条宽按真实比例绘制。LoRA 条几乎看不见,正是它省参数、省显存的原因。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-1 text-sm text-zinc-600 dark:text-zinc-300">矩阵维度 d = k</div>
            <div className="flex gap-1.5">
              {DIMS.map((v) => (
                <button key={v} type="button" className={dimBtn(v)} onClick={() => setD(v)}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <Slider label="秩 r" value={r} min={1} max={64} step={1} onChange={setR} decimals={0} />
          <Slider label="缩放系数 α" value={alpha} min={1} max={128} step={1} onChange={setAlpha} decimals={0} />

          <button
            type="button"
            onClick={() => setAlpha(Math.min(128, 2 * r))}
            className="w-full rounded-md border border-amber-300 bg-amber-50 px-2 py-1.5 text-[11px] font-medium text-amber-700 transition-colors hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-300"
          >
            设为常见经验值 α = 2r
          </button>

          <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            固定 α 调大 r:参数线性涨,但 <span className="font-mono">α/r</span> 变小、旁路被削弱。所以调 r
            时通常同步调 α(如保持 α = 2r),让有效缩放稳定在 2 附近。
          </p>
        </div>
      </div>
    </div>
  );
}
