import { registerCommon } from '@entities/common/index.mjs';
import { ItemProxyDnd35e } from './baseItem/index.mjs';
import { MaterialSystemModel, MaterialSheet } from './material/index.mjs';
import { WeaponSystemModel, WeaponSheet } from './weapon/index.mjs';
import Hooks from '@client/helpers/hooks.mjs';
import ItemConfig from '@constants/config/item.mjs';
import { runPartialRegistration } from '@helpers/display.mjs';

const registerSheets = () => {
  foundry.documents.collections.Items.unregisterSheet('core', foundry.appv1.sheets.ItemSheet);
  const itemSheets = [
    ['material', MaterialSheet],
    ['weapon', WeaponSheet],
  ] as const;

  for (const [type, Sheet] of itemSheets) {
    foundry.documents.collections.Items.registerSheet('dnd35e', Sheet, {
      types: [type],
      makeDefault: true,
    });
  }
};

export const registerItems = () => {
  CONFIG.Dnd35e = {
    VERSION: '13.0.0-dev.1',
    item: ItemConfig,
  };


  Hooks.once('init', () => {
    CONFIG.Item.documentClass = ItemProxyDnd35e;
    Object.assign(CONFIG.Item.dataModels, {
      weapon: WeaponSystemModel,
      material: MaterialSystemModel,
    });
  });

  Hooks.once('setup', () => {
    registerCommon();
    runPartialRegistration();
    registerSheets();
  });
};
