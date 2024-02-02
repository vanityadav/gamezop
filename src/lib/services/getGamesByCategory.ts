import getGames from "./getGames";

import { Languages } from "../types/languages";

const getGamesByCategory = async (
  category: string,
  language: Languages = "en"
) => {
  const games = await getGames();

  return games.filter((games) =>
    games.categories[language]
      ?.toString()
      .toLowerCase()
      .includes(category.toLowerCase())
  );
};

export default getGamesByCategory;
