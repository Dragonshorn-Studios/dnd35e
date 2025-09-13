import { hbsTemplatePath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';
import { itemHeaderPartialName } from './ItemSheetDnd35e.mjs';
import './itemSheet.scss';


const hbsPath = (file: string) => `${hbsTemplatePath}/entities/items/baseItem/sheet/${file}`;

const partials = [
  itemHeaderPartialName,
];

partials.forEach(partialName => registerPartial(hbsPath(`${partialName}.hbs`), partialName));

export { ItemSheetDnd35e } from './ItemSheetDnd35e.mjs';

export type {
  ItemSheetPartialsList,
  ItemSheetDnd35eConfig,
  ItemSheetDnd35eRenderContext,
} from './ItemSheetDnd35e.mjs';
