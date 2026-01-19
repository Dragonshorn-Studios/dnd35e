import {
  nullableOptionalStringField,
  optionalStringField,
  requiredBooleanField,
  requiredStringField
} from "@helpers/fieldBuilders.mjs";
import type { ItemSystemSchema } from "./ItemSystemSchema.mjs";

const {
  HTMLField,
  SchemaField,
} = foundry.data.fields;

abstract class ItemSystemModelBase extends foundry.abstract.TypeDataModel<
  foundry.documents.Item,
  foundry.abstract.DataSchema
> {
  declare parent: foundry.documents.Item;

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
}

export {
  ItemSystemModelBase
};

export type ItemSchema = ReturnType<typeof ItemSystemModelBase.defineSchema>;
// export type BaseModelData = BaseSystemData;
