import sortBy from "../utils/sort-games";
import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  fetchedGames?: Game[];
};

const getMostPlayedGames = async ({ skip, take, fetchedGames }: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const sortedGames = sortBy<Game>({
    data: games,
    accessor: "gamePlays",
    order: "DESC",
  });

  if (take) return limitResults(sortedGames, take, skip);

  return sortedGames;
};
export default getMostPlayedGames;
