import { ItemDescription, ItemFlagsDnd35e, ItemOrigin } from "@items/baseItem/data/system.mjs";
import type { fields as fieldsType } from '@common/data/_module.mjs';
import { ModelPropsFromSchema, SourceFromSchema } from "@common/data/fields.mjs";
import { ActorDnd35e } from "@actors/baseActor/ActorDnd35e.mjs";
import { ITEM_TYPES } from "@items/constants.mjs";
import { ItemType } from "@items/baseItem/index.mjs";


// Base Item

type ItemSystemSource = {
    version: string;
    uniqueId?: string;
    origin?: ItemOrigin;
    // Name
    isNameFromFormula: boolean;
    nameFormula?: string | null;
    // Description
    description: ItemDescription;
    isPsionic: boolean;
    isEpic: boolean;
};

interface ItemSystemData extends ItemSystemSource {};
// Description
type ItemDescriptionSchemaBase = {
    value: fieldsType.HTMLField<string, string, true, false, true>;
    // chat: fields.StringField<string, string, false, false, true>;
};

type ItemDescriptionSchema = fieldsType.SchemaField<
    ItemDescriptionSchemaBase,
    SourceFromSchema<ItemDescriptionSchemaBase>,
    ModelPropsFromSchema<ItemDescriptionSchemaBase>,
    true, false, true
>;
type ItemOriginShemaBase = {
    originId: fieldsType.StringField<string, string, true, false, true>;
    originVersion: fieldsType.StringField<string, string, true, false, true>;
    originPack: fieldsType.StringField<string, string, true, false, true>;
};

type ItemOriginSchema = fieldsType.SchemaField<ItemOriginShemaBase, SourceFromSchema<ItemOriginShemaBase>, ModelPropsFromSchema<ItemOriginShemaBase>, false, true, false>;


type ItemSystemSchema = {
    version: fieldsType.StringField<string, string, true, false, true>;
    uniqueId?: fieldsType.StringField<string, string, false, false, true>;
    origin: ItemOriginSchema;
    description: ItemDescriptionSchema;
    // Name
    isNameFromFormula: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    nameFormula: fieldsType.StringField<string, string, false, true, true>;

    isPsionic: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    isEpic: fieldsType.BooleanField<boolean, boolean, true, false, true>;
};
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
    return this.name;
  }

  get localizedType (): string {
    return ITEM_TYPES[this.type as ItemType]
      ?? 'D35E.Item';
  }

  declare flags: ItemFlagsDnd35e;
  declare system: ItemSystemData;
}


abstract class ItemSystemModel<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TParent extends ItemDnd35e<TActor> = ItemDnd35e<TActor>,
  TSchema extends ItemSystemSchema = ItemSystemSchema,
> extends foundry.abstract.TypeDataModel<TParent, TSchema> {
  constructor(...args: any[]) {
    super(...args);
  }

  static override defineSchema (): ItemSystemSchema {
    return {} as ItemSystemSchema;
  }
}

export type Constructor<T = {}> = abstract new (...args: any[]) => T;
export type StaticSide<T> = Omit<T, 'prototype'>;

type ItemSystemModelConstructor<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends ItemDnd35e<TActor> = ItemDnd35e<TActor>,
  TSchema extends ItemSystemSchema = ItemSystemSchema
> = (abstract new (...args: any[]) => ItemSystemModel<TActor, TItem, TSchema>)
  & StaticSide<typeof ItemSystemModel>;

  // IdentifiableItem
type IdentifiableItemSource = {
    isIdentifiable: boolean;
    unidentifiedInfo?: {
        unidentifiedName: string;
        unidentifiedDescription: string;
        unidentifiedPrice: number | null;
        isIdentified: boolean;
        unidentifiedNameFormula?: string | null;
        isUnidentifiedNameFromFormula: boolean;
    };
};

type IdentifiableItemSystemData = IdentifiableItemSource;


type IdentifiableItemInfoSchemaBase = {
    unidentifiedName: fieldsType.StringField<string, string, false, false, true>;
    unidentifiedDescription: fieldsType.HTMLField;
    unidentifiedPrice: fieldsType.NumberField<number, number, true, true, false>;
    isIdentified: fieldsType.BooleanField;
    unidentifiedNameFormula?: fieldsType.StringField<string, string, false, true, true>;
    isUnidentifiedNameFromFormula: fieldsType.BooleanField<boolean, boolean, true, false, true>;
};

type IdentifiableItemSchema = ItemSystemSchema & {
    isIdentifiable: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    unidentifiedInfo?: fieldsType.SchemaField<
        IdentifiableItemInfoSchemaBase,
        SourceFromSchema<IdentifiableItemInfoSchemaBase>,
        ModelPropsFromSchema<IdentifiableItemInfoSchemaBase>,
        false, true, false
    >;
};

function IdentifiableItemSystemModelMixin<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
    = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
  TSchema extends IdentifiableItemSchema = IdentifiableItemSchema,
  TBase extends ItemSystemModelConstructor<TActor, TItem, TSchema> = ItemSystemModelConstructor<TActor, TItem, TSchema>
>(Base: TBase) {
  abstract class IdentifiableItemSystemModel extends Base {
    constructor(...args: any[]) {
      super(...args);
    }

    static override defineSchema(): IdentifiableItemSchema {
      return {} as IdentifiableItemSchema;
    }
  }

  return IdentifiableItemSystemModel;
};

