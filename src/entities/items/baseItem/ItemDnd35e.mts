import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';
import type { DocumentConstructionContext } from '@common/_types.mjs';
import { replaceDataAttribute } from '@helpers/formulae/index.mjs';
import { LogHelper } from '@helpers/logHelper.mjs';
import { ITEM_TYPES, ItemType } from '@items/itemTypes.mjs';
import { ItemFlagsDnd35e, ItemSourceDnd35e, ItemSystemData } from './index.mjs';

class ItemDnd35e<
  TItemType extends ItemType = ItemType,
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
> extends foundry.documents.Item<TParent> {
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

  declare flags: ItemFlagsDnd35e;
  declare system: ItemSystemData;
  declare _source: ItemSourceDnd35e<TItemType>;
}

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
      LogHelper.error(`Item type ${type} does not exist or is not properly supported for ItemProxyDnd35e`);
    }
    return new ItemClass(...args);
  },
});

type ItemDnd35eInstance = InstanceType<typeof ItemDnd35e>;
type AnyItemDnD35e = ItemDnd35e<ItemType, ActorDnd35e | null>;

export { ItemDnd35e, ItemProxyDnd35e, ItemDnd35eInstance, AnyItemDnD35e };
