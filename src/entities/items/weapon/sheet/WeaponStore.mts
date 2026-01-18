import { usePhysicalItemStore } from "@items/physical/sheet/PhysicalItemStore.mjs";
import { WeaponDnd35e } from "../index.mjs";
import { reactive } from "vue";

const useWeaponStore = (context: any) => {
  const baseStore = usePhysicalItemStore(context);
  baseStore.setItemType('TYPES.Item.weapon');

  const state = reactive({
    document: context.document as WeaponDnd35e,
  });

  return {
    ...baseStore,
    ...state,
  };
};

export { useWeaponStore };
export type WeaponStore = ReturnType<typeof useWeaponStore>;
