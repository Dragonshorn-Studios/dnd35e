import { hbsTemplatePath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';
import { materialDetailsPartialName } from './MaterialSheet.mjs';

const materialHbsPath = (file: string) => `${hbsTemplatePath}/entities/items/material/sheet/${file}`;
const partials = [
  materialDetailsPartialName,
];

partials.forEach(partialName => registerPartial(materialHbsPath(`${partialName}.hbs`), partialName));

export {
  MaterialSheet,
} from './MaterialSheet.mjs';
export type {
  MaterialSheetConfig,
  MaterialSheetPartialsList,
  MaterialSheetRenderContext,
} from './MaterialSheet.mjs';
