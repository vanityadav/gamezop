import Link from "next/link";
import getGameCategories from "@/lib/services/getGameCategories";

export default async function Categories() {
  const categories = await getGameCategories();

  if (categories)
    return (
      <div className="flex items-center justify-between gap-4 overflow-x-auto text-nowrap no-scrollbar">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
            className="px-4 py-2 text-foreground text-sm rounded-full border  border-transparent hover:border-foreground hover:border-solid"
          >
            {category}
          </Link>
        ))}
      </div>
    );
}
