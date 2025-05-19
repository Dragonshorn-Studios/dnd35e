export class Dnd35eItem extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      description: new fields.HTMLField({required: false, blank: true, initial: ""}),
      steps: new fields.ArrayField(new fields.StringField())
    };
  }
}