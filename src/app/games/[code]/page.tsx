import { Metadata } from "next";
import GameInfo from "@/components/ui/game/game-info";
import getGameByCode from "@/lib/services/get-game-by-code";

type Props = {
  params: { code: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.code;
  const language: Language = "en";

  const game = await getGameByCode({ code: decodeURIComponent(id) });

  return {
    title: game.name[language] + " | Gamezop",
    description: game.description[language],
    openGraph: {
      images: [
        game.assets.cover,
        game.assets.square,
        game.assets.thumb,
        game.assets.wall,
        game.assets.brick,
      ],
    },
  };
}

export default async function Page({ params: { code } }: Props) {
  const game = await getGameByCode({ code: decodeURIComponent(code) });

  return (
    <div className="mt-8 md:mt-10">
      <GameInfo game={game} />
    </div>
  );
}
