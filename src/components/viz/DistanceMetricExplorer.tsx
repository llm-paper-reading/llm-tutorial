"use client";

import { useMemo, useState } from "react";

type Metric = "l1" | "l2" | "cos" | "linf";

interface Pt {
  id: string;
  x: number;
  y: number;
}

// 固定候选点：不同度量下最近邻会发生改变
const CANDS: Pt[] = [
  { id: "A", x: 6.5, y: 1.5 },
  { id: "B", x: 2.0, y: 5.5 },
  { id: "C", x: 7.0, y: 6.5 },
  { id: "D", x: 3.0, y: 2.0 },
  { id: "E", x: 5.0, y: 4.0 },
];

const METRICS: Array<{ key: Metric; label: string; hint: string }> = [
  { key: "l1", label: "L1 曼哈顿", hint: "对坐标差取绝对值再求和；大偏差只线性累加" },
  { key: "l2", label: "L2 欧氏", hint: "平方后求和再开方；大偏差被放大" },
  { key: "linf", label: "L∞ 切比雪夫", hint: "只看绝对值最大的那一维" },
  { key: "cos", label: "余弦", hint: "只看与原点连线的夹角，忽略长度" },
];

const W = 400;
const H = 360;
const PAD = 36;
const AXIS = 8;

const sx = (x: number) => PAD + (x / AXIS) * (W - 2 * PAD);
const sy = (y: number) => H - PAD - (y / AXIS) * (H - 2 * PAD);
const inv = (px: number, py: number) => ({
  x: ((px - PAD) / (W - 2 * PAD)) * AXIS,
  y: ((H - PAD - py) / (H - 2 * PAD)) * AXIS,
});

function distance(metric: Metric, q: Pt, p: Pt): number {
  const dx = q.x - p.x;
  const dy = q.y - p.y;
  if (metric === "l1") return Math.abs(dx) + Math.abs(dy);
  if (metric === "l2") return Math.hypot(dx, dy);
  if (metric === "linf") return Math.max(Math.abs(dx), Math.abs(dy));
  const nq = Math.hypot(q.x, q.y);
  const np = Math.hypot(p.x, p.y);
  if (nq < 1e-9 || np < 1e-9) return NaN;
  return 1 - (q.x * p.x + q.y * p.y) / (nq * np);
}

