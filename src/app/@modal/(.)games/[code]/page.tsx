import getGameByCode from "@/lib/services/get-game-by-code";
import { MyDrawer } from "./comp";

type Props = {
  params: { code: string };
};

export default async function Page({ params: { code } }: Props) {
  const game = await getGameByCode({ code: decodeURIComponent(code) });
  return (
    <div>
      <MyDrawer>
        <p className="text-7xl">{code}</p>
      </MyDrawer>
    </div>
  );
}
