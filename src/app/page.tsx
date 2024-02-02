import getGameByCode from "@/lib/services/getGameByCode";
import getCategories from "@/lib/services/getGameCategories";
import getTopRatedGames from "@/lib/services/getTopRatedGames";
import getMostPlayedGames from "@/lib/services/getMostPlayedGames";
import getGamesByCategory from "@/lib/services/getGamesByCategory";

export default async function Home() {
  const game = await getGameByCode("HkS-bUoXUIx");
  const categories = await getCategories();
  const topRated = await getTopRatedGames();
  const mostPlayed = await getMostPlayedGames();
  const gamesByCategory = await getGamesByCategory("action");
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24">
      {gamesByCategory.map((ele) => (
        <div key={ele.code}>{ele.categories.en.toString()}</div>
      ))}
      {topRated.map((ele) => (
        <div key={ele.code}>{ele.rating}</div>
      ))}
      {mostPlayed.map((ele) => (
        <div key={ele.code}>{ele.gamePlays}</div>
      ))}
      {categories.map((ele) => (
        <div key={ele}>{ele}</div>
      ))}
      {game?.name.en}
    </main>
  );
}
