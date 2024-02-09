import {
  returnGames,
  limitResults,
  filterGamesByMultipleTags,
  filterGamesByMultipleCategories,
} from "./utils";

type Args = {
  code: string;
  tags: string[];
  categories: string[];
  fetchedGames?: Game[];
  language?: Language;
  skip?: number;
  take?: number;
};

const getRelevantGames = async ({
  code,
  tags,
  categories,
  skip = 0,
  take = 10,
  fetchedGames,
  language = "en",
}: Args) => {
  if (categories.length === 0 && tags.length === 0) return [];

  const games = await returnGames(fetchedGames);

  if (tags.length === 0) {
    return limitResults(
      filterGamesByMultipleCategories(games, categories, language),
      take,
      skip
    ).filter((game) => game.code !== code);
  }

  return limitResults(
    filterGamesByMultipleTags(games, tags, language),
    take,
    skip
  ).filter((game) => game.code !== code);
};

export default getRelevantGames;
