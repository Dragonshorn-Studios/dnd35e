import { ItemDnd35e } from '@items/baseItem/index.mjs';
import { IdentifiableItemSystemData } from './system.mjs';
import { HasSystem } from '@helpers/HasSystem.mjs';
import { replaceDataAttribute } from '@helpers/formulae/index.mjs';

interface IsIdentifiableItem<TSystem extends IdentifiableItemSystemData> extends HasSystem<TSystem> {
  identifiedName: string;
}

const getIdentifiableDisplayName = <
  TSystem extends IdentifiableItemSystemData,
  TItem extends ItemDnd35e & IsIdentifiableItem<TSystem>
> (item: TItem) => {
  const {
    isIdentifiable,
    unidentifiedInfo: {
      isIdentified,
    } = {},
  } = item.system;

  return !isIdentifiable || isIdentified
    ? item.identifiedName
    : getUnidentifiedDisplayName(item);
};

const getUnidentifiedDisplayName = <
  TSystem extends IdentifiableItemSystemData,
  TItem extends ItemDnd35e & HasSystem<TSystem>
> (item: TItem) => {
  const {
    unidentifiedInfo: {
      unidentifiedNameFormula,
      isUnidentifiedNameFromFormula,
      unidentifiedName,
    } = {},
  } = item.system;

  return unidentifiedNameFormula && isUnidentifiedNameFromFormula
    ? replaceDataAttribute(item.system.unidentifiedInfo?.unidentifiedNameFormula, item)
    : unidentifiedName ?? '';
};

const createIdentifiableSystemData = () => ({
  isIdentifiable: false,
  unidentifiedInfo: {
    unidentifiedName: '',
    unidentifiedDescription: '',
    unidentifiedPrice: null,
    isIdentified: false,
    unidentifiedNameFormula: null,
    isUnidentifiedNameFromFormula: false,
  },
});

// function IdentifiableItemMixin<
//     TSystem extends IdentifiableItemSystemData,
//     TParent extends ActorDnd35e,
//     TBase extends ConstructorOf<ItemDnd35e<TParent>>
// > (Base: TBase) {
//   return class extends Base {
//     protected get _identifiableSys(): TSystem {
//       return (this as unknown as HasSystem<TSystem>).system;
//     }

//     override get displayName (): string {
//       const identifiedName = super.displayName;
//       if (!this._identifiableSys.isIdentifiable || this._identifiableSys.unidentifiedInfo?.isIdentified) {
//         return identifiedName;
//       }

//       const unidentifiedName = this._identifiableSys.unidentifiedInfo?.unidentifiedNameFormula && this._identifiableSys.unidentifiedInfo?.usesUnidentifiedNameFormula
//         ? replaceDataAttribute(this._identifiableSys?.unidentifiedInfo?.unidentifiedNameFormula, this)
//         : this._identifiableSys.unidentifiedInfo?.unidentifiedName ?? '';
//       return unidentifiedName;
//     }

//     override _createFreshSystemData(): IdentifiableItemSystemData & ItemSystemData {
//       return {
//         ...super._createFreshSystemData(),
//         isIdentifiable: false,
//         unidentifiedInfo: {
//           unidentifiedName: '',
//           unidentifiedDescription: '',
//           unidentifiedPrice: null,
//           isIdentified: false,
//           unidentifiedNameFormula: null,
//           usesUnidentifiedNameFormula: false,
//         },
//       };
//     }
//   };
//   // return IdentifiableItem;
// };

export {
  getIdentifiableDisplayName,
  createIdentifiableSystemData,
  getUnidentifiedDisplayName,
};
