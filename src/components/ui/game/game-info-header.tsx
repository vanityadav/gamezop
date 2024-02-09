import Link from "next/link";
import Button from "../button";
import GameSubInfo from "./game-sub-info";
import { Gamepad2, Heart, Share2 } from "lucide-react";

type HeaderProps = {
  title: string;
  rating: number;
  gamePlays: number;
  numberOfRatings: number;
  url: string;
  language: Language;
  preview: string;
};

export default function GameInfoHeader({
  title,
  rating,
  gamePlays,
  numberOfRatings,
  url,
  language,
  preview,
}: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-background">
      <h1 className="text-2xl font-medium mb-2 ">{title} </h1>

      <div className="py-2 flex justify-between items-center">
        <GameSubInfo
          rating={rating}
          preview={preview}
          gamePlays={gamePlays}
          numberOfRatings={numberOfRatings}
          language={language}
        />
        <div className="flex items-center gap-4 max-sm:gap-3">
          <Button intent="icon">
            <Share2 />
          </Button>
          <Button intent="icon">
            <Heart />
          </Button>
          <Link
            href={url}
            className="max-sm:p-2 px-6 py-3 border whitespace-nowrap text-nowrap text-center rounded-full bg-foreground text-background font-semibold"
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
