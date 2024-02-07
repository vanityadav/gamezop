"use client";

import Image from "next/image";
import cx from "@/lib/utils/cx";
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
    name,
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
        className={cx("overflow-hidden", isPortrait && "h-fit flex-[4]")}
        ref={heroCarouselRef}
      >
        <div className="flex">
          {slides.map((index) => (
            <div key={index} className="flex-[0_0_100%]">
              <Image
                key={index}
                className="object-contain w-full rounded-md"
                src={ringBuffer(index, screens)}
                alt={name[language]}
                height={isPortrait ? 1280 : 720}
                width={isPortrait ? 720 : 1280}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsamhYAQAFOgIsGY9yDQAAAABJRU5ErkJggg=="
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden flex-1" ref={thumbCarouselRef}>
        <div className={cx("flex gap-1", isPortrait && "flex-col h-[200px]")}>
          {slides.map((index) => (
            <div
              key={index}
              className={cx(
                "opacity-30",
                isPortrait && "flex",
                index === selectedIndex && "opacity-100"
              )}
            >
              <button
                onClick={() => onThumbClick(index)}
                className="touch-manipulation w-full"
              >
                <Image
                  height={isPortrait ? 320 : 180}
                  width={isPortrait ? 180 : 320}
                  className="w-full object-contain rounded-md"
                  src={ringBuffer(index, screens)}
                  alt={name[language]}
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsamhYAQAFOgIsGY9yDQAAAABJRU5ErkJggg=="
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
