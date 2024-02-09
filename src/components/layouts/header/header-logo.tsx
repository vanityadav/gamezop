import React from "react";
import Link from "next/link";
import Image, { getImageProps } from "next/image";
import { blurDataURL } from "@/lib/constants/utils";

export default function HeaderLogo() {
  const common = {
    alt: "Gamezop Logo",
    width: 154,
    height: 40,
  };
  const {
    props: { srcSet: dark },
  } = getImageProps({
    ...common,
    src: "/assets/brand/gamezop-logo-dark.webp",
  });

  const {
    props: { srcSet: light, ...rest },
  } = getImageProps({
    ...common,
    src: "/assets/brand/gamezop-logo-light.webp",
  });

  return (
    <Link href="/" className="pl-1">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet={dark} />
        <source media="(prefers-color-scheme: light)" srcSet={light} />
        <Image
          {...rest}
          alt={common.alt}
          className="object-contain"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </picture>
    </Link>
  );
}
