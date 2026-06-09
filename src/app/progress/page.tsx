import { AppShell } from "@/components/app-shell";
import { ProgressSummary } from "@/components/progress-summary";
import { db } from "@/lib/repository";

export default async function ProgressPage() {
  const progress = await db.progress.getCurrent();

  return (
    <AppShell
      title="Progress"
      subtitle="Track rating movement, review volume, study consistency, and where your next gains are most likely to come from."
    >
      <section className="space-y-6">
        <ProgressSummary progress={progress} />
      </section>
    </AppShell>
  );
}
