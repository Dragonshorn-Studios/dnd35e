import type { ItemSheetStore, ItemSheetTab } from "@items/baseItem/index.mjs";
import { computed, reactive } from "vue";
import { IdentifiableNameConfig, type IdentifiableItemSheetRenderContext } from "./index.mjs";
import IdentifiableDescription from "./IdentifiableDescription.vue";

const createIdentifiableTabs = (): ItemSheetTab[] => [
    {
      id: 'description',
      label: 'D35E.Description',
      component: IdentifiableDescription,
      order: 10,
    },
    {
      id: 'name-config',
      label: 'D35E.Name',
      component: IdentifiableNameConfig,
      order: 10,
    },
];

const useIdentifiableStore = (context: IdentifiableItemSheetRenderContext, baseStore: ItemSheetStore) => {
  const state = reactive({
    document: context.document,
  });
  baseStore.tabs.tabActions.replaceTabs(createIdentifiableTabs());

  // UnidentifiedInfoMode
  const showBoth = computed(() => (game.user.isGM || context.editable) && state.document.system.isIdentifiable);
  const showOnlyIdentified = computed(() =>
    !state.document.system.isIdentifiable 
      || (state.document.system.unidentifiedInfo?.isIdentified || false)
  );
  const showOnlyUnidentified = computed(() => state.document.system.isIdentifiable && !state.document.system.unidentifiedInfo?.isIdentified);
  const showIdentified = computed(() => showBoth || showOnlyIdentified);
  const showUnidentified = computed(() => showBoth || showOnlyUnidentified);

  // Getters
  const identifableGetters = {
    unidentifiedDescription: computed(() => state.document.system.unidentifiedInfo?.unidentifiedDescription || ""),
    isIdentifiable: computed(() => state.document.system.isIdentifiable),
    identifiedDisplayName: computed(() => state.document.identifiedDisplayName),
    unidentifiedDisplayName: computed(() => state.document.unidentifiedDisplayName),
    unidentifiedName: computed(() => state.document.system.unidentifiedInfo?.unidentifiedName || ""),
    isUnidentifiedNameFromFormula: computed(() => state.document.system.unidentifiedInfo?.isUnidentifiedNameFromFormula || false),
    unidentifiedNameFormula: computed(() => state.document.system.unidentifiedInfo?.unidentifiedNameFormula || ""),
  };

  return {
    unidentifiedInfoMode: {
      showBoth,
      showIdentified,
      showUnidentified,
      showOnlyIdentified,
      showOnlyUnidentified,
    },
    identifableGetters,
  };
};

interface IdentifiableItemStore extends ReturnType<typeof useIdentifiableStore>, ItemSheetStore {};

export { useIdentifiableStore };
export type {
  IdentifiableItemStore,
}
