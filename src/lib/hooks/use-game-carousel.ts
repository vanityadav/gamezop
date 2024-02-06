import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { isPromise } from "util/types";

type Props = {
  gamePreview: boolean;
  isPortrait: boolean;
};

export default function useGameCarousel({ gamePreview, isPortrait }: Props) {
  let SLIDE_COUNT = 3;
  if (gamePreview) SLIDE_COUNT = 4;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [heroCarouselRef, heroCarouselApi] = useEmblaCarousel();

  const [thumbCarouselRef, thumbCarouselApi] = useEmblaCarousel({
    axis: isPortrait ? "y" : "x",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!heroCarouselApi || !thumbCarouselApi) return;

      heroCarouselApi.scrollTo(index);
    },
    [heroCarouselApi, thumbCarouselApi]
  );

  const onSelect = useCallback(() => {
    if (!heroCarouselApi || !thumbCarouselApi) return;

    setSelectedIndex(heroCarouselApi.selectedScrollSnap());
    thumbCarouselApi.scrollTo(heroCarouselApi.selectedScrollSnap());
  }, [heroCarouselApi, thumbCarouselApi, setSelectedIndex]);

  useEffect(() => {
    if (!heroCarouselApi) return;

    onSelect();

    heroCarouselApi.on("select", onSelect);
    heroCarouselApi.on("reInit", onSelect);
  }, [heroCarouselApi, onSelect]);

  return {
    selectedIndex,
    onThumbClick,
    slides,
    thumbCarouselRef,
    heroCarouselRef,
  };
}
