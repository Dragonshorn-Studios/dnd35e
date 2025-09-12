import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import { type DocumentConstructionContext } from '@common/_types.mjs';
import { ItemFlagsDnd35e, ItemSystemData } from './data/system.mjs';
import { replaceDataAttribute } from '@helpers/formulae/index.mjs';
import { ItemSourceDnd35e } from './data/index.mjs';
import { LogHelper } from '@helpers/logHelper.mjs';
// import { Dnd35eConfig } from '@constants/config/index.mjs';

// export class Dnd35eItem<SubType extends Item.SubType = Item.SubType> extends Item<SubType> {
//   extensionMap: Map<string, string>;

//   constructor(...args: Item.ConstructorArgs) {
//     super(...args);

//     this.extensionMap = new Map();
//   }
// };
class ItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends foundry.documents.Item<TParent> {
  override prepareBaseData (): void {
    super.prepareBaseData();

    this.system = this.system || this._createFreshSystemData();
  }

  _createFreshSystemData (): ItemSystemData {
    return {
      description: { value: '' },
      version: CONFIG.Dnd35e.VERSION,
      isNameFromFormula: false,
      isPsionic: false,
      isEpic: false,
    };
  }

  get displayName (): string {
    return this.system.isNameFromFormula
      ? replaceDataAttribute(this.system.nameFormula, this)
      : this.name;
  }

  declare flags: ItemFlagsDnd35e;
  declare system: ItemSystemData;
  declare readonly _source: ItemSourceDnd35e;
}

// interface ItemDnd35e<TParent extends ActorDnd35e | null = ActorDnd35e | null> extends Item<TParent> {
//     // constructor: typeof ItemDnd35e;
//     flags: ItemFlagsDnd35e;
//     // readonly _source: ItemSource;
//     system: ItemSystemData;
//     readonly _source: ItemSourceDnd35e;

//     // get sheet(): ItemSheetDnd35e<this>;
// }

const ItemProxyDnd35e = new Proxy(ItemDnd35e, {
  construct (
    _target,
    args: [source: PreCreate<ItemSourceDnd35e>, context?: DocumentConstructionContext<ActorDnd35e | null>],
  ) {
    const [source] = args;
    const type = source?.type;
    const ItemClass = CONFIG.Dnd35e.item.documentClasses[type] as unknown as typeof ItemDnd35e;
    // const ItemClass: typeof ItemDnd35e = CONFIG.Dnd35e.item.documentClasses[type];
    if (!ItemClass) {
      LogHelper.error(`Item type ${type} does not exist or is not properly supported`);
    }
    return new ItemClass(...args);
  },
});

export { ItemDnd35e, ItemProxyDnd35e };
