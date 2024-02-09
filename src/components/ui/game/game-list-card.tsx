import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { blurDataURL } from "@/lib/constants/utils";

type Props = {
  game: Game;
  language?: Language;
  showRating?: boolean;
  showPlays?: boolean;
};

export default function GameListCard({
  game,
  language = "en",
  showPlays = false,
  showRating = false,
}: Props) {
  const timesPlayed =
    new Intl.NumberFormat(language, { notation: "compact" }).format(
      game.gamePlays
    ) +
    " " +
    " plays";

  return (
    <Link
      className="w-full h-full flex items-center justify-start gap-2 p-2 rounded-md hover:bg-background-focused"
      href={`games/${game.code}`}
    >
      <Image
        src={game.assets.coverTiny}
        width={48}
        height={48}
        alt={game.name[language]}
        className="h-[64px] w-[48px] rounded-md object-cover"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      <div className="text-foreground-muted text-xs gap-2 flex flex-col">
        <p className="text-start overflow-hidden text-foreground text-sm overflow-ellipsis max-w-full text-nowrap font-medium">
          {game.name[language]}
        </p>
        <div className="flex items-center gap-3">
          {showRating && (
            <div className="flex items-center gap-1 peer flex-1">
              <span>{game.rating}</span>
              <span>
                <Star className="w-4 h-4 fill-foreground-muted stroke-none" />
              </span>
            </div>
          )}
          {showPlays && (
            <span className="peer-has-[span]:border-l border-foreground-muted peer-has-[span]:pl-3 flex-1">
              {timesPlayed}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
