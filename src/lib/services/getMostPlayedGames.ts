import { Game } from "../types/game";
import { returnGames } from "./utils";
import sortBy from "../utils/sortGames";

type Args = {
  limit?: number;
  fetchedGames?: Game[];
};

const getMostPlayedGames = async ({ limit, fetchedGames }: Args = {}) => {
  const games = await returnGames(fetchedGames);

  return sortBy<Game>({
    data: games,
    accessor: "gamePlays",
    order: "DESC",
  })?.slice(0, limit);
};
export default getMostPlayedGames;
