import { IdentifiableItemSystemModel } from "@items/components/IdentifiableItem/index.mjs";
import { MaterialDnd35e } from "../material.mjs";
import { MaterialSystemSchema } from "./MaterialSystemSchema.mjs";
import { requiredBooleanField, requiredNumberField } from "@helpers/fieldBuilders.mjs";

class MaterialSystemModel extends IdentifiableItemSystemModel<MaterialDnd35e, MaterialSystemSchema> {
  static override defineSchema () {
    return {
      ...super.defineSchema(),

      priceDifference: requiredNumberField(0),
      magicEquivalent: requiredNumberField(0),
      bonusHardness: requiredNumberField(0),
      bonusHpPerInch: requiredNumberField(0),
      isAlchemicalSilverEquivalent: requiredBooleanField(false),
      isAdamantineEquivalent: requiredBooleanField(false),
      isColdIronEquivalent: requiredBooleanField(false),
    };
  }
}

export { MaterialSystemModel };