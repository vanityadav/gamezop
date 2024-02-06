import React from "react";
import Image from "next/image";
import cx from "@/lib/utils/cx";
import { Game } from "@/lib/types/game";
import { Heart, Star } from "lucide-react";
import { Language } from "@/lib/types/language";
import Link from "next/link";

type Props = {
  game: Game;
  language?: Language;
};

export default function GameCard({ game, language = "en" }: Props) {
  const {
    code,
    name,
    assets: { cover },
    categories,
    rating,
    colorVibrant,
  } = game;

  return (
    <Link
      className="grid row-span-2 grid-rows-subgrid gap-5 group"
      href={`/games/${decodeURIComponent(code)}`}
    >
      <div className="relative">
        <div
          className="sm:hidden group/icon group-hover:block absolute p-2 right-2 top-2 backdrop-blur-sm rounded-full"
          style={{ background: colorVibrant }}
        >
          <Heart className="text-foreground" />
        </div>
        <Image
          src={cover}
          alt={name[language]}
          width={600}
          height={492}
          className="h-full w-full object-contain rounded-md"
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-start justify-between gap-4">
          <span className="text-nowrap font-medium">{name[language]}</span>
          <Rating rating={rating} />
        </div>

        <Categories categories={categories[language]} />
      </div>
    </Link>
  );
}

const Rating = ({ rating }: { rating: number }) => {
  if (!rating) return null;
  return (
    <div className="flex items-center max-w-max">
      {rating}
      <Star strokeWidth={0} className="h-4 w-4 fill-foreground" />
    </div>
  );
};

const Categories = ({ categories }: { categories: string[] }) => {
  if (categories.length === 0) return null;
  return (
    <div className="text-balance text-xs font-light text-foreground-muted">
      {categories.map((category, index) => (
        <span
          key={category}
          className={cx(
            index >= 1 &&
              "ml-5 relative before:absolute before:-left-3 before:top-1/2  before:h-1 before:w-1 before:rounded-full before:bg-foreground"
          )}
        >
          {category}
        </span>
      ))}
    </div>
  );
};
