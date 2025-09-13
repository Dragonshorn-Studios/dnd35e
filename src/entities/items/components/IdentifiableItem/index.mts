import { hbsTemplatePath } from '@constants/paths.mjs';
import { createIdentifiableSystemData, getIdentifiableDisplayName, getUnidentifiedDisplayName } from './item.mjs';
import { defineIdentifiableSchema, type IdentifiableItemSchema } from './model.mjs';
import { identifiableHeaderPartialName, type IdentifiableItemRenderContext, type IdentifiableItemPartialsList } from './sheet.mjs';
import type { IdentifiableItemSource, IdentifiableItemSystemData } from './system.mjs';
import { registerPartial } from '@helpers/display.mjs';
import './identifiableHeader.scss';


const hbsPath = (file: string) => `${hbsTemplatePath}/entities/items/components/IdentifiableItem/${file}`;

const partials = [
  identifiableHeaderPartialName,
];

partials.forEach(partialName => registerPartial(hbsPath(`${partialName}.hbs`), partialName));

export type {
  IdentifiableItemSource,
  IdentifiableItemSystemData,
  IdentifiableItemRenderContext,
  IdentifiableItemSchema,
  IdentifiableItemPartialsList
};
export {
  getUnidentifiedDisplayName,
  createIdentifiableSystemData,
  getIdentifiableDisplayName,
  defineIdentifiableSchema,
  identifiableHeaderPartialName,
};
