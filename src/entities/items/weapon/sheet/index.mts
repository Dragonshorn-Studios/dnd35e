import { systemPath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';

const localPath = (file: string) => `${systemPath}entities/common/templates/${file}`;

export const weaponSummaryPartialName = 'weaponSummary';

const partials = [
  weaponSummaryPartialName,
];

await Promise.all(
  partials.map(partialName => registerPartial(localPath(`${partialName}.hbs`), partialName)),
);

export { WeaponSheet } from './weaponSheet.mjs';
export type {
  WeaponSheetConfig,
  WeaponSheetRenderContext,
  WeaponSheetPartialsList,
} from './weaponSheet.mjs';
