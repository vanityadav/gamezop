import { Game } from "../types/game";
import { returnGames } from "./utils";
import { Languages } from "../types/languages";

type Args = {
  tag: string;
  fetchedGames?: Game[];
  language?: Languages;
};

const getGamesByTag = async ({ tag, fetchedGames, language = "en" }: Args) => {
  const games = await returnGames(fetchedGames);

  return games.filter((game) =>
    game.tags[language].toString().toLowerCase().includes(tag.toLowerCase())
  );
};

export default getGamesByTag;
