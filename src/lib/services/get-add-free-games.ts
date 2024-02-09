import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  fetchedGames?: Game[];
};

const getAddFreeGames = async ({ fetchedGames, take, skip }: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const addFreeGames = games?.filter((game) => !game.hasIntegratedAds);

  if (take) return limitResults(addFreeGames, take, skip);
  return addFreeGames;
};

export default getAddFreeGames;
