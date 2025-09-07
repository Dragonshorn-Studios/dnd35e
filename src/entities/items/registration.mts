import { registerCommon } from '@entities/common/index.mjs';
import { ItemProxyDnd35e } from './baseItem/index.mjs';
import { MaterialSystemModel, MaterialSheet } from './material/index.mjs';
import { WeaponSystemModel, WeaponSheet } from './weapon/index.mjs';
import ItemSheet from '@client/appv1/sheets/item-sheet.mjs';
import Hooks from '@client/helpers/hooks.mjs';

export const registerItems = async () => {
  await registerCommon();
  Hooks.once('init', () => {
    CONFIG.Item.documentClass = ItemProxyDnd35e;
    Object.assign(CONFIG.Item.dataModels, {
      weapon: WeaponSystemModel,
      material: MaterialSystemModel,
    });
  });
};

export const registerSheets = async () => {
  fd.collections.Items.unregisterSheet('core', ItemSheet);
  const itemSheets = [
    ['material', MaterialSheet],
    ['weapon', WeaponSheet],
  ] as const;

  for (const [type, Sheet] of itemSheets) {
    fd.collections.Items.registerSheet('dnd35e', Sheet, {
      types: [type],
      makeDefault: true,
    });
  }
};
