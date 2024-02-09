import GameListCard from "@/components/ui/game/game-list-card";
import getAddFreeGames from "@/lib/services/get-add-free-games";
import getTopRatedGames from "@/lib/services/get-top-rated-games";
import getMostPlayedGames from "@/lib/services/get-most-played-games";
import GameListCardSection from "@/components/ui/game/game-list-card-section";

type Props = {
  fetchedGames: Game[];
};

const listSize = 5;

export default async function HomepageListSectionGames({
  fetchedGames,
}: Props) {
  const addFree = await getAddFreeGames({ fetchedGames, take: listSize });
  const topRated = await getTopRatedGames({ fetchedGames, take: listSize });
  const mostPlayed = await getMostPlayedGames({ fetchedGames, take: listSize });
  return (
    <div className="flex gap-12 justify-between overflow-x-scroll  text-nowrap no-scrollbar snap-x snap-proximity">
      <GameListCardSection title="Top player rated" href="/top-rated-games">
        {topRated.map((game) => (
          <GameListCard key={game.code} game={game} showRating />
        ))}
      </GameListCardSection>
      <GameListCardSection title="Most Played" href="/most-played-games">
        {mostPlayed.map((game) => (
          <GameListCard key={game.code} game={game} showPlays />
        ))}
      </GameListCardSection>
      <GameListCardSection title="Without Ads" href="/ads-free-games">
        {addFree.map((game) => (
          <GameListCard key={game.code} game={game} showPlays showRating />
        ))}
      </GameListCardSection>
    </div>
  );
}
