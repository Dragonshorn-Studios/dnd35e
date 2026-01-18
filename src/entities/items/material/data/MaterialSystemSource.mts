import { IdentifiableItemSystemSource } from "@items/components/IdentifiableItem/index.mjs";

interface MaterialSystemSource extends IdentifiableItemSystemSource {
  priceDifference: number;
  magicEquivalent: number;
  bonusHardness: number;
  bonusHpPerInch: number,
  isAlchemicalSilverEquivalent: boolean,
  isAdamantineEquivalent: boolean,
  isColdIronEquivalent: boolean,
};

export type { MaterialSystemSource };
