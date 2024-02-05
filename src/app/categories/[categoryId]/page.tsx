import getGamesByCategory from "@/lib/services/get-games-by-category";

type Props = {
  params: { categoryId: string };
};

export default async function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.categoryId);

  const games = await getGamesByCategory({ category });

  return (
    <div>
      {games.map((game) => (
        <div key={game.code}>{game.name.en}</div>
      ))}
    </div>
  );
}
