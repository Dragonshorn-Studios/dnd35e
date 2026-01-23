import type {
  DamagableItemSystemSource,
  DamagableItemSystemData,
} from './data/index.mjs';
import type {
  DamagableItemSourceProps,
  DamagableItemSource,
} from './DamagableItem.mjs';

import {
  applyDamagableSchema,
} from './data/index.mjs';
import {
  applyDamagableRuntime,
} from './DamagableItem.mjs';

export type {
  DamagableItemSystemSource,
  DamagableItemSystemData,
  DamagableItemSourceProps,
  DamagableItemSource,
};

export {
  applyDamagableSchema,
  applyDamagableRuntime,
};