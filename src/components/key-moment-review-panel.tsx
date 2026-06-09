import type { Position } from "@/types/chess";

export function KeyMomentReviewPanel({ positions }: { positions: Position[] }) {
  return (
    <div className="space-y-4">
      {positions.map((position, index) => (
        <article key={position.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">Key moment {index + 1}</h3>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
              Swing {position.evaluationSwing.toFixed(1)}
            </span>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr,2fr]">
            <div className="rounded-xl bg-slate-950 p-4 font-mono text-xs leading-6 text-emerald-300">
              <p className="mb-2 text-slate-400">FEN</p>
              <p className="break-all">{position.fen}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">Move to find</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{position.moveToFind}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{position.note}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
