import Image from "next/image";
import cx from "@/lib/utils/cx";
import { Game } from "@/lib/types/game";
import { Language } from "@/lib/types/language";
import GameCarousel from "@/components/ui/game/game-carousel";
import Link from "next/link";
import { Gamepad2, Heart, Share, Share2, Star } from "lucide-react";

type Props = {
  game: Game;
  language?: Language;
};

export default function GameInfo({ game, language = "en" }: Props) {
  const {
    tags,
    categories,
    name,
    rating,
    description,
    numberOfRatings,
    gamePlays,
    isPortrait,
    assets: { brick, wall, screens },
    colorMuted,
    colorVibrant,
  } = game;
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-medium  mb-2">{name[language]} </h1>
      <div className="sticky top-0 z-50 py-2 bg-background/95 backdrop-blur-sm flex justify-between items-center">
        <div className="flex items-center gap-6 text-foreground-muted">
          <span className="flex items-center">
            {rating} <Star /> {`(${numberOfRatings})`}
          </span>
          <span>{gamePlays}</span>
        </div>
        <div className="flex items-center gap-6">
          <Heart />
          <Share2 />
          <Link
            href={game.url}
            className="px-6 py-3 border text-nowrap text-center rounded-full bg-foreground text-background font-medium"
            // style={{ borderColor: colorVibrant, backgroundColor: colorMuted }}
          >
            <span className="hidden sm:block">Play Now</span>
            <span className="block sm:hidden">
              <Gamepad2 />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="flex-[3] flex">
          <GameCarousel game={game} />
        </div>
        <div
          className={cx(
            "flex-1 md:sticky top-20 h-max static flex flex-col gap-6",
            isPortrait && "flex-[2]"
          )}
        >
          <Image
            src={brick}
            alt={name[language]}
            height={150}
            width={310}
            className="object-contain rounded-md h-max w-full"
          />
          <p className="leading-relaxed">{description[language]}</p>
          <div className="flex flex-col gap-2 ">
            <span>Genre</span>
            <div className="flex flex-wrap gap-1">
              {categories[language].map((category) => (
                <span
                  key={category}
                  className="text-xs px-2 py-1 bg-background-focused/70 text-foreground-muted rounded text-center"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Tags</span>
            <div className="flex flex-wrap gap-1">
              {tags[language].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-background-focused/70 text-foreground-muted rounded text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
