import { returnGames } from "./utils";
import sortBy from "../utils/sort-games";

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
