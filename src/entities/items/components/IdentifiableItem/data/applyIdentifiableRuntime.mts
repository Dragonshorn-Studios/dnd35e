import { replaceDataAttribute } from "@helpers/formulae/index.mjs";
import { IdentifiableItemSystemData } from "./index.mjs";
import { ItemDnd35e } from "@items/baseItem/index.mjs";
import { ItemType } from "@items/index.mjs";
import { IdentifiableItem } from "../IdentifiableItem.mjs";

const applyIdentifiableRuntime = (item: ItemDnd35e<ItemType>) => {
  Object.defineProperties(item, {
    unidentifiedDisplayName: {
      get() {
        const {
          unidentifiedInfo: {
            unidentifiedNameFormula,
            isUnidentifiedNameFromFormula,
            unidentifiedName,
          } = {},
        } = this.system as IdentifiableItemSystemData;

        return unidentifiedNameFormula && isUnidentifiedNameFromFormula
          ? replaceDataAttribute(unidentifiedNameFormula || '', this)
          : unidentifiedName ?? '';
      }
    },
    identifiedDisplayName: {
      get() {
        return item.displayName;
      }
    }
  })
};

const identifiableOverrides = {
  displayName: <T extends IdentifiableItem>(item: T): string => {
    const identifiedName = item.displayName;
    const {
      isIdentifiable,
      unidentifiedInfo: {
        isIdentified = false,
      } = {},
    } = item.system;

    return !isIdentifiable || isIdentified
      ? identifiedName
      : item.unidentifiedDisplayName;
  },
};

export {
  applyIdentifiableRuntime,
  identifiableOverrides,
};


// _createFreshSystemData(): IdentifiableItemSystemData {
//       return {
//         ...super._createFreshSystemData(),
//         isIdentifiable: false,
//         unidentifiedInfo: {
//           unidentifiedName: '',
//           unidentifiedDescription: '',
//           unidentifiedPrice: null,
//           isIdentified: false,
//           unidentifiedNameFormula: null,
//           isUnidentifiedNameFromFormula: false,
//         },
//       };
//     }