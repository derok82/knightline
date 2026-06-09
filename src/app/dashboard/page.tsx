import { AppShell } from "@/components/app-shell";
import { GameList } from "@/components/game-list";
import { ProgressSummary } from "@/components/progress-summary";
import { WeaknessCards } from "@/components/weakness-cards";
import { db } from "@/lib/repository";

export default async function DashboardPage() {
  const [user, games, weaknesses, progress] = await Promise.all([
    db.users.getCurrent(),
    db.games.list(),
    db.themes.listWeaknesses(),
    db.progress.getCurrent(),
  ]);

  return (
    <AppShell
      title={`Dashboard for ${user.displayName}`}
      subtitle={`Current rating ${user.currentRating}, target ${user.targetRating}. Focus on turning recent game review into a manageable weekly training rhythm.`}
    >
      <section className="space-y-8">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Recurring weaknesses</h2>
          </div>
          <WeaknessCards themes={weaknesses} />
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Recent reviewed games</h2>
          </div>
          <GameList games={games} />
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Progress snapshot</h2>
          </div>
          <ProgressSummary progress={progress} />
        </div>
      </section>
    </AppShell>
  );
}
