import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import getGamesByCategory from "@/lib/services/get-games-by-category";

type Props = {
  params: { categoryId: string };
};

export default async function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.categoryId);

  const games = await getGamesByCategory({ category });

  return (
    <GameSection
      heading={category}
      count={games.length}
      intent="grid"
      className="mt-16 mb-12"
    >
      {games.map((game) => (
        <GameCard game={game} key={game.code} size="auto" />
      ))}
    </GameSection>
  );
}
