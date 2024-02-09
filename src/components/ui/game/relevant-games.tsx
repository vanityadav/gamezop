import React, { Suspense } from "react";
import GameCard from "./game-card";
import GameSection from "./game-section";
import getRelevantGames from "@/lib/services/get-relevant-games";

type Props = LimitedResults & {
  tags: string[];
  categories: string[];
  code: string;
};

export default async function RelevantGames({ ...props }: Props) {
  return (
    <GameSection heading="More Like This" className="mt-16 mb-14">
      <Games {...props} />
    </GameSection>
  );
}

const Games = async ({
  code,
  tags,
  categories,
  skip = 0,
  take = 20,
}: Props) => {
  const games = await getRelevantGames({
    code,
    categories,
    tags,
    take,
    skip,
  });

  if (games?.length === 0) return null;

  return (
    // TODO:  Add Card Loader
    <Suspense fallback={"Loading..."}>
      {games.map((game) => (
        <GameCard size="sm" game={game} key={game.code} />
      ))}
    </Suspense>
  );
};
