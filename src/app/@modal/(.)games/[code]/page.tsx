import { Suspense } from "react";
import GameInfo from "@/components/ui/game/game-info";
import GameDrawer from "@/components/ui/game/game-drawer";
import getGameByCode from "@/lib/services/get-game-by-code";

type Props = {
  params: { code: string };
};

export default function Page({ params: { code } }: Props) {
  return (
    <GameDrawer>
      {/* TODO: Make Loader */}
      <Suspense fallback={"Game Info Loading..."}>
        <GamePage code={code} />
      </Suspense>
    </GameDrawer>
  );
}

const GamePage = async ({ code }: { code: string }) => {
  const game = await getGameByCode({ code: decodeURIComponent(code) });

  return <GameInfo game={game} />;
};
