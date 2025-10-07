import { hbsTemplatePath } from '@constants/paths.mjs';
import {
  IdentifiableItemSheetMixin,
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
} from './IdentifiableItemSheet.mjs';
import { registerPartial } from '@helpers/display.mjs';

const hbsPath = (file: string) => `${hbsTemplatePath}/entities/items/components/IdentifiableItem/sheet/${file}`;

const partials = [
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
];

partials.forEach(partialName => registerPartial(hbsPath(`${partialName}.hbs`), partialName));

export {
  IdentifiableItemSheetMixin,
  identifiableHeaderPartialName,
  identifiableBannerPartialName,
  identifiableDescriptionPartialName,
  identifiableNameConfigPartialName,
};

export type {
  IdentifiableItemRenderContext,
  IdentifiableItemPartialsList,
  IdentifiableItemContextEnrichedTexts,
} from './IdentifiableItemSheet.mjs';