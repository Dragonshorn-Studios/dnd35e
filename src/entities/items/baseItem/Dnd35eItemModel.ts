
type DataSchema = foundry.data.fields.DataSchema;
import { AnyObject } from "fvtt-types/utils";
import Document = foundry.abstract.Document

export class Dnd35eItemModel<
  Schema extends DataSchema,
  parent extends Document.Any,
  baseData extends AnyObject,
  derivedData extends AnyObject
> extends foundry.abstract.TypeDataModel<Schema, parent, baseData, derivedData> {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
    };
  }

  prepareDerivedData() {
    return super.prepareDerivedData();
  }
}