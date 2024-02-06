"use client";

import Image from "next/image";
import cx from "@/lib/utils/cx";
import { Game } from "@/lib/types/game";
import { Language } from "@/lib/types/language";
import ringBuffer from "@/lib/utils/ring-buffer";
import useGameCarousel from "@/lib/hooks/use-game-carousel";

type Props = {
  game: Game;
  language?: Language;
};

export default function GameCarousel({ game, language = "en" }: Props) {
  const {
    assets: { screens },
    gamePreviews,
    isPortrait,
  } = game;

  const {
    selectedIndex,
    onThumbClick,
    slides,
    thumbCarouselRef,
    heroCarouselRef,
  } = useGameCarousel({ gamePreview: !!gamePreviews[language], isPortrait });

  return (
    <div className={cx("flex flex-col gap-2", isPortrait && "flex-row")}>
      <div
        className={cx("overflow-hidden", isPortrait && "flex-[4]")}
        ref={heroCarouselRef}
      >
        <div className="flex">
          {slides.map((index) => (
            <div key={index} className="flex-[0_0_100%]">
              <Image
                key={index}
                className="object-contain w-full rounded-md"
                src={ringBuffer(index, screens)}
                alt="Your alt text"
                height={isPortrait ? 1280 : 720}
                width={isPortrait ? 720 : 1280}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden flex-1" ref={thumbCarouselRef}>
        <div className={cx("flex gap-1", isPortrait && "flex-col")}>
          {slides.map((index) => (
            <div
              key={index}
              className={cx(
                "opacity-40",
                index === selectedIndex && "opacity-100"
              )}
            >
              <button
                onClick={() => onThumbClick(index)}
                className="touch-manipulation w-full"
                type="button"
              >
                <Image
                  height={isPortrait ? 320 : 180}
                  width={isPortrait ? 180 : 320}
                  className="w-full object-contain rounded-md "
                  src={ringBuffer(index, screens)}
                  alt="Your alt text"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
