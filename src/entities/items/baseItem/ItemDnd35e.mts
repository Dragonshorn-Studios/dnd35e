import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import { type DocumentConstructionContext } from '@common/_types.mjs';
import { ItemFlagsDnd35e, ItemSystemData } from './index.mjs';
import { replaceDataAttribute } from '@helpers/formulae/index.mjs';
import { ItemSourceDnd35e, ItemType } from './index.mjs';
import { LogHelper } from '@helpers/logHelper.mjs';
import { ITEM_TYPES } from '@items/constants.mjs';
import { StaticSide } from '@source/types.mjs';
import { ActorTypes } from '@actors/index.mjs';

class ItemDnd35e<
  TParent extends ActorTypes = ActorTypes,
> extends foundry.documents.Item<TParent> {
  constructor(...args: any[]) {
    super(...args);
  }

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

  get localizedType (): string {
    return ITEM_TYPES[this.type as ItemType]
      ?? 'D35E.Item';
  }

  declare parent: TParent;
  declare flags: ItemFlagsDnd35e;
  declare system: ItemSystemData;
  declare readonly _source: ItemSourceDnd35e;
}

type ItemDnd35eConstructor<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends ItemDnd35e<TParent> = ItemDnd35e<TParent>
> = (abstract new (...args: any[]) => TItem)
  & StaticSide<TItem>;

type BaseSystemDataType<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends ItemDnd35e<TParent> = ItemDnd35e<TParent>
> = ReturnType<TItem['_createFreshSystemData']>

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

export {
  ItemDnd35e,
  ItemProxyDnd35e,
};

export type {
  ItemDnd35eConstructor,
  BaseSystemDataType,
};
