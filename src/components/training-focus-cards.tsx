import type { TrainingPlan } from "@/types/chess";

export function TrainingFocusCards({ plan }: { plan: TrainingPlan }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {plan.tasks.map((task) => (
        <article key={task.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">{task.type}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{task.title}</h3>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{task.durationMinutes} min</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{task.reason}</p>
        </article>
      ))}
    </div>
  );
}
