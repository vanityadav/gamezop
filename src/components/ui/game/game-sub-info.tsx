import Link from "next/link";
import { Star, Youtube } from "lucide-react";

type Props = {
  rating: number;
  gamePlays: number;
  numberOfRatings: number;
  language: Language;
  preview: string;
};

export default function GameSubInfo({
  rating,
  preview,
  gamePlays,
  numberOfRatings,
  language,
}: Props) {
  const timesPlayed =
    new Intl.NumberFormat(language, { notation: "compact" }).format(gamePlays) +
    " " +
    " plays";
  const ratingCount = new Intl.NumberFormat(language, {
    notation: "compact",
  }).format(numberOfRatings);

  return (
    <div className="flex gap-2 text-foreground-muted max-sm:text-xs sm:gap-3 flex-col sm:flex-row items-start sm:items-center">
      <div className="flex items-center gap-1">
        <span>{rating}</span>
        <span>
          <Star className="w-4 h-4 fill-foreground-muted stroke-none" />
        </span>
        {numberOfRatings > 0 && <span>&#40;{ratingCount}&#41;</span>}
      </div>
      <div className="hidden sm:block w-[1px] h-5 rounded-full bg-foreground-muted" />
      {gamePlays > 0 && (
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <span>{timesPlayed}</span>

          {preview && (
            <>
              <div className="w-[1px] h-5 rounded-full bg-foreground-muted" />
              <Link href={preview} className="group">
                <Youtube className="stroke-foreground-muted group-hover:stroke-foreground" />
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
