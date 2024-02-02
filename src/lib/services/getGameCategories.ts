import getGames from "./getGames";
import { Languages } from "../types/languages";

const getGameCategories = async (language: Languages = "en") => {
  const games = await getGames();

  const categories = new Set<string>();

  for (const game of games) {
    game.categories[language]?.forEach(categories.add, categories);
  }

  return Array.from(categories);
};

export default getGameCategories;
