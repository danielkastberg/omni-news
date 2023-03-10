import { Duration } from "./Duration";

export interface Article {
  article_id: string;
  title: string;
  description: string;
  articleLink: string;
  imageLink: string;
  duration: Duration;
  category: string;
  url: string;
}

export const iconToEmojiMap = new Map<string, string>([
  ["Annonsmaterial", "ð¢"],
  ["Ekonomi", "ð"],
  ["NÃ¶je & kultur", "ð­"],
  ["Utrikes", "ð"],
  ["Inrikes", "ð°"],
  ["Politik", "ð£ï¸"],
  ["Sport", "â½ï¸"],
  ["Tech", "ð±"],
  ["Opinion", "ð"],
  ["Perspektiv pÃ¥ vÃ¤rlden", "ð"],
  ["Innovation & framtid", "ð®"],
]);
