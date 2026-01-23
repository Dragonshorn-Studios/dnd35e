import { usePhysicalItemStore } from "@items/components/Physical/index.mjs";
import { WeaponSheetRenderContext } from "../index.mjs";
import { reactive } from "vue";
import { useItemSheetStore } from "@items/baseItem/index.mjs";

const useWeaponStore = (context: WeaponSheetRenderContext) => {
  const baseStore = useItemSheetStore(context)
  const physicalStore = usePhysicalItemStore(context, baseStore);
  baseStore.setItemType('TYPES.Item.weapon');

  const state = reactive({
    document: context.document,
  });

  return {
    ...baseStore,
    ...physicalStore,
  };
};

export { useWeaponStore };
export type WeaponStore = ReturnType<typeof useWeaponStore>;
