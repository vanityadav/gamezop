import { Metadata } from "next";
import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import getGamesByTypes from "@/lib/services/get-games-by-types";

type Props = {
  params: { categoryId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = decodeURIComponent(params.categoryId);

  return {
    title: category + " | Gamezop",
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.categoryId);

  const games = await getGamesByTypes({ type: "categories", value: category });

  return (
    <GameSection
      heading={category}
      count={games.length}
      intent="grid"
      className="my-10 mb-14"
      header="sticky"
    >
      {games.map((game) => (
        <GameCard game={game} key={game.code} size="auto" />
      ))}
    </GameSection>
  );
}
