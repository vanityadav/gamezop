import CategoryBar from "@/components/layouts/category-bar";
import GameCard from "@/components/ui/game-card";
import GameSection from "@/components/ui/game-card/game-section";
import getGames from "@/lib/services/get-games";
import React from "react";

export default async function Page() {
  const games = await getGames();

  return (
    <>
      <CategoryBar />
      <main className="">
        <GameSection heading="Games">
          {games.map((game) => (
            <GameCard game={game} key={game.code} />
          ))}
        </GameSection>
      </main>
    </>
  );
}
