import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import { ItemDnd35e } from '@items/baseItem/index.mjs';
// import { PhysicalSystemData } from './index.mjs';
import { IdentifiableItem } from '../IdentifiableItem/IdentifiableItem.mjs';
import { DamagableItem } from '../Damagable/DamagableItem.mjs';

type PhysicalItem = IdentifiableItem & DamagableItem;

// abstract class PhysicalItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends ItemDnd35e<TParent> {
//   declare system: PhysicalSystemData;

//   // when and where are we calling this?
//   override prepareBaseData (): void {
//     super.prepareBaseData();

//     // Ensure the system data is initialized
//     //this.system = this.system || this._createFreshSystemData();
//   }

  // override _createFreshSystemData (): PhysicalSystemData {
  //   return {
  //     ...super._createFreshSystemData(),
  //     ...createIdentifiableSystemData(),
  //     quantity: 1,
  //     weight: 0,
  //     isWeightlessInContainer: false,
  //     isWeightlessWhenCarried: false,
  //     isCarried: false,
  //     size: 'tiny',
  //     price: 0,
  //     resalePrice: null,
  //     brokenResalePrice: null,
  //     isFullResalePrice: false,
  //     containerId: null,
  //   };
  // }

  // override get displayName (): string {
  //   return getIdentifiableDisplayName(this);
  // }

  // get identifiedDisplayName (): string {
  //   return super.displayName;
  // }

  // get unidentifiedDisplayName (): string {
  //   return getUnidentifiedDisplayName(this);
  // }
// }

// export { PhysicalItemDnd35e };

export type { PhysicalItem };
