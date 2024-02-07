import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  tag: string;
  fetchedGames?: Game[];
  language?: Language;
};

const getGamesByTag = async ({
  tag,
  fetchedGames,
  language = "en",
  skip = 0,
  take = 10,
}: Args) => {
  const games = await returnGames(fetchedGames);

  const filteredGames = games.filter((game) =>
    game.tags[language].toString().toLowerCase().includes(tag.toLowerCase())
  );

  return limitResults(filteredGames, take, skip);
};

export default getGamesByTag;
