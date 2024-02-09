import Image from "next/image";
import cx from "@/lib/utils/cx";
import RelevantGames from "./relevant-games";
import GameInfoHeader from "./game-info-header";
import GameInfoCarousel from "./game-info-carousel";
import { blurDataURL } from "@/lib/constants/utils";
import LinkLabelSectionServer from "./link-label-section-server";
import LinkLabelSectionClient from "./link-label-section-client";

type Props = {
  game: Game;
  language?: Language;
};

export default function GameInfo({ game, language = "en" }: Props) {
  const {
    code,
    tags,
    categories,
    name,
    rating,
    description,
    numberOfRatings,
    gamePlays,
    isPortrait,
    assets: { brick },
    gamePreviews,
    url,
  } = game;
  return (
    <div className="flex flex-col gap-6">
      <GameInfoHeader
        gamePlays={gamePlays}
        numberOfRatings={numberOfRatings}
        rating={rating}
        preview={gamePreviews[language]}
        title={name[language]}
        url={url}
        language={language}
      />
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="flex-[3] flex">
          <GameInfoCarousel game={game} language={language} />
        </div>
        <div
          className={cx(
            "flex-1 md:sticky md:top-[7.9rem] static flex flex-col gap-6 h-fit",
            isPortrait && "flex-[2]"
          )}
        >
          <Image
            src={brick}
            alt={name[language]}
            height={150}
            width={310}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="object-contain rounded-md h-max w-full"
          />
          <p className="leading-relaxed">{description[language]}</p>

          <LinkLabelSectionClient
            basePath="categories"
            labelHeading="Genre"
            labels={categories[language]}
          >
            <LinkLabelSectionServer
              basePath="categories"
              labelHeading="Genre"
              labels={categories[language]}
            />
          </LinkLabelSectionClient>
          <LinkLabelSectionClient
            basePath="tags"
            labelHeading="Tags"
            labels={tags[language]}
          >
            <LinkLabelSectionServer
              basePath="tags"
              labelHeading="Tags"
              labels={tags[language]}
            />
          </LinkLabelSectionClient>
        </div>
      </div>
      <RelevantGames
        categories={categories[language]}
        tags={tags[language]}
        code={code}
      />
    </div>
  );
}
