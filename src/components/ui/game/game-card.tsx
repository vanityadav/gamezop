import React from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "@/lib/utils/cx";
import { Heart, Star } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

const cardVariants = cva("", {
  variants: {
    size: {
      auto: "h-full w-full",
      lg: "max-w-[600px] max-h-[492px]",
      default: "md:max-w-[300px] md:max-h-[246px] max-w-[225px] max-h-[205px]",
      md: "max-w-[225px] max-h-[205px]",
      sm: "max-w-[150px] max-h-[123px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = VariantProps<typeof cardVariants> & {
  game: Game;
  language?: Language;
  showCategories?: boolean;
  showRating?: boolean;
};

export default function GameCard({
  showCategories = true,
  showRating = true,
  size = "default",
  game,
  language = "en",
}: Props) {
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
      <div className={cx("relative", size !== "auto" && "w-max h-fit")}>
        <div
          className="sm:hidden group/icon group-hover:block absolute p-2 right-2 top-2 backdrop-blur-sm rounded-full"
          style={{ background: colorVibrant }}
        >
          <Heart
            className={cx("text-foreground", size === "sm" && "w-4 h-4")}
          />
        </div>
        <Image
          src={cover}
          alt={name[language]}
          width={300}
          height={246}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsamhYAQAFOgIsGY9yDQAAAABJRU5ErkJggg=="
          className={cx(
            "h-full w-full object-contain rounded-md",
            cardVariants({ size })
          )}
        />
      </div>
      <div className="grid gap-2">
        <div
          className={cx(
            "flex items-start justify-between gap-4",
            size === "sm" && "flex-col gap-4"
          )}
        >
          <span
            className={cx(
              "text-nowrap font-medium overflow-hidden overflow-ellipsis",
              size === "lg" && "max-w-[22ch] md:max-w-[27ch]",
              size === "default" && "max-w-[17ch] md:max-w-[20ch]",
              size === "md" && "max-w-[12ch] md:max-w-[15ch]",
              size === "sm" && "max-w-[14ch]"
            )}
          >
            {name[language]}
          </span>
          <Rating rating={rating} showRating={showRating} />
        </div>

        <Categories
          categories={categories[language]}
          showCategories={showCategories}
        />
      </div>
    </Link>
  );
}

const Rating = ({
  rating,
  showRating,
}: {
  rating: number;
  showRating: boolean;
}) => {
  if (!rating || !showRating) return null;

  return (
    <div className="flex items-center max-w-max">
      {rating}
      <Star strokeWidth={0} className="h-4 w-4 fill-foreground" />
    </div>
  );
};

const Categories = ({
  categories,
  showCategories,
}: {
  categories: string[];
  showCategories: boolean;
}) => {
  if (categories.length === 0 || !showCategories) return null;

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
