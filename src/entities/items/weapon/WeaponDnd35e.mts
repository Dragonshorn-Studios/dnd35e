import { ActorDnd35e } from '../../actors/baseActor/ActorDnd35e.mjs';
import { PhysicalItemDnd35e } from '../physical/PhysicalItemDnd35e.mjs';
import { WeaponSystemData } from './data/index.mjs';

export class WeaponDnd35e<TActor extends ActorDnd35e | null = ActorDnd35e | null> extends PhysicalItemDnd35e<TActor> {
  declare system: WeaponSystemData;

  get equippedStatusLabel() {
    if (!this.parent) {
      return '';
    }
    
    return this.system.isEquipped
      ? 'D35E.Equipped'
      : 'D35E.NotEquipped';
  }
}
