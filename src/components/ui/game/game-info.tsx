import Image from "next/image";
import cx from "@/lib/utils/cx";
import RelevantGames from "./relevant-games";
import GamePageHeader from "./game-info-header";
import LinkLabelSection from "./link-label-section";
import GameCarousel from "@/components/ui/game/game-carousel";
import LinkLabelSectionServer from "./link-label-section-server";

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
    url,
  } = game;
  return (
    <div className="flex flex-col gap-6">
      <GamePageHeader
        gamePlays={gamePlays}
        numberOfRatings={numberOfRatings}
        rating={rating}
        title={name[language]}
        url={url}
        language={language}
      />
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="flex-[3] flex">
          <GameCarousel game={game} />
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
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsamhYAQAFOgIsGY9yDQAAAABJRU5ErkJggg=="
            className="object-contain rounded-md h-max w-full"
          />
          <p className="leading-relaxed">{description[language]}</p>

          <LinkLabelSection
            basePath="categories"
            labelHeading="Genre"
            labels={categories[language]}
          >
            <LinkLabelSectionServer
              basePath="categories"
              labelHeading="Genre"
              labels={categories[language]}
            />
          </LinkLabelSection>
          <LinkLabelSection
            basePath="tags"
            labelHeading="Tags"
            labels={tags[language]}
          >
            <LinkLabelSectionServer
              basePath="tags"
              labelHeading="Tags"
              labels={tags[language]}
            />
          </LinkLabelSection>
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
