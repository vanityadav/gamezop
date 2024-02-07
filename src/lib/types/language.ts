// add supported languages in Union types "en" | "fr" | "es"

type Language = "en";

type LanguageBasedData = {
  [x in Language]: string;
};

type LanguageBasedDataList = {
  [x in Language]: string[];
};
