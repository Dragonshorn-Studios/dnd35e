
type DataSchema = foundry.data.fields.DataSchema;
import { AnyObject } from "fvtt-types/utils";
import Document = foundry.abstract.Document;

declare namespace ItemData {
  interface Schema extends DataSchema {
    // Currency
    goldValue: foundry.data.fields.NumberField;
    silverValue: foundry.data.fields.NumberField;
    // actions
    actionType: foundry.data.fields.StringField;
  }
}

export class Dnd35eItemModel extends foundry.abstract.TypeDataModel<ItemData.Schema, Item.Implementation> {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      goldValue: new fields.NumberField({
        required: true,
        default: 0,
        validate: (value) => {
          if (value < 0) throw new Error("Gold value cannot be negative");
          return true;
        },
      }),
      silverValue: new fields.NumberField({
        required: true,
        default: 0,
        validate: (value) => {
          if (value < 0) throw new Error("Silver value cannot be negative");
          return true;
        },
      }),
      actionType: new fields.StringField({
        required: false,
        default: "",
      }),
    };
  }
}

declare global {
  interface DataModelConfig {
    Item: {
      item: Dnd35eItemModel
    };
  }
}