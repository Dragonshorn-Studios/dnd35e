import { Size } from '@constants/sizes.mjs';

interface PhysicalSystemSource {
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

type PhysicalSystemData = PhysicalSystemSource;

// type PhysicalItemLabelTypes = 'carried' | 'identified';

// type PhysicalItemLabels = {
//   [Key in PhysicalItemLabelTypes]: string;
// };

export type {
  PhysicalSystemSource,
  PhysicalSystemData,
  // PhysicalItemLabels,
};
