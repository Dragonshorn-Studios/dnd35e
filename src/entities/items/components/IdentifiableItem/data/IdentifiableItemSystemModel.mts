import { ItemSystemModel } from "@items/baseItem/index.mjs";
import { IdentifiableItemSchema } from "./IdentifiableItemSchema.mjs";
import {
  nullableOptionalStringField,
  optionalHtmlField,
  optionalStringField,
  requiredBooleanField,
  requiredNullableNumberField
} from "@helpers/fieldBuilders.mjs";
import { IdentifiableItemInstance } from "../IdentifiableItem.mjs";
const { fields } = foundry.data;

abstract class IdentifiableItemSystemModel<
  TItem extends IdentifiableItemInstance = IdentifiableItemInstance,
  TSchema extends IdentifiableItemSchema = IdentifiableItemSchema,
> extends ItemSystemModel<TItem, TSchema> {
  static override defineSchema() {
    const superSchema = super.defineSchema() as IdentifiableItemSchema;
    superSchema.isIdentifiable = requiredBooleanField(false);
    superSchema.unidentifiedInfo = new fields.SchemaField({
      unidentifiedName: optionalStringField(),
      unidentifiedDescription: optionalHtmlField(),
      unidentifiedPrice: requiredNullableNumberField(),
      isIdentified: requiredBooleanField(false),
      unidentifiedNameFormula: nullableOptionalStringField(undefined),
      isUnidentifiedNameFromFormula: requiredBooleanField(false),
    }, { required: false, nullable: true });

    return superSchema;
  }
}

export { IdentifiableItemSystemModel };