import getGames from "@/lib/services/get-games";
import GameCard from "@/components/ui/game/game-card";
import CategoryBar from "@/components/layouts/category-bar";
import GameSection from "@/components/ui/game/game-section";

export default async function Home() {
  const games = await getGames();

  return (
    <>
      <CategoryBar />
      <main className="">
        <GameSection heading="Games">
          {games.map((game) => (
            <GameCard game={game} key={game.code} />
          ))}
        </GameSection>
      </main>
    </>
  );
}
