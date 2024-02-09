import GameCard from "../ui/game/game-card";
import GameSection from "../ui/game/game-section";
import getGamesByTypes from "@/lib/services/get-games-by-types";

type Props = {
  fetchedGames: Game[];
  category: string;
  count: number;
};

export default async function HomepageCategorySections({
  fetchedGames,
  category,
  count,
}: Props) {
  const games = await getGamesByTypes({
    type: "categories",
    fetchedGames: fetchedGames,
    value: category,
    take: 10,
  });

  return (
    <GameSection
      heading={category}
      count={count}
      className="my-10 mb-14"
      href={`categories/${encodeURIComponent(category)}`}
    >
      {games.map((game) => (
        <GameCard game={game} key={game.code} size="md" />
      ))}
    </GameSection>
  );
}
