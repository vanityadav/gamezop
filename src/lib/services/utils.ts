import getGames from "./getGames";
import { Game } from "../types/game";

const returnGames = async (fetchedGames?: Game[]) => {
  if (fetchedGames) return fetchedGames;
  return await getGames();
};

export { returnGames };
