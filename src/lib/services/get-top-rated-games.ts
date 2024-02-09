import sortBy from "../utils/sort-games";
import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  limit?: number;
  fetchedGames?: Game[];
};

const getTopRatedGames = async ({ take, skip, fetchedGames }: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const sortedGames = sortBy<Game>({
    data: games,
    accessor: "rating",
    order: "DESC",
  });

  if (take) return limitResults(sortedGames, take, skip);

  return sortedGames;
};

export default getTopRatedGames;
