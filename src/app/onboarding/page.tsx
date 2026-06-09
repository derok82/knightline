import { AppShell } from "@/components/app-shell";
import { db } from "@/lib/repository";

export default async function OnboardingPage() {
  const user = await db.users.getCurrent();

  return (
    <AppShell
      title="Onboarding"
      subtitle="Capture the minimum profile data needed to personalize review and training. In V1 this is a local-first form scaffold with sensible defaults from mock data."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Display name" value={user.displayName} />
          <Field label="Chess.com username" value={user.chessDotComUsername} />
          <Field label="Current rating" value={`${user.currentRating}`} />
          <Field label="Target rating" value={`${user.targetRating}`} />
          <Field label="Weekly study hours" value={`${user.weeklyStudyHours}`} />
          <Field label="Timezone" value={user.timezone} />
        </div>
        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Primary goals</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {user.primaryGoals.map((goal) => (
              <span key={goal} className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                {goal}
              </span>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-600">{label}</span>
      <input
        readOnly
        value={value}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
      />
    </label>
  );
}
