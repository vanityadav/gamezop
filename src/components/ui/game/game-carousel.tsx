"use client";

import cx from "@/lib/utils/cx";
import useGameCarousel from "@/lib/hooks/use-game-carousel";
import { EmblaPluginType, EmblaOptionsType } from "embla-carousel";
import { ComponentProps, ReactNode, createContext, useContext } from "react";

type Props<T> = ComponentProps<"div"> & {
  language: Language;
  isPortrait: boolean;
  screens: T[];
  alt?: string;
  heroOptions?: EmblaOptionsType;
  trackerOptions?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};

type CarouselContext<T> = Props<T> & {
  selectedIndex: number;
  onThumbClick: Function;
  // TODO: Search for types package for the library
  heroRef: any;
  trackerRef: any;
};

// TODO :  fix context generic types
const createCarouselContext = <T,>() =>
  createContext<CarouselContext<T> | null>(null);

export const CarouselContext = createCarouselContext();

const GameCarousel = <T,>({
  screens,
  language = "en",
  isPortrait,
  alt,
  className,
  heroOptions,
  trackerOptions,
  plugins,
  ...props
}: Props<T>) => {
  const { selectedIndex, onThumbClick, trackerRef, heroRef } = useGameCarousel({
    isPortrait,
    heroOptions,
    trackerOptions,
    plugins,
  });

  return (
    <CarouselContext.Provider
      value={{
        selectedIndex,
        onThumbClick,
        screens,
        language,
        alt,
        isPortrait,
        heroRef,
        trackerRef,
      }}
    >
      <div
        className={cx(
          "flex flex-col gap-2",
          isPortrait && "flex-row",
          className
        )}
        {...props}
      />
    </CarouselContext.Provider>
  );
};

type HeroSectionProps = ComponentProps<"div"> & {
  children: ReactNode;
};

const HeroSection = ({ children, className, ...props }: HeroSectionProps) => {
  const drawerContext = useContext(CarouselContext);
  if (!drawerContext) throw new Error("Carousel Context not in scope");

  const { isPortrait, heroRef } = drawerContext;

  return (
    <div
      className={cx(
        "overflow-hidden",
        isPortrait && "h-fit flex-[4]",
        className
      )}
      {...props}
      ref={heroRef}
    >
      <div className="flex">{children}</div>
    </div>
  );
};

type TrackerSectionProps = ComponentProps<"div"> & {
  children: ReactNode;
  wrapperClassName?: string;
};

const TrackerSection = ({
  children,
  className,
  wrapperClassName,
  ...props
}: TrackerSectionProps) => {
  const drawerContext = useContext(CarouselContext);
  if (!drawerContext) throw new Error("Carousel Context not in scope");

  const { isPortrait, trackerRef } = drawerContext;

  return (
    <div
      className={cx("overflow-hidden flex-1", wrapperClassName)}
      ref={trackerRef}
    >
      <div
        className={cx(
          "flex gap-1",
          isPortrait && "flex-col h-[200px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

GameCarousel.Carousel = HeroSection;
GameCarousel.Tracker = TrackerSection;

export default GameCarousel;