type IdentifiableItemSystemModelBase<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
    = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
  TSchema extends IdentifiableItemSchema = IdentifiableItemSchema,
  TBase extends ItemSystemModelConstructor<TActor, TItem, TSchema> = ItemSystemModelConstructor<TActor, TItem, TSchema>
> = ReturnType<typeof IdentifiableItemSystemModelMixin<TActor, TItem, TSchema, TBase>>;

export type IdentifiableItemSystemModelConstructor<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
    = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
  TSchema extends IdentifiableItemSchema = IdentifiableItemSchema,
  TDoc extends IdentifiableItemSystemModelBase<TActor, TItem, TSchema, ItemSystemModelConstructor<TActor, TItem, TSchema>> = IdentifiableItemSystemModelBase<TActor, TItem, TSchema, ItemSystemModelConstructor<TActor, TItem, TSchema>>
> = abstract new (...args: any[]) => TDoc;


function IdentifiableItemMixin<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TBase extends ConstructorOf<ItemDnd35e<TParent>> = ConstructorOf<ItemDnd35e<TParent>>
>(Base: TBase) {
  abstract class IdentifiableItem extends Base {
    declare system: IdentifiableItemSystemData & InstanceType<TBase>['system'];

    override get displayName (): string {
      return this._getIdentifiableDisplayName();
    }

    get identifiedDisplayName (): string {
      return super.displayName;
    }

    get unidentifiedDisplayName (): string {
      return this._getUnidentifiedDisplayName();
    }

    override _createFreshSystemData(): IdentifiableItemSystemData & InstanceType<TBase>['system'] {
      return {
        ...super._createFreshSystemData(),
        isIdentifiable: false,
        unidentifiedInfo: {
          unidentifiedName: '',
          unidentifiedDescription: '',
          unidentifiedPrice: null,
          isIdentified: false,
          unidentifiedNameFormula: null,
          isUnidentifiedNameFromFormula: false,
        },
      };
    }

    // Add identifiable item properties and methods here
    _getIdentifiableDisplayName = () => {
      const {
        isIdentifiable,
        unidentifiedInfo: {
          isIdentified,
        } = {},
      } = this.system;

      return !isIdentifiable || isIdentified
        ? this.identifiedDisplayName
        : this._getUnidentifiedDisplayName();
    }

    _getUnidentifiedDisplayName = () => {
      const {
        unidentifiedInfo: {
          unidentifiedName,
        } = {},
      } = this.system;

      return unidentifiedName ?? '';
    };
  };

  return IdentifiableItem;
}

type IdentifiableItemClass<
  TParent extends ActorDnd35e | null,
  TBase extends ConstructorOf<ItemDnd35e<TParent>>
> = ReturnType<typeof IdentifiableItemMixin<TParent, TBase>>;

export type IdentifiableItemConstructor<
  TParent extends ActorDnd35e | null = ActorDnd35e | null,
  TDoc extends IdentifiableItemClass<TParent, ConstructorOf<ItemDnd35e<TParent>>> = IdentifiableItemClass<TParent, ConstructorOf<ItemDnd35e<TParent>>>
> = abstract new (...args: any[]) => TDoc;


// material
interface MaterialSystemSource extends ItemSystemSource, IdentifiableItemSource {
  priceDifference: number;
  magicEquivalent: number;
  bonusHardness: number;
  bonusHpPerInch: number,
  isAlchemicalSilverEquivalent: boolean,
  isAdamantineEquivalent: boolean,
  isColdIronEquivalent: boolean,
};

type MaterialSystemData = MaterialSystemSource & ItemSystemData & IdentifiableItemSystemData;

type MaterialSystemSchema = IdentifiableItemSchema & {
  priceDifference: fieldsType.NumberField<number, number, true, false, true>;
  magicEquivalent: fieldsType.NumberField<number, number, true, false, true>;
  bonusHardness: fieldsType.NumberField<number, number, true, false, true>;
  bonusHpPerInch: fieldsType.NumberField<number, number, true, false, true>,
  isAlchemicalSilverEquivalent: fieldsType.BooleanField,
  isAdamantineEquivalent: fieldsType.BooleanField,
  isColdIronEquivalent: fieldsType.BooleanField,
}

class MaterialDnd35e extends IdentifiableItemMixin(ItemDnd35e) {

  override _createFreshSystemData (): MaterialSystemData {
    return {
      ...super._createFreshSystemData(),
      bonusHardness: 0,
      bonusHpPerInch: 0,
      isAdamantineEquivalent: false,
      isAlchemicalSilverEquivalent: false,
      isColdIronEquivalent: false,
      priceDifference: 0,
      magicEquivalent: 0,
    };
  }
}

class MaterialSystemModel extends IdentifiableItemSystemModelMixin<
  ActorDnd35e | null,
  MaterialDnd35e,
  MaterialSystemSchema,
  ItemSystemModelConstructor<ActorDnd35e | null, MaterialDnd35e, MaterialSystemSchema>
>(ItemSystemModel) {
  static override defineSchema (): MaterialSystemSchema {
    const superSchema: IdentifiableItemSchema = super.defineSchema();
    return {
      ...superSchema,
    } as MaterialSystemSchema;
  }
}