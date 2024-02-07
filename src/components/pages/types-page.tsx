import Link from "next/link";
import getGameTypes from "@/lib/services/get-game-types";

type Props = {
  type: "categories" | "tags";
  title: string;
};

export default async function TypesPage({ type, title }: Props) {
  const types = (await getGameTypes({
    type,
    withCount: true,
  })) as Record<string, number>;

  const typeKeys = Object.keys(types);

  return (
    <div className="mt-16 mb-12">
      <h1 className="text-3xl font-medium mb-10">
        {title} &#40;{typeKeys.length}&#41;
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
        {typeKeys.map((value) => (
          <Link
            key={value}
            href={`/${type}/${encodeURIComponent(value.toLowerCase())}`}
            className=" text-xl font-bold border-foreground-muted text-center p-2 border rounded-md"
          >
            {value} &#40;{types[value]}&#41;
          </Link>
        ))}
      </div>
    </div>
  );
}
