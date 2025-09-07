import { systemPath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';

const localPath = (file: string) => `${systemPath}entities/items/baseItem/sheet/${file}`;

export const itemHeaderPartialName = 'itemHeader';

const partials = [
  itemHeaderPartialName,
];

await Promise.all(partials.map(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName)));

export { ItemSheetDnd35e } from './ItemSheetDnd35e.mjs';

export type {
  ItemSheetPartialsList,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
} from './ItemSheetDnd35e.mjs';
