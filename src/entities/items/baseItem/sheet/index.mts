import { systemPath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';
import { itemHeaderPartialName } from './ItemSheetDnd35e.mjs';

const localPath = (file: string) => `${systemPath}src/entities/items/baseItem/sheet/${file}`;

const partials = [
  itemHeaderPartialName,
];

partials.map(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName));

export { ItemSheetDnd35e } from './ItemSheetDnd35e.mjs';

export type {
  ItemSheetPartialsList,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
} from './ItemSheetDnd35e.mjs';
