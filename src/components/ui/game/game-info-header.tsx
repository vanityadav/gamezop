import Link from "next/link";
import Button from "../button";
import { Gamepad2, Heart, Share2, Star } from "lucide-react";

type HeaderProps = {
  title: string;
  rating: number;
  gamePlays: number;
  numberOfRatings: number;
  url: string;
  language: Language;
};

export default function GamePageHeader({
  title,
  rating,
  gamePlays,
  numberOfRatings,
  url,
  language,
}: HeaderProps) {
  const timesPlayed =
    new Intl.NumberFormat(language, { notation: "compact" }).format(gamePlays) +
    " " +
    " plays";
  const ratingCount = new Intl.NumberFormat(language, {
    notation: "compact",
  }).format(numberOfRatings);

  return (
    <div className="sticky top-0 z-50 bg-background">
      <h1 className="text-2xl font-medium mb-2 ">{title} </h1>

      <div className="py-2 flex justify-between items-center">
        <div className="flex gap-2 text-foreground-muted max-sm:text-xs sm:gap-3 flex-col sm:flex-row items-start sm:items-center">
          <div className="flex items-center gap-1">
            <span>{rating}</span>
            <span>
              <Star className="w-4 h-4 fill-foreground stroke-none" />
            </span>
            {numberOfRatings > 0 && <span>&#40;{ratingCount}&#41;</span>}
          </div>
          <div className="hidden sm:block w-[1px] h-5 rounded-full bg-foreground-muted" />
          {gamePlays > 0 && <span>{timesPlayed}</span>}
        </div>
        <div className="flex items-center gap-4 max-sm:gap-3">
          <Button intent="icon">
            <Share2 />
          </Button>
          <Button intent="icon">
            <Heart />
          </Button>
          <Link
            href={url}
            className="max-sm:p-2 px-6 py-3 border text-nowrap text-center rounded-full bg-foreground text-background font-medium"
          >
            <span className="hidden sm:block">Play Now</span>
            <span className="block sm:hidden">
              <Gamepad2 />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
