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

class RequiredBase extends IdentifiableItemMixin<
  ActorTypes,
  ItemDnd35e,
  ConstructorOf<ItemDnd35e<ActorTypes>>
>(ItemDnd35e){}

function IdentifiableItemSystemModelMixin<
  TSchema extends ItemSystemSchema = ItemSystemSchema,
  TItem extends RequiredBase = RequiredBase,
  TBase extends AbstractConstructorOf<ItemSystemModel<TItem, TSchema>> & typeof ItemSystemModel<TItem, TSchema>
    = AbstractConstructorOf<ItemSystemModel<TItem, TSchema>> & typeof ItemSystemModel<TItem, TSchema>
>(Base: TBase) {
  type MergedModel = IdentifiableItemSchema<TSchema, TItem, TBase>;

  abstract class IdentifiableItemSystemModel extends Base {
    static override defineSchema() {
      const superSchema = Base.defineSchema();
      return {
        ...superSchema as ReturnType<TBase["defineSchema"]>,
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

export {
  IdentifiableItemSystemModelMixin,
};

export type {
  IdentifiableItemInfoSchemaBase,
  IdentifiableItemSchema,
};
