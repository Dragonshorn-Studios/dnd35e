import { ItemDnd35e } from '@items/baseItem/index.mjs';
import { WeaponSystemData } from './index.mjs';
import { applyPhysicalRuntime } from '@items/components/Physical/index.mjs';

const weaponType = 'weapon'; 
type WeaponType = typeof weaponType;

export class WeaponDnd35e extends ItemDnd35e<WeaponType> {
  declare system: WeaponSystemData;
  declare type: WeaponType;

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
