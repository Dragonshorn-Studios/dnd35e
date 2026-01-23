import { ItemSheetStore } from "@items/baseItem/index.mjs";
import type { PhysicalItemSheetRenderContext } from "./index.mjs";
import { useIdentifiableStore } from "@items/components/Identifiable/index.mjs";

const usePhysicalItemStore = (context: PhysicalItemSheetRenderContext, baseStore: ItemSheetStore) => {
  baseStore.setItemType('D35E.PhysicalItem');
  const identifiableStore = useIdentifiableStore(context, baseStore);

  // const state = reactive({
  //   document: context.document as PhysicalItemDnd35e,
  // });
  // const document = computed(() => state.document);

  return  {
    ...identifiableStore,
    //document,
  };
};

export { usePhysicalItemStore };
export type PhysicalItemSheetStore = ReturnType<typeof usePhysicalItemStore>;
