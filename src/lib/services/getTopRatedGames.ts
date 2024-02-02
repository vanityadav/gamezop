import getGames from "./getGames";
import { Game } from "../types/game";
import sortBy from "../utils/sortGames";

const getTopRatedGames = async (limit: number = 20) => {
  const games = await getGames();

  return sortBy<Game>(games, "rating")?.slice(0, limit);
};

export default getTopRatedGames;
