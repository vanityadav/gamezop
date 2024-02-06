import { Game } from "../types/game";
import { returnGames } from "./return-games";
import sortBy from "../utils/sort-games";
import { Language } from "../types/language";

type Args = {
  fetchedGames?: Game[];
  language?: Language;
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
