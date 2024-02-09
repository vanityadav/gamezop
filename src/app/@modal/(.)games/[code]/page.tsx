import { Metadata } from "next";
import { Suspense } from "react";
import GameInfo from "@/components/ui/game/game-info";
import GameDrawer from "@/components/ui/game/game-drawer";
import getGameByCode from "@/lib/services/get-game-by-code";
import GameInfoSkelton from "@/components/ui/game/game-info-skelton";

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

export default function Page({ params: { code } }: Props) {
  return (
    <GameDrawer>
      <Suspense fallback={<GameInfoSkelton />}>
        <GamePage code={code} />
      </Suspense>
    </GameDrawer>
  );
}

const GamePage = async ({ code }: { code: string }) => {
  const game = await getGameByCode({ code: decodeURIComponent(code) });
  return <GameInfo game={game} />;
};
