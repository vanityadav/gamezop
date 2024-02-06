import { Game } from "../types/game";
import { returnGames } from "./return-games";
import { Language } from "../types/language";

type Args = {
  tag: string;
  fetchedGames?: Game[];
  language?: Language;
};

const getGamesByTag = async ({ tag, fetchedGames, language = "en" }: Args) => {
  const games = await returnGames(fetchedGames);

  return games.filter((game) =>
    game.tags[language].toString().toLowerCase().includes(tag.toLowerCase())
  );
};

export default getGamesByTag;
