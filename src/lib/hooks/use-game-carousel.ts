import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { EmblaPluginType, EmblaOptionsType } from "embla-carousel";

type Props = {
  isPortrait: boolean;
  heroOptions?: EmblaOptionsType;
  trackerOptions?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};

export default function useGameCarousel({
  isPortrait,
  heroOptions,
  trackerOptions,
  plugins,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [heroRef, heroAPI] = useEmblaCarousel(heroOptions, plugins);

  const [trackerRef, trackerAPI] = useEmblaCarousel({
    axis: isPortrait ? "y" : "x",
    ...trackerOptions,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!heroAPI || !trackerAPI) return;

      heroAPI.scrollTo(index);
    },
    [heroAPI, trackerAPI]
  );

  const onSelect = useCallback(() => {
    if (!heroAPI || !trackerAPI) return;

    setSelectedIndex(heroAPI.selectedScrollSnap());
    trackerAPI.scrollTo(heroAPI.selectedScrollSnap());
  }, [heroAPI, trackerAPI, setSelectedIndex]);

  useEffect(() => {
    if (!heroAPI) return;

    onSelect();

    heroAPI.on("select", onSelect);
    heroAPI.on("reInit", onSelect);
  }, [heroAPI, onSelect]);

  return {
    selectedIndex,
    onThumbClick,
    trackerRef,
    heroRef,
  };
}
