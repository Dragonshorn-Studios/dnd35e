
const fields = foundry.data.fields;
const schema = {
  // unidentified stuff
  unidentifiedName: new fields.StringField(),
  isIdentified: new fields.BooleanField(),
};


export class WeaponModel extends foundry.abstract.TypeDataModel<typeof schema, never> {
  static defineSchema() {
    return schema;
  }

};