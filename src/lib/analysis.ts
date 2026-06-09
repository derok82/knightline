import type { GameReview, Theme } from "@/types/chess";

export type AnalysisDraft = {
  overview: string;
  detectedThemes: Theme[];
  nextActions: string[];
};

export async function analyzeGameLocally(game: GameReview): Promise<AnalysisDraft> {
  return {
    overview: game.summary,
    detectedThemes: game.themes,
    nextActions: game.themes.map((theme) => theme.drillSuggestion),
  };
}
