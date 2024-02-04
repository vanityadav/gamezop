import { Game } from "../types/game";
import { returnGames } from "./utils";
import sortBy from "../utils/sortGames";

type Args = {
  limit?: number;
  fetchedGames?: Game[];
};

const getTopRatedGames = async ({ limit, fetchedGames }: Args = {}) => {
  const games = await returnGames(fetchedGames);

  return sortBy<Game>({
    data: games,
    accessor: "rating",
    order: "DESC",
  })?.slice(0, limit);
};

export default getTopRatedGames;
