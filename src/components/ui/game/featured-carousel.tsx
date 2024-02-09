"use client";

import GameCarousel from "./game-carousel";
import Autoplay from "embla-carousel-autoplay";
import FeaturedCarouselHero from "./featured-carousel-hero";
import FeaturedCarouselTracker from "./featured-carousel-tracker";

type Props = { games: Game[]; language?: Language };

export default function FeaturedCarousel({ games, language = "en" }: Props) {
  return (
    <GameCarousel
      className="justify-center"
      screens={games}
      isPortrait={true}
      language={language}
      heroOptions={{ loop: true }}
      trackerOptions={{
        loop: true,
        dragFree: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <GameCarousel.Carousel className="rounded-2xl overflow-hidden max-w-[960px]">
        <FeaturedCarouselHero />
      </GameCarousel.Carousel>
      <GameCarousel.Tracker wrapperClassName="max-md:hidden md:ml-4 max-w-[240px]">
        <FeaturedCarouselTracker />
      </GameCarousel.Tracker>
    </GameCarousel>
  );
}
