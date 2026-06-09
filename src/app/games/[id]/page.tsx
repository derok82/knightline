import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { KeyMomentReviewPanel } from "@/components/key-moment-review-panel";
import { WeaknessCards } from "@/components/weakness-cards";
import { mockGames } from "@/data/mock-data";
import { analyzeGameLocally } from "@/lib/analysis";
import { db } from "@/lib/repository";

export function generateStaticParams() {
  return mockGames.map((game) => ({ id: game.id }));
}

export default async function GameReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = await db.games.getById(id);

  if (!game) {
    notFound();
  }

  const analysis = await analyzeGameLocally(game);

  return (
    <AppShell
      title={`Game review: ${game.opponent}`}
      subtitle={`${game.opening} • ${game.result} as ${game.color} • ${game.platform}. This page is structured for coach-style review, not live assistance.`}
    >
      <section className="space-y-8">
        <div className="grid gap-4 md:grid-cols-4">
          <Metric label="Accuracy" value={game.accuracy ? `${game.accuracy}%` : "N/A"} />
          <Metric label="Rating change" value={`${game.ratingChange > 0 ? "+" : ""}${game.ratingChange}`} />
          <Metric label="Key themes" value={`${game.themes.length}`} />
          <Metric label="Review status" value="Mock analyzed" />
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-slate-500">Coach summary</p>
          <p className="mt-3 text-lg leading-8 text-slate-700">{analysis.overview}</p>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            {game.coachTakeaway}
          </div>
        </article>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Key moments</h2>
          <KeyMomentReviewPanel positions={game.keyMoments} />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Themes detected</h2>
          <WeaknessCards themes={analysis.detectedThemes} />
        </div>
      </section>
    </AppShell>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </article>
  );
}
