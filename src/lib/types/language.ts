// add supported languages in Union types "en" | "fr" | "es"

export type Language = "en";

export type LanguageBasedData = {
  [x in Language]: string;
};

export type LanguageBasedDataList = {
  [x in Language]: string[];
};
