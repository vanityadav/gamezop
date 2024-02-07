import { returnGames } from "./utils";
import sortBy from "../utils/sort-games";

type Args = {
  fetchedGames?: Game[];
  language?: Language;
  order?: SortOrder;
};

const getGameTags = async ({
  fetchedGames,
  language = "en",
  order = "ASC",
}: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const tags = new Set<string>();

  for (const game of games) {
    game.tags[language]?.forEach(tags.add, tags);
  }

  return sortBy({ data: Array.from(tags), order });
};

export default getGameTags;
