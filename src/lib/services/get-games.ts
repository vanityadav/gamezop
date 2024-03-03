import games from "../../data.json";

type GamesApiResponse = {
  games: Game[];
};


// for prod
// const getGames = async () => {
//   try {
//     const response = await fetch(process.env.API_URL, { cache: "no-store" });

//     if (!response.ok) {
//       throw new Error("Service Error");
//     }

//     const games = (await response.json()) as GamesApiResponse;
//     return games?.games;
//   } catch (error) {
//     throw new Error("Oh, There was an Error");
//   }
// };


// for local
const getGames = (): Game[] => {
  return games?.games;
};

export default getGames;
