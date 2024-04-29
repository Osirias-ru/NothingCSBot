import { ILocale } from "./locale.js";

export const rarityChancesMap = new Map([
  [0, "ARMY"],
  [80, "ARMY_ST"],
  [88, "ILLEGAL"],
  [96.4, "ILLEGAL_ST"],
  [98.576, "CLASSIFIED"],
  [99.64, "CLASSIFIED_ST"],
  [99.97, "SECRET"],
  [100, "SECRET_ST"],
]);

export const itemRarities = [
  "ARMY",
  "ARMY_ST",
  "ILLEGAL",
  "ILLEGAL_ST",
  "CLASSIFIED",
  "CLASSIFIED_ST",
  "SECRET",
  "SECRET_ST",
];

export interface IUserInventoryItem {
  id: string;
  name: Array<ILocale>;
  description?: Array<ILocale>;
  price: number;
  rarity: string;
  group_drop_chance: number;
  file_id?: string;
}
