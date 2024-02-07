import sortBy from "../utils/sort-games";
import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  limit?: number;
  fetchedGames?: Game[];
};

const getTopRatedGames = async ({
  take = 0,
  skip = 0,
  fetchedGames,
}: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const sortedGames = sortBy<Game>({
    data: games,
    accessor: "rating",
    order: "DESC",
  });

  return limitResults(sortedGames, take, skip);
};

export default getTopRatedGames;
