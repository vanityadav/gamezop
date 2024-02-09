import GameListCard from "@/components/ui/game/game-list-card";
import getAddFreeGames from "@/lib/services/get-add-free-games";
import getTopRatedGames from "@/lib/services/get-top-rated-games";
import getMostPlayedGames from "@/lib/services/get-most-played-games";
import GameListCardSection from "@/components/ui/game/game-list-card-section";
import getRandomGames from "@/lib/services/get-random-games";

type Props = {
  fetchedGames?: Game[];
};

const listSize = 5;

export default async function HomepageListSectionUserGames({
  fetchedGames,
}: Props) {
  const recentPlays = await getRandomGames({ fetchedGames, take: listSize });
  const suggestions = await getRandomGames({ fetchedGames, take: listSize });
  const favorites = await getRandomGames({ fetchedGames, take: listSize });
  return (
    <div className="flex gap-12 justify-between overflow-x-scroll  whitespace-nowrap text-nowrap no-scrollbar snap-x snap-proximity mt-16">
      <GameListCardSection title="Recently Played">
        {recentPlays.map((game) => (
          <GameListCard key={game.code} game={game} showPlays showRating />
        ))}
      </GameListCardSection>
      <GameListCardSection title="Curated for You">
        {suggestions.map((game) => (
          <GameListCard key={game.code} game={game} showPlays showRating />
        ))}
      </GameListCardSection>
      <GameListCardSection title="Your Favorites">
        {favorites.map((game) => (
          <GameListCard key={game.code} game={game} showPlays showRating />
        ))}
      </GameListCardSection>
    </div>
  );
}
