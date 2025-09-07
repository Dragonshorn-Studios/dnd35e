import { BaseItemSourceDnd35e } from '@items/baseItem/index.mjs';
import { MaterialSystemModel, type MaterialSystemSchema } from './model.mjs';
import type {
  MaterialSystemData,
  MaterialSystemSource,
} from './system.mjs';

type MaterialSource = BaseItemSourceDnd35e<'Material', MaterialSystemSource>;

export {
  MaterialSystemModel,
};

export type {
  MaterialSource,
  MaterialSystemData,
  MaterialSystemSource,
  MaterialSystemSchema,
};
