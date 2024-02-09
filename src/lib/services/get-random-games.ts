import { limitResults, returnGames } from "./utils";

type Args = LimitedResults & {
  limit?: number;
  fetchedGames?: Game[];
};

const getRandomGames = async ({ take, skip, fetchedGames }: Args = {}) => {
  const games = await returnGames(fetchedGames);

  const shuffle = (array: Game[]) => {
    let tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  };

  const shuffledGames = shuffle(games);

  if (take) return limitResults(shuffledGames, take, skip);

  return shuffledGames;
};

export default getRandomGames;
