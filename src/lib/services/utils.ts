import getGames from "./get-games";

const returnGames = async (fetchedGames?: Game[]) => {
  if (fetchedGames) return fetchedGames;
  return await getGames();
};

const filterGamesByMultipleCategories = (
  games: Game[],
  categories: string[],
  language: Language = "en"
) => {
  return games.filter((game) =>
    game.categories[language].some((category) => categories.includes(category))
  );
};

const filterGamesByMultipleTags = (
  games: Game[],
  tags: string[],
  language: Language = "en"
) => {
  return games.filter((game) =>
    game.tags[language].some((tag) => tags.includes(tag))
  );
};

const limitResults = <T>(data: T[], take: number = 10, skip: number = 0) => {
  return data.slice(skip, skip + take);
};

export {
  returnGames,
  limitResults,
  filterGamesByMultipleTags,
  filterGamesByMultipleCategories,
};
