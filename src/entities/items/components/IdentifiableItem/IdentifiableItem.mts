import { ActorTypes } from "@actors/index.mjs";
import { IdentifiableItemSystemDataCore } from "./index.mjs";
import { replaceDataAttribute } from "@helpers/formulae/index.mjs";
import { ItemDnd35e } from "@items/baseItem/index.mjs";

type IdentifiableItemSystemData<
  TItem extends ItemDnd35e
  // TItem extends ItemDnd35e<TActor> = ItemDnd35e<TActor>
> = IdentifiableItemSystemDataCore & TItem['system'];

function IdentifiableItemMixin<
  TParent extends ActorTypes = ActorTypes,
  TItem extends ItemDnd35e<TParent> = ItemDnd35e<TParent>,
  TBase extends SubclassOf<typeof ItemDnd35e<TParent>>
    = SubclassOf<typeof ItemDnd35e<TParent>>
>(Base: TBase) {
  type MergedSystemData = IdentifiableItemSystemData<TItem>;

  abstract class IdentifiableItem extends Base {
    constructor(...args: any[]) {
      super(...args);
    }

    declare system: MergedSystemData;

    override get displayName (): string {
      return this._getIdentifiableDisplayName();
    }

    get identifiedDisplayName (): string {
      return super.displayName;
    }

    get unidentifiedDisplayName (): string {
      return this._getUnidentifiedDisplayName();
    }

    override _createFreshSystemData(): MergedSystemData {
      const superSchema = super._createFreshSystemData();
      return {
        ...superSchema,
        isIdentifiable: false,
        unidentifiedInfo: {
          unidentifiedName: '',
          unidentifiedDescription: '',
          unidentifiedPrice: null,
          isIdentified: false,
          unidentifiedNameFormula: null,
          isUnidentifiedNameFromFormula: false,
        },
      } satisfies MergedSystemData ;
    }

    // Add identifiable item properties and methods here
    _getIdentifiableDisplayName = () => {
      const {
        isIdentifiable,
        unidentifiedInfo: {
          isIdentified,
        } = {},
      } = this.system;

      return !isIdentifiable || isIdentified
        ? this.identifiedDisplayName
        : this._getUnidentifiedDisplayName();
    }

    _getUnidentifiedDisplayName = () => {
      const {
        unidentifiedInfo: {
          unidentifiedNameFormula,
          isUnidentifiedNameFromFormula,
          unidentifiedName,
        } = {},
      } = this.system;

      return unidentifiedNameFormula && isUnidentifiedNameFromFormula
        ? replaceDataAttribute(this.system.unidentifiedInfo?.unidentifiedNameFormula, this)
        : unidentifiedName ?? '';
    };
  };

  return IdentifiableItem;
}


// type IdentifiableItemConstructor<
//   TActor extends ActorDnd35e | null,
//   TBase extends ItemDnd35eConstructor<TActor> = ItemDnd35eConstructor<TActor>
// > = ReturnType<typeof IdentifiableItemMixin<TActor, TBase>>
//   & StaticSide<TBase>;

export { IdentifiableItemMixin };
export type { IdentifiableItemSystemData };