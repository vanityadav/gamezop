"use client";

import Image from "next/image";
import { useContext } from "react";
import { CarouselContext } from "./game-carousel";
import { blurDataURL } from "@/lib/constants/utils";

export default function GameInfoCarouselHero() {
  const drawerContext = useContext(CarouselContext);
  if (!drawerContext) throw new Error("Carousel Context not in scope");

  const { screens, isPortrait, alt } = drawerContext;

  return screens.map((screen, index) => {
    const previewSrc = `http://www.youtube.com/embed/${(screen as string)
      .split("/")
      .at(-1)}`;

    const isPreview = (screen as string).startsWith("https://youtu.be");

    const imageWidth = isPortrait ? 720 : 1280;
    const imageHeight = isPortrait ? 1280 : 720;

    return (
      <div className="flex-[0_0_100%]" key={index}>
        {isPreview ? (
          <iframe
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
            src={previewSrc}
            width="100%"
            height="100%"
          ></iframe>
        ) : (
          <Image
            className="object-contain w-full rounded-md"
            src={screen as string}
            alt={alt || "image"}
            height={imageHeight}
            width={imageWidth}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        )}
      </div>
    );
  });
}
