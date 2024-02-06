import GameInfo from "@/components/ui/game/game-info";
import getGameByCode from "@/lib/services/get-game-by-code";

type Props = {
  params: { code: string };
};

export default async function Page({ params: { code } }: Props) {
  const game = await getGameByCode({ code: decodeURIComponent(code) });

  return (
    <div className="mt-8 md:mt-10">
      <GameInfo game={game} />;
    </div>
  );
}
