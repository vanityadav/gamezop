// add supported languages in Union types "en" | "fr" | "es"

export type Languages = "en";

export type LanguageBasedData = {
  [x in Languages]: string;
};

export type LanguageBasedDataList = {
  [x in Languages]: string[];
};
