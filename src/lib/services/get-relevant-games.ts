import { Game } from "../types/game";
import { returnGames } from "./return-games";
import { Language } from "../types/language";

type Args = {
  tags: string[];
  categories: string[];
  limit?: number;
  fetchedGames?: Game[];
  language?: Language;
};

const getRelevantGames = async ({
  tags,
  categories,
  limit,
  fetchedGames,
  language = "en",
}: Args) => {
  const games = await returnGames(fetchedGames);

  return games
    .filter((game) =>
      game.categories[language].some((category) =>
        categories.includes(category)
      )
    )
    .filter((game) => game.tags[language].some((tag) => tags.includes(tag)))
    .slice(0, limit);
};

export default getRelevantGames;
