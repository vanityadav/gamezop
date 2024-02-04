import { Game } from "../types/game";
import { returnGames } from "./utils";
import { Languages } from "../types/languages";

type Args = {
  category: string;
  fetchedGames?: Game[];
  language?: Languages;
};

const getGamesByCategory = async ({
  category,
  fetchedGames,
  language = "en",
}: Args) => {
  const games = await returnGames(fetchedGames);

  return games.filter((games) =>
    games.categories[language]
      ?.toString()
      .toLowerCase()
      .includes(category.toLowerCase())
  );
};

export default getGamesByCategory;
