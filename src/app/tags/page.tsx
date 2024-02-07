import Link from "next/link";
import getGameTags from "@/lib/services/get-game-tags";

export default async function Page() {
  const tags = await getGameTags();

  return (
    <div className="mt-16 mb-12">
      <h1 className="text-3xl font-medium mb-10">
        All Tags &#40;{tags.length}&#41;
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
        {tags.map((tags) => (
          <Link
            key={tags}
            href={`/tags/${encodeURIComponent(tags.toLowerCase())}`}
            className=" text-xl font-bold border-foreground-muted text-center p-2 border rounded-md"
          >
            {tags}
          </Link>
        ))}
      </div>
    </div>
  );
}
