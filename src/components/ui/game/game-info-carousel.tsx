"use client";

import GameCarousel from "./game-carousel";
import GameInfoCarouselHero from "./game-info-carousel-hero";
import GameInfoCarouselTracker from "./game-info-carousel-tracker";

type Props = {
  game: Game;
  language: Language;
};

export default function GameInfoCarousel({ game, language }: Props) {
  const {
    assets: { screens },
    isPortrait,
    name,
    gamePreviews,
  } = game;

  let slides: string[] | null = null;
  if (gamePreviews[language]) slides = [...screens, gamePreviews[language]];

  return (
    <GameCarousel
      screens={slides || screens}
      isPortrait={isPortrait}
      alt={name[language]}
      language={language}
    >
      <GameCarousel.Carousel>
        <GameInfoCarouselHero />
      </GameCarousel.Carousel>
      <GameCarousel.Tracker>
        <GameInfoCarouselTracker />
      </GameCarousel.Tracker>
    </GameCarousel>
  );
}
