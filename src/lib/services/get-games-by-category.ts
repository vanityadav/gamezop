import { Game } from "../types/game";
import { returnGames } from "./return-games";
import { notFound } from "next/navigation";
import { Language } from "../types/language";
import getGameCategories from "./get-game-categories";

type Args = {
  category: string;
  fetchedGames?: Game[];
  language?: Language;
};

const getGamesByCategory = async ({
  category,
  fetchedGames,
  language = "en",
}: Args) => {
  const games = await returnGames(fetchedGames);

  const categories = await getGameCategories({ fetchedGames: games });

  if (!categories.toString().toLowerCase().includes(category)) notFound();

  return games.filter((games) =>
    games.categories[language]
      ?.toString()
      .toLowerCase()
      .includes(category.toLowerCase())
  );
};

export default getGamesByCategory;
