import Link from "next/link";
import getGameCategories from "@/lib/services/get-game-categories";

export default async function Page() {
  const categories = await getGameCategories();

  return (
    <div className="mt-16 mb-12">
      <h1 className="text-3xl font-medium mb-10">
        All Categories &#40;{categories.length}&#41;
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
            className=" text-xl font-bold border-foreground-muted text-center p-2 border rounded-md"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
