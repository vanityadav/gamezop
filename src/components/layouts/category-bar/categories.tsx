import Link from "next/link";
import cx from "@/lib/utils/cx";
import getGameTypes from "@/lib/services/get-game-types";

type Props = {
  activeCategory?: string;
  fetchedGames?: Game[];
};

export default async function Categories({
  activeCategory,
  fetchedGames,
}: Props) {
  const categories = await getGameTypes({
    type: "categories",
    fetchedGames,
  });

  if (!categories) return null;
  if (!Array.isArray(categories)) throw new Error("Bad Response");

  return (
    <div className="flex items-center justify-between gap-3 overflow-x-auto whitespace-nowrap text-nowrap no-scrollbar">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
          className={cx(
            "px-4 py-2 bg-background-focused/50 rounded-md border border-border hover:bg-background-focused hover:border-foreground-muted",
            activeCategory === category && "bg-background-focused"
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
