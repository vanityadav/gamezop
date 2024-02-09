import getGames from "@/lib/services/get-games";
import getGameTypes from "@/lib/services/get-game-types";
import CategoryBar from "@/components/layouts/category-bar";
import FeaturedSection from "@/components/ui/game/featured-section";
import HomepageCategorySections from "@/components/pages/homepage-category-sections";
import HomepageListSectionUserGames from "@/components/pages/homepage-list-section-user- games";

export default async function Home() {
  const games = await getGames();
  const categories = await getGameTypes({
    fetchedGames: games,
    type: "categories",
    withCount: true,
  });

  const categoryNames = Object.keys(categories);

  return (
    <>
      <CategoryBar fetchedGames={games} />
      <FeaturedSection fetchedGames={games} />
      <HomepageListSectionUserGames fetchedGames={games} />

      {categoryNames.map((category) => (
        <HomepageCategorySections
          key={category}
          fetchedGames={games}
          category={category}
          count={(categories as Record<string, number>)[category]}
        />
      ))}
    </>
  );
}
