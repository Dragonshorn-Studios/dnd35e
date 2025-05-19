
type DataSchema = foundry.data.fields.DataSchema;
import { AnyObject } from "fvtt-types/utils";
import Document = foundry.abstract.Document

class Dnd35eItemModel<
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

// class TypeDataModel<Schema extends DataSchema, 
// Parent extends Document.Any, 
// BaseData extends AnyObject = EmptyObject,
//  DerivedData extends AnyObject = EmptyObject>