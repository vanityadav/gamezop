import React from "react";
import Image from "next/image";
import { Game } from "@/lib/types/game";
import { Heart, Star } from "lucide-react";
import { Languages } from "@/lib/types/languages";

type Props = {
  game: Game;
  language?: Languages;
};

export default function GameCard({ game, language = "en" }: Props) {
  const {
    name,
    assets: { cover },
    categories,
    rating,
  } = game;

  return (
    <div className="grid  text-sm gap-3 text-foreground">
      <div className="relative group">
        <div className="sm:hidden group-hover:block absolute p-4 right-0">
          <Heart className="h-7 w-7 text-white" />
        </div>
        <Image
          src={cover}
          alt={name[language]}
          width={400}
          height={400}
          className="rounded object-contain"
        />
      </div>

      <div className="flex items-start justify-between gap-4">
        <span className="text-balance">{name[language]}</span>
        <Rating rating={rating} />
      </div>

      <Categories categories={categories[language]} />
    </div>
  );
}

const Rating = ({ rating }: { rating: number }) => {
  if (!rating) return null;
  <div className="flex items-center max-w-max">
    {rating}
    <Star strokeWidth={0} className="h-4 w-4 fill-foreground" />
  </div>;
};

const Categories = ({ categories }: { categories: string[] }) => {
  if (categories.length === 0) return null;

  <div className="text-balance text-xs">
    {categories.map((category, index) => (
      <span
        key={category}
        className={
          index >= 1
            ? "ml-5 relative before:absolute before:-left-3 before:top-1/2  before:h-1 before:w-1 before:rounded-full before:bg-foreground"
            : ""
        }
      >
        {category}
      </span>
    ))}
  </div>;
};
