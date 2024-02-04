import getGameByCode from "@/lib/services/getGameByCode";
import getCategories from "@/lib/services/getGameCategories";
import getTopRatedGames from "@/lib/services/getTopRatedGames";
import getMostPlayedGames from "@/lib/services/getMostPlayedGames";
import getGamesByCategory from "@/lib/services/getGamesByCategory";
import getGames from "@/lib/services/getGames";
import getRelevantGames from "@/lib/services/getRelevantGames";
import GameCard from "@/components/ui/game-card";

export default async function Home() {
  const games = await getGames();
  const game = await getGameByCode({
    code: "p7HOjYF4O",
    fetchedGames: games,
  });
  const categories = await getCategories();
  const topRated = await getTopRatedGames();
  const mostPlayed = await getMostPlayedGames();
  // const gamesByCategory = await getRelevantGames({ tags: ["Match-3"] });

  return (
    <main className="">
      {/* {gamesByCategory.map((ele) => (
        <div key={ele.code}>{ele.tags.en.toString()}</div>
      ))} */}
      {/* {topRated.map((ele) => (
        <div key={ele.code}>{ele.rating}</div>
      ))}
      {mostPlayed.map((ele) => (
        <div key={ele.code}>{ele.gamePlays}</div>
      ))}
      {categories.map((ele) => (
        <div key={ele}>{ele}</div>
      ))}
      {game?.name.en} */}
      <GameCard game={game!} />
    </main>
  );
}
