import { Metadata } from "next";
import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import CategoryBar from "@/components/layouts/category-bar";
import getTopRatedGames from "@/lib/services/get-top-rated-games";

export const metadata: Metadata = {
  title: "Top Rated Games | Gamezop",
};

export default async function Page() {
  const games = await getTopRatedGames();

  return (
    <>
      <CategoryBar fetchedGames={games} />
      <GameSection
        heading="Top Player Rated"
        count={games.length}
        intent="grid"
        className="mb-14"
        header="sticky"
      >
        {games.map((game) => (
          <GameCard game={game} key={game.code} size="auto" />
        ))}
      </GameSection>
    </>
  );
}
