import {
  type GameReview,
  type ProgressSnapshot,
  type Theme,
  type TrainingPlan,
  type UserProfile,
} from "@/types/chess";

const themes: Theme[] = [
  {
    id: "theme-weak-dark-squares",
    name: "Dark-square drift",
    category: "middlegame",
    summary: "You concede key dark squares after trading your bishop too early.",
    impact: "high",
    drillSuggestion: "Review 3 annotated games where the dark-square bishop matters.",
  },
  {
    id: "theme-time-scramble",
    name: "Late-game clock panic",
    category: "time-management",
    summary: "Your evaluation drops sharply in the last 90 seconds.",
    impact: "high",
    drillSuggestion: "Play 2 rapid games with a 10-second increment and post-review only time losses.",
  },
  {
    id: "theme-rook-endings",
    name: "Rook ending conversion",
    category: "endgame",
    summary: "You reach winning rook endings but miss activation plans.",
    impact: "medium",
    drillSuggestion: "Solve 10 Lucena and Philidor pattern reps.",
  },
  {
    id: "theme-opening-recall",
    name: "Opening recall gaps",
    category: "opening",
    summary: "You know the first ideas, but drift by move 8 when opponents sidestep theory.",
    impact: "medium",
    drillSuggestion: "Build one short response tree for anti-mainline setups.",
  },
];

export const mockUser: UserProfile = {
  id: "user-1",
  displayName: "Franny",
  chessDotComUsername: "frannyplayschess",
  currentRating: 1215,
  targetRating: 1500,
  timezone: "America/New_York",
  weeklyStudyHours: 5,
  primaryGoals: ["Reduce blunders", "Stabilize endgames", "Build a repeatable study week"],
};

export const mockGames: GameReview[] = [
  {
    id: "game-1042",
    platform: "Chess.com",
    opponent: "QueensideFox",
    playedAt: "2026-06-07T20:15:00Z",
    color: "white",
    result: "loss",
    opening: "Queen's Gambit Declined",
    accuracy: 76,
    ratingChange: -8,
    summary: "Comfortable opening, then a slow dark-square collapse after move 17.",
    themes: [themes[0], themes[1]],
    keyMoments: [
      {
        id: "pos-1",
        fen: "r2q1rk1/pp2bppp/2np1n2/2p1p3/2P1P1b1/2NP1NP1/PPQ2PBP/R1B2RK1 w - - 0 11",
        moveToFind: "h3",
        evaluationSwing: 1.8,
        note: "Question the bishop before central tension resolves.",
        themeIds: [themes[0].id],
      },
      {
        id: "pos-2",
        fen: "3r2k1/pp3pp1/2p4p/3p4/3P1P2/2P3P1/PP4KP/3R4 w - - 0 31",
        moveToFind: "Kf3",
        evaluationSwing: 2.4,
        note: "King activation beats passive rook shuffling here.",
        themeIds: [themes[2].id],
      },
    ],
    coachTakeaway: "You did not lose because of theory. You lost because your plan stopped once the position got strategic.",
  },
  {
    id: "game-1041",
    platform: "Chess.com",
    opponent: "TempoGarden",
    playedAt: "2026-06-05T23:04:00Z",
    color: "black",
    result: "win",
    opening: "Caro-Kann Defense",
    accuracy: 83,
    ratingChange: 7,
    summary: "Clean structure, strong conversion, but still too much clock burn by move 25.",
    themes: [themes[1], themes[3]],
    keyMoments: [
      {
        id: "pos-3",
        fen: "r1bq1rk1/pp3ppp/2n1pn2/2bp4/3P4/2PB1N2/PP3PPP/RNBQ1RK1 b - - 4 9",
        moveToFind: "Bd6",
        evaluationSwing: 1.2,
        note: "Simple development keeps the position easy to play.",
        themeIds: [themes[3].id],
      },
    ],
    coachTakeaway: "Your best games come from stable structures and simple piece placement. Lean into that.",
  },
  {
    id: "game-1039",
    platform: "Manual",
    opponent: "Study Upload",
    playedAt: "2026-06-01T18:30:00Z",
    color: "white",
    result: "draw",
    opening: "English Opening",
    accuracy: 79,
    ratingChange: 0,
    summary: "Balanced middlegame, then a missed rook ending squeeze.",
    themes: [themes[2]],
    keyMoments: [
      {
        id: "pos-4",
        fen: "8/5pk1/1p4p1/pP1r4/P2R4/6P1/5PKP/8 w - - 3 39",
        moveToFind: "Rxd5",
        evaluationSwing: 1.5,
        note: "Trade into the pawn ending only after checking king opposition.",
        themeIds: [themes[2].id],
      },
    ],
    coachTakeaway: "Your endgame intuition is improving, but you still need named patterns, not vibes.",
  },
];

export const mockTrainingPlan: TrainingPlan = {
  id: "plan-1",
  title: "1200 to 1500 foundation block",
  focus: "Tighten tactical awareness, convert better endgames, and reduce late-clock mistakes.",
  nextReviewDate: "2026-06-16",
  tasks: [
    {
      id: "task-1",
      title: "Annotated self-review of last loss",
      type: "review",
      durationMinutes: 30,
      reason: "Connect your blunders to recurring strategic causes.",
      linkedThemeIds: [themes[0].id, themes[1].id],
    },
    {
      id: "task-2",
      title: "Rook ending pattern block",
      type: "endgame",
      durationMinutes: 25,
      reason: "Most practical rating gains are sitting in your equal endings.",
      linkedThemeIds: [themes[2].id],
    },
    {
      id: "task-3",
      title: "Caro-Kann response map",
      type: "opening",
      durationMinutes: 20,
      reason: "Reduce move-8 uncertainty against sidelines.",
      linkedThemeIds: [themes[3].id],
    },
    {
      id: "task-4",
      title: "20-puzzle calculation sprint",
      type: "tactics",
      durationMinutes: 20,
      reason: "Raise pattern recognition before you add more opening work.",
      linkedThemeIds: [themes[0].id],
    },
  ],
};

export const mockProgress: ProgressSnapshot = {
  ratingDelta30d: 42,
  gamesReviewed30d: 11,
  studyStreakDays: 6,
  strongestArea: "Opening structure recognition",
  watchlistArea: "Clock management in winning positions",
  points: [
    { label: "Week 1", rating: 1172, gamesReviewed: 2 },
    { label: "Week 2", rating: 1189, gamesReviewed: 5 },
    { label: "Week 3", rating: 1202, gamesReviewed: 8 },
    { label: "Week 4", rating: 1215, gamesReviewed: 11 },
  ],
};

export const mockWeaknesses = themes;
