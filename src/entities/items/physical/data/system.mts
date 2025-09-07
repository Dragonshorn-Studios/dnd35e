import { Size } from '@constants/sizes.mjs';
import { ItemSystemData, ItemSystemSource } from '@items/baseItem/index.mjs';
import { IdentifiableItemSource, IdentifiableItemSystemData } from '@items/components/IdentifiableItem/index.mjs';

interface PhysicalSystemSource extends ItemSystemSource, IdentifiableItemSource {
  quantity: number;
  weight: number | null;
  isWeightlessInContainer: boolean;
  isWeightlessWhenCarried: boolean;
  isCarried: boolean;
  size: Size;
  // Price
  price: number;
  resalePrice: number | null;
  brokenResalePrice: number | null;
  isFullResalePrice: boolean;
  // Container
  containerId: string | null;
};

type PhysicalSystemData = PhysicalSystemSource & ItemSystemData & IdentifiableItemSystemData;

// type PhysicalItemLabelTypes = 'carried' | 'identified';

// type PhysicalItemLabels = {
//   [Key in PhysicalItemLabelTypes]: string;
// };

export type {
  PhysicalSystemSource,
  PhysicalSystemData,
  // PhysicalItemLabels,
};
