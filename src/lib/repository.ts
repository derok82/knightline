import { mockGames, mockProgress, mockTrainingPlan, mockUser, mockWeaknesses } from "@/data/mock-data";

export const db = {
  users: {
    getCurrent: async () => mockUser,
  },
  games: {
    list: async () => mockGames,
    getById: async (id: string) => mockGames.find((game) => game.id === id) ?? null,
  },
  trainingPlans: {
    getCurrent: async () => mockTrainingPlan,
  },
  progress: {
    getCurrent: async () => mockProgress,
  },
  themes: {
    listWeaknesses: async () => mockWeaknesses,
  },
};
