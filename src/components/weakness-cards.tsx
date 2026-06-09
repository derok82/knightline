import type { Theme } from "@/types/chess";

const impactStyles = {
  high: "bg-rose-100 text-rose-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-emerald-100 text-emerald-700",
};

export function WeaknessCards({ themes }: { themes: Theme[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {themes.map((theme) => (
        <article key={theme.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">{theme.name}</h3>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${impactStyles[theme.impact]}`}>
              {theme.impact}
            </span>
          </div>
          <p className="text-sm uppercase tracking-wide text-slate-500">{theme.category}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{theme.summary}</p>
          <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">{theme.drillSuggestion}</div>
        </article>
      ))}
    </div>
  );
}
