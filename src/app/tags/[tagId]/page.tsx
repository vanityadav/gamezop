import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import getGamesByTypes from "@/lib/services/get-games-by-types";

type Props = { params: { tagId: string } };

export default async function Page({ params: { tagId } }: Props) {
  const tag = decodeURIComponent(tagId);

  const games = await getGamesByTypes({ value: tag, type: "tags" });

  return (
    <GameSection
      heading={tag}
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
