export type ChessComIngestionRequest = {
  username: string;
  maxGames?: number;
};

export async function fetchRecentChessDotComGames(
  request: ChessComIngestionRequest,
) {
  return {
    status: "mocked" as const,
    message: `Chess.com ingestion is not wired yet for ${request.username}.`,
    games: [],
  };
}
