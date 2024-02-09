import FeaturedCarousel from "./featured-carousel";
import getGamesByTypes from "@/lib/services/get-games-by-types";

type Props = LimitedResults & { fetchedGames?: Game[] };

export default async function FeaturedSection({
  take,
  skip,
  fetchedGames,
}: Props) {
  const games = await getGamesByTypes({
    value: "featured",
    type: "categories",
    fetchedGames,
    take,
    skip,
  });

  return <FeaturedCarousel games={games} />;
}
