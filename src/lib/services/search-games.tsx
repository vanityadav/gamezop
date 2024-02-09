import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  limit?: number;
  fetchedGames?: Game[];
  query: string;
  language: Language;
};

const searchGames = async ({
  take,
  skip,
  fetchedGames,
  query,
  language = "en",
}: Args) => {
  const games = await returnGames(fetchedGames);

  const results = games.filter(
    (game) =>
      game.name[language].toLowerCase().includes(query.toLowerCase()) ||
      game.description[language].toLowerCase().includes(query.toLowerCase())
  );

  if (take) return limitResults(results, take, skip);

  return results;
};

export default searchGames;
