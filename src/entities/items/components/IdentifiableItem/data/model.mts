import type { ModelPropsFromSchema, SourceFromSchema } from '@common/data/fields.mjs';
import { nullableOptionalStringField, optionalStringField, requiredBooleanField } from '@helpers/fieldBuilders.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';
import { ItemDnd35e, ItemSystemModel, ItemSystemModelConstructor, ItemSystemSchema } from '@items/baseItem/index.mjs';
import { IdentifiableItemMixin } from '../IdentifiableItem.mjs';
import { ActorTypes } from '@actors/index.mjs';

const { fields } = foundry.data;

type IdentifiableItemInfoSchemaBase = {
    unidentifiedName: fieldsType.StringField<string, string, false, false, true>;
    unidentifiedDescription: fieldsType.HTMLField;
    unidentifiedPrice: fieldsType.NumberField<number, number, true, true, false>;
    isIdentified: fieldsType.BooleanField;
    unidentifiedNameFormula?: fieldsType.StringField<string, string, false, true, true>;
    isUnidentifiedNameFromFormula: fieldsType.BooleanField<boolean, boolean, true, false, true>;
};

type IdentifiableItemSchema<
  TSchema extends ItemSystemSchema,
  TItem extends RequiredBase,
  TSystem extends typeof ItemSystemModel<TItem, TSchema>
> = {
    isIdentifiable: fieldsType.BooleanField<boolean, boolean, true, false, true>;
    unidentifiedInfo?: fieldsType.SchemaField<
        IdentifiableItemInfoSchemaBase,
        SourceFromSchema<IdentifiableItemInfoSchemaBase>,
        ModelPropsFromSchema<IdentifiableItemInfoSchemaBase>,
        false, true, false
    >;
} & ReturnType<TSystem['defineSchema']>

class RequiredBase extends IdentifiableItemMixin<ActorTypes, ItemDnd35e, SubclassOf<typeof ItemDnd35e<ActorTypes>>>(ItemDnd35e){}

function IdentifiableItemSystemModelMixin<
  TSchema extends ItemSystemSchema = ItemSystemSchema,
  TItem extends RequiredBase = RequiredBase,
  TSystem extends typeof ItemSystemModel<TItem, TSchema> = typeof ItemSystemModel<TItem, TSchema>,
  TBase extends ConstructorOf<ItemSystemModel<TItem, TSchema>>
    = ConstructorOf<ItemSystemModel<TItem, TSchema>>
>(Base: TBase) {
  type MergedModel = IdentifiableItemSchema<TSchema, TItem, TSystem>;

  abstract class IdentifiableItemSystemModel extends Base {
    static override defineSchema() {
      const superSchema = Base.defineSchema();
      return {
        ...superSchema,
        isIdentifiable: requiredBooleanField(false),
        unidentifiedInfo: new fields.SchemaField({
          unidentifiedName: optionalStringField(),
          unidentifiedDescription: new fields.HTMLField(),
          unidentifiedPrice: new fields.NumberField<number, number, true, true, false>({ required: true, nullable: true }),
          isIdentified: requiredBooleanField(false),
          unidentifiedNameFormula: nullableOptionalStringField(undefined),
          isUnidentifiedNameFromFormula: requiredBooleanField(false),
        }, { required: false, nullable: true }),
      } satisfies MergedModel;
    }
  }

  return IdentifiableItemSystemModel;
};


// type IsIdentifiableItem<TBase> = IdentifiableItemSchema & BaseSchemaOf<TBase>;
// type IdentifiableItemSystemModelConstructor<
//   TActor extends ActorDnd35e | null,
//   TSchema extends ItemSystemSchema,
//   TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
//   TBase extends ItemSystemModelConstructor<TActor, TItem, TSchema>
// > = ReturnType<typeof IdentifiableItemSystemModelMixin<TActor, TSchema, TItem, TBase>>
//   & StaticSide<TBase> & StaticSide<ReturnType<typeof IdentifiableItemSystemModelMixin<TActor, TSchema, TItem, TBase>>>;
  
// type IdentifiableItemDefineSchemaType<
//   TActor extends ActorDnd35e | null = ActorDnd35e | null,
//   // TItem extends ItemDnd35e<TActor> = ItemDnd35e<TActor>,
//   TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
//     = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
//   TSchema extends ItemSystemSchema = ItemSystemSchema
// > = IdentifiableItemSchema & BaseDefineSchemaType<TActor, TItem, TSchema>;


// type ItemSystemModelConstructor<
//   TActor extends ActorDnd35e | null = ActorDnd35e | null,
//   TItem extends ItemDnd35e<TActor> = ItemDnd35e<TActor>,
// > = (abstract new (...args: any[]) => ItemSystemModel<TActor, TItem>)
//   & StaticSide<typeof ItemSystemModel>;

// type IdentifiableItemSystemModelConstructor<
//   TActor extends ActorDnd35e | null = ActorDnd35e | null,
//   TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
//     = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
// > = (abstract new (...args: any[]) => ReturnType<typeof IdentifiableItemSystemModelMixin<TActor, TItem, ItemSystemModelConstructor<TActor, TItem>>>)
//   & StaticSide<typeof IdentifiableItemSystemModelMixin<TActor, TItem, ItemSystemModelConstructor<TActor, TItem>>>;
// type IdentifiableItemSystemModelBase<
//   TActor extends ActorDnd35e | null = ActorDnd35e | null,
//   TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
//     = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
//   TBase extends ItemSystemModelConstructor<TActor, TItem> = ItemSystemModelConstructor<TActor, TItem>
// > = ReturnType<typeof IdentifiableItemSystemModelMixin<TActor, TItem, TBase>>;

// export type IdentifiableItemSystemModelConstructor<
//   TActor extends ActorDnd35e | null = ActorDnd35e | null,
//   TItem extends InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
//     = InstanceType<ReturnType<typeof IdentifiableItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
//   TDoc extends IdentifiableItemSystemModelBase<TActor, TItem, ItemSystemModelConstructor<TActor, TItem>> = IdentifiableItemSystemModelBase<TActor, TItem, ItemSystemModelConstructor<TActor, TItem>>
// > = abstract new (...args: any[]) => TDoc;

export {
  IdentifiableItemSystemModelMixin,
};

export type {
  IdentifiableItemInfoSchemaBase,
  IdentifiableItemSchema,
};
