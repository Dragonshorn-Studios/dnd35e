import { ItemDnd35e } from '@items/baseItem/index.mjs';
import { WeaponSystemData } from './index.mjs';
import { applyPhysicalRuntime } from '@items/components/Physical/index.mjs';

const weaponItemType = 'weapon'; 
type WeaponItemType = typeof weaponItemType;

class Weapon extends ItemDnd35e<WeaponItemType> {
  declare system: WeaponSystemData;
  declare type: WeaponItemType;

  override prepareBaseData(): void {
    super.prepareBaseData();
    applyPhysicalRuntime(this);
  }
  // This needs to go to equippable
  // get equippedStatusLabel() {
  //   if (!this.parent) {
  //     return '';
  //   }
    
  //   return this.system.isEquipped
  //     ? 'D35E.Equipped'
  //     : 'D35E.NotEquipped';
  // }
}

export {
  Weapon,
  weaponItemType,
};

export type { WeaponItemType };
