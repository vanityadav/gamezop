import { Game } from "../types/game";
import { returnGames } from "./utils";

type Args = {
  code: string;
  fetchedGames?: Game[];
};

const getGameByCode = async ({ code, fetchedGames }: Args) => {
  const games = await returnGames(fetchedGames);

  return games?.find((game) => game.code === code);
};

export default getGameByCode;
