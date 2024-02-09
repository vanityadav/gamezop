import { Metadata } from "next";
import getGames from "@/lib/services/get-games";
import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import CategoryBar from "@/components/layouts/category-bar";

export const metadata: Metadata = {
  title: "All Games | Gamezop",
};

export default async function Page() {
  const games = await getGames();

  return (
    <>
      <CategoryBar fetchedGames={games} />
      <GameSection
        heading="All Games"
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
