import { systemPath } from '@constants/paths.mjs';
import { createIdentifiableSystemData, getIdentifiableDisplayName, getUnidentifiedDisplayName } from './item.mjs';
import { defineIdentifiableSchema, type IdentifiableItemSchema } from './model.mjs';
import { identifiableHeaderPartialName, type IdentifiableItemRenderContext } from './sheet.mjs';
import type { IdentifiableItemSource, IdentifiableItemSystemData } from './system.mjs';
import { registerPartial } from '@helpers/display.mjs';

const localPath = (file: string) => `${systemPath}src/entities/items/components/IdentifiableItem/${file}`;

const partials = [
  identifiableHeaderPartialName,
];

await Promise.all(
  partials.map(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName)),
);

export type {
  IdentifiableItemSource,
  IdentifiableItemSystemData,
  IdentifiableItemRenderContext,
  IdentifiableItemSchema,
};
export {
  getUnidentifiedDisplayName,
  createIdentifiableSystemData,
  getIdentifiableDisplayName,
  defineIdentifiableSchema,
  identifiableHeaderPartialName,
};
