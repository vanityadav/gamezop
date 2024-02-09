"use client";

import Image from "next/image";
import cx from "@/lib/utils/cx";
import { useContext } from "react";
import { CarouselContext } from "./game-carousel";
import { blurDataURL } from "@/lib/constants/utils";

type Props = {};

export default function FeaturedCarouselTracker({}: Props) {
  const drawerContext = useContext(CarouselContext);
  if (!drawerContext) throw new Error("Carousel Context not in scope");

  const { screens, isPortrait, selectedIndex, onThumbClick, language } =
    drawerContext;

  return (
    <>
      {(screens as Game[]).map((game, index) => (
        <div
          key={game.code}
          className={cx(
            "opacity-100 sm:px-2 md:px-4 py-2 rounded-md hover:bg-background-focused",
            isPortrait && "flex",
            index === selectedIndex && "bg-background-focused"
          )}
        >
          <button
            onClick={() => onThumbClick(index)}
            className="touch-manipulation w-full h-full flex items-center justify-start gap-2"
          >
            <Image
              src={game.assets.coverTiny}
              width={48}
              height={48}
              alt={game.name[language]}
              className="h-[48px] w-[36px] rounded-md object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <p className="text-start overflow-hidden overflow-ellipsis  max-w-full ">
              {game.name[language]}
            </p>
          </button>
        </div>
      ))}
    </>
  );
}
