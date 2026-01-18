import { useItemSheetStore } from "@items/baseItem/index.mjs";
import type { PhysicalItemSheetRenderContext } from "./index.mjs";
import { useIdentifiableStore } from "@items/components/IdentifiableItem/index.mjs";

const usePhysicalItemStore = (context: PhysicalItemSheetRenderContext) => {
  const baseStore = useItemSheetStore(context);
  baseStore.setItemType('D35E.PhysicalItem');
  const identifiableStore = useIdentifiableStore(context);

  // const state = reactive({
  //   document: context.document as PhysicalItemDnd35e,
  // });
  // const document = computed(() => state.document);

  return  {
    ...baseStore,
    ...identifiableStore,
    //document,
  };
};

export { usePhysicalItemStore };
export type PhysicalItemSheetStore = ReturnType<typeof usePhysicalItemStore>;
