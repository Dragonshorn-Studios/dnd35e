import { usePhysicalItemStore } from "@items/physical/sheet/PhysicalItemStore.mjs";
import { reactive } from "vue";
import { MaterialDnd35e } from "../material.mjs";

const useMaterialStore = (context: any) => {
  const baseStore = usePhysicalItemStore(context);
  baseStore.setItemType('TYPES.Item.material');

  const state = reactive({
    document: context.document as MaterialDnd35e,
  });

  return  {
    ...baseStore,
  };
};

export { useMaterialStore };
export type MaterialStore = ReturnType<typeof useMaterialStore>;
