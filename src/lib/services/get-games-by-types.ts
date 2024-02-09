import { notFound } from "next/navigation";
import getGameTypes from "./get-game-types";
import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  value: string;
  fetchedGames?: Game[];
  language?: Language;
  type: "tags" | "categories";
};

const getGamesByTypes = async ({
  value,
  fetchedGames,
  language = "en",
  take,
  skip,
  type,
}: Args) => {
  const games = await returnGames(fetchedGames);

  const types = await getGameTypes({
    fetchedGames: games,
    type,
  });

  if (!types.toString().toLowerCase().includes(value.toLowerCase())) notFound();

  const filteredGames = games.filter((games) =>
    games[type][language]
      ?.toString()
      .toLowerCase()
      .includes(value.toLowerCase())
  );

  if (take) return limitResults(filteredGames, take, skip);

  return filteredGames;
};

export default getGamesByTypes;
