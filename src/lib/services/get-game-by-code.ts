import { returnGames } from "./utils";
import { notFound } from "next/navigation";

type Args = {
  code: string;
  fetchedGames?: Game[];
};

const getGameByCode = async ({ code, fetchedGames }: Args) => {
  const games = await returnGames(fetchedGames);

  const game = games?.find((game) => game.code === code);

  if (!game) notFound();
  return game;
};

export default getGameByCode;
