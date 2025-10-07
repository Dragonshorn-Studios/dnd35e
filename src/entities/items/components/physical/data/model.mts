import { ItemDnd35e, ItemSystemModelConstructor, ItemSystemSchema } from '@items/baseItem/index.mjs';
import { optionalNumberField, optionalStringField, requiredBooleanField, requiredNumberField } from '@helpers/fieldBuilders.mjs';
import { Size, SIZES } from '@constants/sizes.mjs';
import type { fields as fieldsType } from '@common/data/_module.mjs';
import { PhysicalItemMixin } from '../PhysicalItemDnd35e.mjs';
import { ActorDnd35e } from '@actors/baseActor/ActorDnd35e.mjs';

const { fields } = foundry.data;

// Schema
type PhysicalItemSystemSchema = ItemSystemSchema & {
    quantity: fieldsType.NumberField<number, number, true, false, true>;
    weight: fieldsType.NumberField;
    isWeightlessWhenCarried: fieldsType.BooleanField;
    isWeightlessInContainer: fieldsType.BooleanField;
    isCarried: fieldsType.BooleanField;
    size: fieldsType.StringField<Size, Size, true, false, true>;

    // Price
    price: fieldsType.NumberField<number, number, true, false, true>;
    resalePrice: fieldsType.NumberField;
    brokenResalePrice: fieldsType.NumberField;
    isFullResalePrice: fieldsType.BooleanField;

    // Container
    containerId: fieldsType.StringField<string, string, false, false, true>;
}

function PhysicalItemSystemModelMixin<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends InstanceType<ReturnType<typeof PhysicalItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
    = InstanceType<ReturnType<typeof PhysicalItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
  TBase extends ItemSystemModelConstructor<TActor, TItem> = ItemSystemModelConstructor<TActor, TItem>
>(Base: TBase) {
  abstract class PhysicalItemSystemModel extends Base {
    static override defineSchema (): PhysicalItemSystemSchema {
      return {
        ...super.defineSchema(),

        // components

        // ...defineCursableSchema(),
        // ...defineDamagableItemSchema(),
        // ...defineChangesSchema(),
        // ...defineAlignmentSchema(),

        // Physical
        quantity: requiredNumberField(0),
        weight: optionalNumberField(),
        isWeightlessInContainer: requiredBooleanField(false),
        isWeightlessWhenCarried: requiredBooleanField(false),
        isCarried: requiredBooleanField(true),
        size: new fields.StringField<Size, Size, true, false, true>({ choices: SIZES, initial: 'tiny', required: true }),

        // Price
        price: requiredNumberField(0),
        resalePrice: optionalNumberField(),
        brokenResalePrice: optionalNumberField(),
        isFullResalePrice: requiredBooleanField(true),

        // Container
        containerId: optionalStringField(),
      };
    }
  }

  return PhysicalItemSystemModel;
};

type PhysicalItemSystemModelBase<
  TActor extends ActorDnd35e | null = ActorDnd35e | null,
  TItem extends InstanceType<ReturnType<typeof PhysicalItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>
   = InstanceType<ReturnType<typeof PhysicalItemMixin<TActor, ConstructorOf<ItemDnd35e<TActor>>>>>,
  TSchema extends PhysicalItemSystemSchema = PhysicalItemSystemSchema,
  TBase extends ItemSystemModelConstructor<TActor, TItem, TSchema> = ItemSystemModelConstructor<TActor, TItem, TSchema>
> = ReturnType<typeof PhysicalItemSystemModelMixin<TActor, TItem, TSchema, TBase>>;

export { PhysicalItemSystemModelMixin, };
export type {
  PhysicalItemSystemSchema,
  PhysicalItemSystemModelBase,
}
