"use client";

import Link from "next/link";
import Button from "../button";
import { useContext } from "react";
import { Heart } from "lucide-react";
import { getImageProps } from "next/image";
import { CarouselContext } from "./game-carousel";

type Props = {};

export default function FeaturedCarouselHero({}: Props) {
  const drawerContext = useContext(CarouselContext);
  if (!drawerContext) throw new Error("Carousel Context not in scope");

  const { screens, language } = drawerContext;

  return (
    <>
      {(screens as Game[]).map((game) => (
        <Link
          key={game.code}
          className="flex-[0_0_100%] relative group"
          href={`/games/${encodeURIComponent(game.code)}`}
        >
          <div className="absolute z-10 bottom-4 left-4 flex flex-col gap-4 text-background dark:text-foreground text-shadow-dark">
            <h1 className="max-sm:text-xl text-3xl font-bold">
              {game.name[language]}
            </h1>
            <span className="w-1/2 max-sm:w-2/3 line-clamp-2 max-xs:hidden">
              {game.description[language]}
            </span>
            <div className="flex items-center gap-4">
              <Link href={game.url}>
                <Button intent="featured-play">Play Now</Button>
              </Link>
              <Button intent="secondary">
                <Heart className="h-4 w-4" />
                <span className="max-xs:hidden"> Add to favorites</span>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 z-0 featured-gradient"></div>
          <FeaturedImage
            alt={game.name[language]}
            wall={game.assets.wall}
            cover={game.assets.cover}
          />
        </Link>
      ))}
    </>
  );
}

type ImageProps = {
  alt: string;
  wall: string;
  cover: string;
};

const FeaturedImage = ({ alt, wall, cover }: ImageProps) => {
  const {
    props: { srcSet: landscape, height: lHeight, width: lWidth },
  } = getImageProps({
    src: wall,
    height: 375,
    width: 768,
    alt,
  });

  const {
    props: { srcSet: portrait, width, height, ...rest },
  } = getImageProps({
    src: cover,
    height: 492,
    width: 600,
    alt,
  });

  return (
    <picture>
      <source
        media="(min-width: 640px)"
        srcSet={landscape}
        height={lHeight}
        width={lWidth}
      />
      <source
        media="(max-width: 640px)"
        srcSet={portrait}
        height={height}
        width={width}
      />
      <img {...rest} alt={alt} className="h-full w-full  object-contain " />
    </picture>
  );
};
