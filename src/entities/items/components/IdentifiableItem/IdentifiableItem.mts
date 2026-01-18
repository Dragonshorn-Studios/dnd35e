import { replaceDataAttribute } from "@helpers/formulae/index.mjs";
import { AnyItemDnD35e, ItemDnd35e, ItemDnd35eInstance } from "@items/baseItem/index.mjs";
import { IdentifiableItemSource, IdentifiableItemSystemData } from "./index.mjs";

// function IdentifiableItemMixin<TBase extends ConstructorOf<ItemDnd35e>> (Base: TBase) {
function IdentifiableItemMixin<TBase extends AbstractConstructorOf<AnyItemDnD35e>>(Base: TBase) {
  abstract class IdentifiableItem extends Base {
    get unidentifiedDisplayName (): string {
      const {
        unidentifiedInfo: {
          unidentifiedNameFormula,
          isUnidentifiedNameFromFormula,
          unidentifiedName,
        } = {},
      } = this.system;

      return unidentifiedNameFormula && isUnidentifiedNameFromFormula
        ? replaceDataAttribute(unidentifiedNameFormula || '', this)
        : unidentifiedName ?? '';
    }

    get identifiedDisplayName (): string {
      return super.displayName;
    }

    override get displayName (): string {
      const identifiedName = super.displayName;
      const {
        isIdentifiable,
        unidentifiedInfo: {
          isIdentified = false,
        } = {},
      } = this.system;

      return !isIdentifiable || isIdentified
        ? identifiedName
        : this.unidentifiedDisplayName;
    }

    override _createFreshSystemData(): IdentifiableItemSystemData {
      return {
        ...super._createFreshSystemData(),
        isIdentifiable: false,
        unidentifiedInfo: {
          unidentifiedName: '',
          unidentifiedDescription: '',
          unidentifiedPrice: null,
          isIdentified: false,
          unidentifiedNameFormula: null,
          isUnidentifiedNameFromFormula: false,
        },
      };
    }

    declare system: IdentifiableItemSystemData;
    declare readonly _source: IdentifiableItemSource;
  };

  return IdentifiableItem;
};

// interface IsIdentifiableItem<TSystem extends IdentifiableItemSystemData> extends HasSystem<TSystem> {
//   identifiedDisplayName: string;
//   unidentifiedDisplayName: string;
//   displayName: string;
// };

// interface IdentifiableItem extends ReturnType<typeof IdentifiableItemMixin> {};

const DefaultIdentifiableItem = IdentifiableItemMixin(ItemDnd35e);
// type IdentifiableItemInstance = InstanceType<AnyItemDnD35e>;
// type IdentifiableItemInstance = {
//   [K in keyof InstanceType<typeof DefaultIdentifiableItem>]:
//     InstanceType<typeof DefaultIdentifiableItem>[K]
// };
type IdentifiableItemInstance = typeof DefaultIdentifiableItem.prototype;

export { IdentifiableItemMixin, DefaultIdentifiableItem };
export type { IdentifiableItemInstance }
