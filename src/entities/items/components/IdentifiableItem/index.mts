import { hbsTemplatePath } from '@constants/paths.mjs';
import { createIdentifiableSystemData, getIdentifiableDisplayName, getUnidentifiedDisplayName } from './item.mjs';
import { defineIdentifiableSchema, type IdentifiableItemSchema } from './model.mjs';
import {
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
} from './sheet.mjs';
import type {
  IdentifiableItemContextEnrichedTexts,
  IdentifiableItemRenderContext,
  IdentifiableItemPartialsList,
} from './sheet.mts';
import type { IdentifiableItemSource, IdentifiableItemSystemData } from './system.mjs';
import { registerPartial } from '@helpers/display.mjs';
import './identifiableHeader.scss';


const hbsPath = (file: string) => `${hbsTemplatePath}/entities/items/components/IdentifiableItem/${file}`;

const partials = [
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
];

partials.forEach(partialName => registerPartial(hbsPath(`${partialName}.hbs`), partialName));

export type {
  IdentifiableItemSource,
  IdentifiableItemSystemData,
  IdentifiableItemRenderContext,
  IdentifiableItemSchema,
  IdentifiableItemPartialsList,
  IdentifiableItemContextEnrichedTexts,
};
export {
  getUnidentifiedDisplayName,
  createIdentifiableSystemData,
  getIdentifiableDisplayName,
  defineIdentifiableSchema,
  identifiableHeaderPartialName,
  identifiableDescriptionPartialName,
  identifiableBannerPartialName,
  identifiableNameConfigPartialName,
};
