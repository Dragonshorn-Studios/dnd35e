import { computed, reactive } from "vue";
import { Material, MaterialDetails } from "../index.mjs";
import { useIdentifiableStore } from "@items/components/Identifiable/index.mjs";
import { ItemSheetTab, useItemSheetStore } from "@items/baseItem/index.mjs";

const getMaterialTabs = (): ItemSheetTab[] => [
    {
      id: 'material-details',
      // TODO find this actual label, like D35E.Name
      label: 'Details',
      component: MaterialDetails,
      order: 30,
    },
];

const useMaterialStore = (context: any) => {
  const baseStore = useItemSheetStore(context)
  baseStore.setItemType('TYPES.Item.material');
  const identifiableStore = useIdentifiableStore(context, baseStore);
  baseStore.tabs.tabActions.appendTabs(getMaterialTabs());

  const state = reactive({
    document: context.document as Material,
  });

  const materialGetters = {
    bonusHardness: computed(() => state.document.system.bonusHardness),
    bonusHpPerInch: computed(() => state.document.system.bonusHpPerInch),
    magicEquivalent: computed(() => state.document.system.magicEquivalent),
    isAlchemicalSilverEquivalent: computed(() => state.document.system.isAlchemicalSilverEquivalent),
    isAdamantineEquivalent: computed(() => state.document.system.isAdamantineEquivalent),
    isColdIronEquivalent: computed(() => state.document.system.isColdIronEquivalent),
  };

  return  {
    ...baseStore,
    ...identifiableStore,
    materialGetters,
  };
};

export { useMaterialStore };
export type MaterialStore = ReturnType<typeof useMaterialStore>;
