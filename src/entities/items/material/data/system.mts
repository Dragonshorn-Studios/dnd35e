import { ItemSystemData, ItemSystemSource } from '@items/baseItem/index.mjs';
import { IdentifiableItemSource, IdentifiableItemSystemData } from '@items/components/IdentifiableItem/index.mjs';

interface MaterialSystemSource extends ItemSystemSource, IdentifiableItemSource {
  priceDifference: number;
  magicEquivalent: number;
  bonusHardness: number;
  bonusHpPerInch: number,
  isAlchemicalSilverEquivalent: boolean,
  isAdamantineEquivalent: boolean,
  isColdIronEquivalent: boolean,
};

type MaterialSystemData = MaterialSystemSource & ItemSystemData & IdentifiableItemSystemData;

export type {
  MaterialSystemData,
  MaterialSystemSource,
};
