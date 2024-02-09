import { Metadata } from "next";
import GameCard from "@/components/ui/game/game-card";
import CategoryBar from "@/components/layouts/category-bar";
import GameSection from "@/components/ui/game/game-section";
import getAddFreeGames from "@/lib/services/get-add-free-games";

export const metadata: Metadata = {
  title: "Ads Free Games | Gamezop",
};

export default async function Page() {
  const games = await getAddFreeGames();

  return (
    <>
      <CategoryBar fetchedGames={games} />
      <GameSection
        heading="Ads free games "
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
