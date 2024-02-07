import { returnGames } from "./utils";

type Args = {
  fetchedGames?: Game[];
  language?: Language;
  order?: SortOrder;
  withCount?: boolean;
  type: "tags" | "categories";
};

const getGameTypes = async ({
  fetchedGames,
  language = "en",
  order = "ASC",
  withCount = false,
  type,
}: Args) => {
  const games = await returnGames(fetchedGames);

  const types: { [x: string]: number } = {};

  for (const game of games) {
    game[type][language]?.forEach((value) => {
      if (!types[value]) types[value] = 1;
      else {
        types[value] = types[value] + 1;
      }
    });
  }

  const typeKeys = Object.keys(types);

  typeKeys.sort();

  if (withCount) {
    if (order === "DESC") typeKeys.reverse();

    const typeCount: { [x: string]: number } = {};

    for (let i = 0; i < typeKeys.length; i++) {
      typeCount[typeKeys[i]] = types[typeKeys[i]];
    }
    return typeCount;
  }

  if (order === "DESC") typeKeys.reverse();
  return typeKeys;
};

export default getGameTypes;
