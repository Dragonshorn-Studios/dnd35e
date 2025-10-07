import { ItemSystemSource } from "@items/baseItem/index.mjs";

type MaterialSystemSource = ItemSystemSource & {
  priceDifference: number;
  magicEquivalent: number;
  bonusHardness: number;
  bonusHpPerInch: number,
  isAlchemicalSilverEquivalent: boolean,
  isAdamantineEquivalent: boolean,
  isColdIronEquivalent: boolean,
};

type MaterialSystemData = MaterialSystemSource;

export type {
  MaterialSystemData,
  MaterialSystemSource,
};
