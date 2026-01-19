import { ItemDnd35e } from "@items/baseItem/index.mjs";
import { IdentifiableItemSystemData } from "./index.mjs";
import { ItemType } from "@items/index.mjs";


interface IdentifiableItem extends Omit<ItemDnd35e<ItemType>, "system"> {
  system: IdentifiableItemSystemData;

  get unidentifiedDisplayName(): string;
  get identifiedDisplayName(): string;
};

// function IdentifiableItemMixin<TBase extends ConstructorOf<ItemDnd35e>> (Base: TBase) {
// function IdentifiableItemMixin<TBase extends AbstractConstructorOf<AnyItemDnD35e>>(Base: TBase) {
//   abstract class IdentifiableItem extends Base {
//     

//     declare system: IdentifiableItemSystemData;
//     declare readonly _source: IdentifiableItemSource;
//   };

//   return IdentifiableItem;
// };

// interface IsIdentifiableItem<TSystem extends IdentifiableItemSystemData> extends HasSystem<TSystem> {
//   identifiedDisplayName: string;
//   unidentifiedDisplayName: string;
//   displayName: string;
// };

// interface IdentifiableItem extends ReturnType<typeof IdentifiableItemMixin> {};

// const DefaultIdentifiableItem = IdentifiableItemMixin(ItemDnd35e);
// // type IdentifiableItemInstance = InstanceType<AnyItemDnD35e>;
// // type IdentifiableItemInstance = {
// //   [K in keyof InstanceType<typeof DefaultIdentifiableItem>]:
// //     InstanceType<typeof DefaultIdentifiableItem>[K]
// // };
// type IdentifiableItemInstance = typeof DefaultIdentifiableItem.prototype;

// export { IdentifiableItemMixin, DefaultIdentifiableItem };
export type { IdentifiableItem }
