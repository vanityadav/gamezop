import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import CategoryBar from "@/components/layouts/category-bar";
import getMostPlayedGames from "@/lib/services/get-most-played-games";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Most Played Games | Gamezop",
};

export default async function Page() {
  const games = await getMostPlayedGames();

  return (
    <>
      <CategoryBar fetchedGames={games} />
      <GameSection
        heading="Most Played"
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
