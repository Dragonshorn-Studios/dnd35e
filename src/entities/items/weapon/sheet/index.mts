import { systemPath } from '@constants/paths.mjs';
import { registerPartial } from '@helpers/display.mjs';
import { weaponSummaryPartialName } from './weaponSheet.mjs';

const localPath = (file: string) => `${systemPath}src/entities/items/weapon/sheet/${file}`;

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
