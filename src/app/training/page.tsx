import { AppShell } from "@/components/app-shell";
import { TrainingFocusCards } from "@/components/training-focus-cards";
import { db } from "@/lib/repository";

export default async function TrainingPage() {
  const plan = await db.trainingPlans.getCurrent();

  return (
    <AppShell
      title="Training plan"
      subtitle={`${plan.title}. A simple weekly structure built from recurring themes, with clear task sizes and future room for adaptive plan generation.`}
    >
      <section className="space-y-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-slate-500">Current focus</p>
          <p className="mt-3 text-lg leading-8 text-slate-700">{plan.focus}</p>
          <p className="mt-3 text-sm text-slate-500">Next plan review: {new Date(plan.nextReviewDate).toLocaleDateString()}</p>
        </article>
        <TrainingFocusCards plan={plan} />
      </section>
    </AppShell>
  );
}
