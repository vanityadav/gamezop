import Link from "next/link";
import cx from "@/lib/utils/cx";
import getGameCategories from "@/lib/services/get-game-categories";

export default async function Categories({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  const categories = await getGameCategories();

  if (categories)
    return (
      <div className="flex items-center justify-between gap-3 overflow-x-auto text-nowrap no-scrollbar">
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
