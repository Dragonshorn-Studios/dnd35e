import { ItemDnd35e } from '../index.mjs';
import {
  nullableOptionalStringField,
  optionalStringField,
  requiredBooleanField,
  requiredStringField
} from '@helpers/fieldBuilders.mjs';
import { ItemSystemSchema } from './index.mjs';

const { 
  fields: {
    SchemaField,
    HTMLField,
  }
} = foundry.data;

abstract class ItemSystemModel<
  TParent extends ItemDnd35e = ItemDnd35e,
  TSchema extends ItemSystemSchema = ItemSystemSchema,
> extends foundry.abstract.TypeDataModel<TParent, TSchema> {
  // DB instructions to save ItemSystemSource - !!! ItemSystemSource and ItemSystemSchema must match !!!
  static override defineSchema (): ItemSystemSchema {
    const superSchema = super.defineSchema() as ItemSystemSchema;
    // System Base
    superSchema.version = requiredStringField('1.0.0');
    superSchema.uniqueId = optionalStringField();

    superSchema.origin = new SchemaField({
      originId: requiredStringField(),
      originVersion: requiredStringField(),
      originPack: requiredStringField(),
    });

    superSchema.nameFormula = nullableOptionalStringField();
    superSchema.isNameFromFormula = requiredBooleanField(false);
    superSchema.description = new SchemaField({
      value: new HTMLField(),
    });

    superSchema.isPsionic = requiredBooleanField();
    superSchema.isEpic = requiredBooleanField();
    return superSchema;
  }

  // use this to transfrom from ItemSystemSource to ItemSystemData
  override prepareDerivedData() {
    super.prepareDerivedData();
  }
}

export {
  ItemSystemModel,
};