/** 距离度量实验:拖动查询点并切换度量,观察最近邻如何随「尺子」改变。 */
export default function DistanceMetricExplorer() {
  const [metric, setMetric] = useState<Metric>("l2");
  const [query, setQuery] = useState<Pt>({ id: "Q", x: 5.5, y: 3.0 });

  const rows = useMemo(
    () =>
      CANDS.map((p) => ({ ...p, d: distance(metric, query, p) })).sort(
        (a, b) => (Number.isNaN(a.d) ? Infinity : a.d) - (Number.isNaN(b.d) ? Infinity : b.d),
      ),
    [metric, query],
  );
  const best = rows[0];

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const py = ((e.clientY - rect.top) / rect.height) * H;
    const p = inv(px, py);
    setQuery({
      id: "Q",
      x: Math.min(AXIS, Math.max(0.4, p.x)),
      y: Math.min(AXIS, Math.max(0.4, p.y)),
    });
  };

  const active = METRICS.find((m) => m.key === metric)!;

  return (
    <div className="my-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 flex flex-wrap gap-1.5">
        {METRICS.map((m) => (
          <button
            key={m.key}
            onClick={() => setMetric(m.key)}
            aria-pressed={metric === m.key}
            className={`rounded-full px-3 py-1 text-xs transition ${
              metric === m.key
                ? "bg-emerald-600 font-medium text-white"
                : "bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-[400px_1fr]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width={W}
          height={H}
          onClick={handleClick}
          className="mx-auto h-auto max-w-full cursor-crosshair rounded-lg bg-chart-surface shadow-sm"
          role="img"
          aria-label="二维平面上的距离度量实验：点击移动查询点，比较不同度量下的最近邻"
        >
          {/* 网格 */}
          {Array.from({ length: AXIS - 1 }, (_, i) => i + 1).map((i) => (
            <g key={i}>
              <line x1={sx(i)} y1={sy(0)} x2={sx(i)} y2={sy(AXIS)} stroke="var(--chart-grid)" />
              <line x1={sx(0)} y1={sy(i)} x2={sx(AXIS)} y2={sy(i)} stroke="var(--chart-grid)" />
            </g>
          ))}
          {/* 坐标轴 */}
          <line x1={sx(0)} y1={sy(0)} x2={sx(AXIS)} y2={sy(0)} stroke="var(--chart-axis)" />
          <line x1={sx(0)} y1={sy(0)} x2={sx(0)} y2={sy(AXIS)} stroke="var(--chart-axis)" />
          <text x={sx(AXIS)} y={sy(0) + 18} fontSize={10} textAnchor="end" fill="var(--chart-muted)">x₁</text>
          <text x={sx(0) - 14} y={sy(AXIS) + 4} fontSize={10} textAnchor="middle" fill="var(--chart-muted)">x₂</text>

          {/* 余弦模式：画出与原点连线，强调「方向」 */}
          {metric === "cos" && (
            <>
              <line x1={sx(0)} y1={sy(0)} x2={sx(query.x)} y2={sy(query.y)} stroke="#f59e0b" strokeDasharray="4 3" />
              <line x1={sx(0)} y1={sy(0)} x2={sx(best.x)} y2={sy(best.y)} stroke="#059669" strokeDasharray="4 3" />
              <text x={sx(0) + 6} y={sy(0) - 8} fontSize={10} fill="var(--chart-muted)">O</text>
            </>
          )}

          {/* 查询点到最近邻 */}
          <line
            x1={sx(query.x)}
            y1={sy(query.y)}
            x2={sx(best.x)}
            y2={sy(best.y)}
            stroke="#94a3b8"
            strokeDasharray="3 3"
          />

          {/* 候选点 */}
          {CANDS.map((p) => {
            const isBest = p.id === best.id;
            return (
              <g key={p.id}>
                <circle
                  cx={sx(p.x)}
                  cy={sy(p.y)}
                  r={isBest ? 7 : 5}
                  fill={isBest ? "#059669" : "#0ea5e9"}
                  stroke="var(--chart-surface)"
                  strokeWidth={2}
                />
                <text
                  x={sx(p.x) + 10}
                  y={sy(p.y) - 8}
                  fontSize={11}
                  fontWeight={isBest ? 700 : 400}
                  fill={isBest ? "#059669" : "var(--chart-muted)"}
                >
                  {p.id}
                </text>
              </g>
            );
          })}

          {/* 查询点 */}
          <circle cx={sx(query.x)} cy={sy(query.y)} r={6} fill="#f59e0b" stroke="var(--chart-surface)" strokeWidth={2} />
          <text x={sx(query.x) + 10} y={sy(query.y) + 14} fontSize={11} fontWeight={700} fill="#d97706">Q</text>
        </svg>

        <div className="min-w-0">
          <p className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
            点击图中任意位置移动 Q。当前度量：<strong className="text-zinc-700 dark:text-zinc-200">{active.label}</strong>
            ——{active.hint}。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th>点</th>
                  <th>{metric === "cos" ? "1 − cos" : "距离"}</th>
                  <th>排名</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.id} className={r.id === best.id ? "bg-emerald-50 dark:bg-emerald-950/40" : ""}>
                    <td>{r.id}</td>
                    <td className="font-mono">{Number.isNaN(r.d) ? "—" : r.d.toFixed(3)}</td>
                    <td>{i + 1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
            最近邻是 <strong className="text-emerald-700 dark:text-emerald-400">{best.id}</strong>。
            切换上面的度量，观察排名如何变化：余弦只看方向，L1/L2/L∞ 看坐标差。
          </p>
        </div>
      </div>
    </div>
  );
}
