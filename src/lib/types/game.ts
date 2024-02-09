type Game = {
  code: string;
  url: string;
  name: LanguageBasedData;
  isPortrait: boolean;
  description: LanguageBasedData;
  gamePreviews: LanguageBasedData;
  assets: Assets;
  categories: LanguageBasedDataList;
  tags: LanguageBasedDataList;
  width: number;
  height: number;
  colorMuted: string;
  colorVibrant: string;
  privateAllowed: boolean;
  rating: number;
  numberOfRatings: number;
  gamePlays: number;
  hasIntegratedAds: boolean;
};

type Assets = {
  cover: string;
  brick: string;
  thumb: string;
  wall: string;
  square: string;
  screens: string[];
  coverTiny: string;
  brickTiny: string;
};
