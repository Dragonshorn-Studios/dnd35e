import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import { PhysicalSystemData } from './index.mjs';
import { ItemDnd35e } from '@items/baseItem/index.mjs';

const getLabel = (flag: boolean) => flag
  ? game.i18n.localize('D35E.Yes')
  : game.i18n.localize('D35E.No');

function PhysicalItemMixin<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TBase extends ConstructorOf<ItemDnd35e<TParent>> = ConstructorOf<ItemDnd35e<TParent>>
>(Base: TBase) {
  abstract class PhysicalItemDnd35e extends Base
  {
    declare system: PhysicalSystemData & InstanceType<TBase>['system'];

    // when and where are we calling this?
    // override prepareBaseData (): void {
    //   super.prepareBaseData();

    //   // Ensure the system data is initialized
    //   this.system = this.system || this._createFreshSystemData();
    // }

    override _createFreshSystemData () {
      return {
        ...super._createFreshSystemData(),
        quantity: 1,
        weight: 0,
        isWeightlessInContainer: false,
        isWeightlessWhenCarried: false,
        isCarried: false,
        size: 'tiny',
        price: 0,
        resalePrice: null,
        brokenResalePrice: null,
        isFullResalePrice: false,
        containerId: null,
      };
    }
  }

  return PhysicalItemDnd35e;
}

type PhysicalItemClass<
  TParent extends ActorDnd35e | null,
  TBase extends ConstructorOf<ItemDnd35e<TParent>>
> = ReturnType<typeof PhysicalItemMixin<TParent, TBase>>;

export { PhysicalItemMixin };
export type { PhysicalItemClass };
