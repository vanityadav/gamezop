import { Game } from "../types/game";
import { returnGames } from "./utils";
import sortBy from "../utils/sortGames";
import { Languages } from "../types/languages";

type Args = {
  fetchedGames?: Game[];
  language?: Languages;
  order?: SortOrder;
};

const getGameCategories = async ({
  fetchedGames,
  language = "en",
  order = "ASC",
}: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const categories = new Set<string>();

  for (const game of games) {
    game.categories[language]?.forEach(categories.add, categories);
  }

  return sortBy({ data: Array.from(categories), order });
};

export default getGameCategories;
