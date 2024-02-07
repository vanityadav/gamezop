import { notFound } from "next/navigation";
import { limitResults, returnGames } from "./utils";
import getGameCategories from "./get-game-categories";

type Args = LimitedResults & {
  category: string;
  fetchedGames?: Game[];
  language?: Language;
};

const getGamesByCategory = async ({
  category,
  fetchedGames,
  language = "en",
  take,
  skip,
}: Args) => {
  const games = await returnGames(fetchedGames);

  const categories = await getGameCategories({ fetchedGames: games });

  if (!categories.toString().toLowerCase().includes(category)) notFound();

  const filteredGames = games.filter((games) =>
    games.categories[language]
      ?.toString()
      .toLowerCase()
      .includes(category.toLowerCase())
  );

  if (take || skip) return limitResults(filteredGames, take, skip);

  return filteredGames;
};

export default getGamesByCategory;
