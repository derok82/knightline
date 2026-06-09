import type { ProgressSnapshot } from "@/types/chess";

export function ProgressSummary({ progress }: { progress: ProgressSnapshot }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr,1.4fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard label="30 day rating change" value={`${progress.ratingDelta30d > 0 ? "+" : ""}${progress.ratingDelta30d}`} />
        <StatCard label="Games reviewed" value={`${progress.gamesReviewed30d}`} />
        <StatCard label="Study streak" value={`${progress.studyStreakDays} days`} />
        <StatCard label="Watchlist area" value={progress.watchlistArea} />
      </div>
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">Trendline</h3>
          <p className="text-sm text-slate-500">Strongest area: {progress.strongestArea}</p>
        </div>
        <div className="space-y-4">
          {progress.points.map((point) => (
            <div key={point.label}>
              <div className="mb-1 flex justify-between text-sm text-slate-600">
                <span>{point.label}</span>
                <span>{point.rating}</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${Math.max(20, (point.rating / 1600) * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
    </article>
  );
}
