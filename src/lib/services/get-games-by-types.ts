import { notFound } from "next/navigation";
import { limitResults, returnGames } from "./utils";
import getGameTypes from "./get-game-types";

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
    withCount: false,
  });

  if (!types.toString().toLowerCase().includes(value)) notFound();

  const filteredGames = games.filter((games) =>
    games[type][language]
      ?.toString()
      .toLowerCase()
      .includes(value.toLowerCase())
  );

  if (take || skip) return limitResults(filteredGames, take, skip);

  return filteredGames;
};

export default getGamesByTypes;
