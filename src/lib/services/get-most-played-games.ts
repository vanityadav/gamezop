import sortBy from "../utils/sort-games";
import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  fetchedGames?: Game[];
};

const getMostPlayedGames = async ({
  skip = 0,
  take = 10,
  fetchedGames,
}: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const sortedGames = sortBy<Game>({
    data: games,
    accessor: "gamePlays",
    order: "DESC",
  });

  return limitResults(sortedGames, take, skip);
};
export default getMostPlayedGames;
