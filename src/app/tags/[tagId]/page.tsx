import { Metadata } from "next";
import GameCard from "@/components/ui/game/game-card";
import GameSection from "@/components/ui/game/game-section";
import getGamesByTypes from "@/lib/services/get-games-by-types";

type Props = { params: { tagId: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.tagId;

  const tag = decodeURIComponent(id);

  return {
    title: tag + " | Gamezop",
  };
}

export default async function Page({ params: { tagId } }: Props) {
  const tag = decodeURIComponent(tagId);

  const games = await getGamesByTypes({ value: tag, type: "tags" });

  return (
    <GameSection
      heading={tag}
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
