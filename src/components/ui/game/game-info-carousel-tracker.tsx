"use client";

import Image from "next/image";
import cx from "@/lib/utils/cx";
import { useContext } from "react";
import { Youtube } from "lucide-react";
import { CarouselContext } from "./game-carousel";
import { blurDataURL } from "@/lib/constants/utils";

export default function GameInfoCarouselTracker() {
  const drawerContext = useContext(CarouselContext);
  if (!drawerContext) throw new Error("Carousel Context not in scope");

  const { screens, isPortrait, alt, selectedIndex, onThumbClick } =
    drawerContext;

  return (screens as string[]).map((screen, index) => {
    const isPreview = screen.startsWith("https://youtu.be");

    const src = isPreview ? (screens.at(0) as string) : screen;

    const imageHeight = isPortrait ? 320 : 180;
    const imageWidth = isPortrait ? 180 : 320;

    return (
      <div
        key={index}
        className={cx(
          "opacity-20 hover:opacity-50",
          isPortrait && "flex",
          index === selectedIndex && "opacity-100 hover:opacity-100"
        )}
      >
        <button
          onClick={() => onThumbClick(index)}
          className="touch-manipulation w-full h-full relative"
        >
          {isPreview && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background-focused/10 backdrop-blur-sm">
              <Youtube className="h-16 w-16 md:h-20 md:w-20" />
            </div>
          )}

          <Image
            height={imageHeight}
            width={imageWidth}
            className="w-full object-contain rounded-md"
            src={src}
            alt={alt || "image"}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </button>
      </div>
    );
  });
}
