import getGames from "./getGames";

const getGameByCode = async (code: string) => {
  const games = await getGames();

  return games?.find((game) => game.code === code);
};

export default getGameByCode;
