import getGameByCode from "@/lib/services/get-game-by-code";
import React from "react";

type Props = {
  params: { code: string };
};

export default async function Page({ params: { code } }: Props) {
  const game = await getGameByCode({ code: decodeURIComponent(code) });
  return <div className="text-7xl">{game.name.en}</div>;
}
