import React from "react";
import GameCard from "./game-card";
import GameSection from "./game-section";
import getRelevantGames from "@/lib/services/get-relevant-games";

type Props = {
  tags: string[];
  categories: string[];
  limit?: number;
  code: string;
};

export default async function RelevantGames({ code, tags, categories }: Props) {
  const games = await getRelevantGames({
    code,
    categories,
    tags,
    take: 20,
  });

  if (games?.length === 0) return null;

  return (
    <GameSection heading="More Like This" className="mt-16 mb-14">
      {games.map((game) => (
        <GameCard size="sm" game={game} key={game.code} />
      ))}
    </GameSection>
  );
}
