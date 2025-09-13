import { hbsTemplatePath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';
import { weaponSummaryPartialName } from './weaponSheet.mjs';
import './weaponSheet.scss';

const hbsPath = (file: string) => `${hbsTemplatePath}/entities/items/weapon/sheet/${file}`;

const partials = [
  weaponSummaryPartialName,
];

partials.forEach(partialName => registerPartial(hbsPath(`${partialName}.hbs`), partialName));

export { WeaponSheet } from './weaponSheet.mjs';
export type {
  WeaponSheetConfig,
  WeaponSheetRenderContext,
  WeaponSheetPartialsList,
} from './weaponSheet.mjs';
