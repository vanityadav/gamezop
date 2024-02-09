import Link from "next/link";
import GameSection from "../ui/game/game-section";
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
    <GameSection
      heading={type}
      count={typeKeys.length}
      intent="grid"
      className="my-10 mb-14"
      header="sticky"
    >
      {typeKeys.map((value) => (
        <Link
          key={value}
          href={`/${type}/${encodeURIComponent(value.toLowerCase())}`}
          className=" text-xl font-bold border-foreground-muted text-center p-2 border rounded-md"
        >
          {value} &#40;{types[value]}&#41;
        </Link>
      ))}
    </GameSection>
  );
}
