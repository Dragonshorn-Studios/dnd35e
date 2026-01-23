import { Component, computed, reactive } from "vue"
import type { BaseItemSheetRenderContext, ItemDnd35e, ItemSystemData } from "../index.mjs";
import { Description } from "./index.mjs";
import NameConfig from "./tabs/NameConfig.vue";

interface ItemSheetTab {
  id: string;
  label: string;
  component: Component;
  order: number;
  icon?: string;
  tooltip?: string
};

const createDefaultState = (): {
  itemType: string;
  tabs: ItemSheetTab[];
  activeTab: string;
} => ({
  itemType: 'D35E.Item',
  tabs: [
    {
      id: 'description',
      label: 'D35E.Description',
      component: Description,
      order: 10,
    },
    {
      id: 'name-config',
      label: 'D35E.Name',
      component: NameConfig,
      order: 10,
    },
  ] satisfies ItemSheetTab[],
  activeTab: 'description',
});

const useItemSheetStore = (context: BaseItemSheetRenderContext) => {
  // Core state
  const state = reactive({
    ...createDefaultState(),
    document: context.document as ItemDnd35e<typeof context.document.type>,
    isEditable: context.editable,
    renderOptions: context.renderOptions,
  });
  const setItemType = (itemType: string) => {
    state.itemType = itemType;
  };
  const getItemTypeDisplay = (fallback: string = 'D35E.Item') =>
    computed(() => game.i18n.localize(state.itemType || fallback));
  const isFirstRender = computed(() => state.renderOptions.isFirstRender);

  // Tabs
  const tabGetters = {
    activeTabId: computed(() => state.activeTab),
    tabs: computed(() => (state.tabs?? []).sort(
      (a,b) => (a.order ?? 0) - (b.order ?? 0)
    )),
    getIsTabOpen: (tabId: string) => computed(() => state.activeTab === tabId),
  };
  const tabActions = {
    activateTab: (tabId: string) => {
      state.activeTab = tabId;
    },
    replaceTabs: (newTabs: ItemSheetTab[]) => {
      state.tabs = [
        ...newTabs
      ];
    },
    appendTabs: (newTabs: ItemSheetTab[]) => {
      state.tabs = [
        ...state.tabs,
        ...newTabs
      ];
    },
  };

  // Document
  const document = computed(() => state.document);
  const documentGetters = {
    getProperty: <T,>(path: string) => computed(() => foundry.utils.getProperty(state.document, path) as T),

    name: computed(() => state.document.name || ""),
    displayName: computed(() => state.document.displayName || ""),
    isNameFromFormula: computed(() => state.document.system.isNameFromFormula || false),
    nameFormula: computed(() => state.document.system.nameFormula || ""),
    
    img: computed(() => state.document.img || ""),

    uniqueId: computed(() => state.document.system.uniqueId || ""),

    description: computed(() => state.document.system.description.value || ""),
  };
  const updateDocument = async (data: Partial<ItemSystemData>) => {
    return await state.document.update(data);
  };
  const documentActions = {
    updateDocument,
    getFieldUpdater: (path: string) => {
      return async (value: any) => {
        return await updateDocument({ [path]: value } as Partial<ItemSystemData>);
      };
    },
  };

  return  {
    itemType: computed(() => state.itemType),
    setItemType,
    getItemTypeDisplay,
    isEditable: computed(() => state.isEditable),
    isFirstRender,
    tabs: {
      tabGetters,
      tabActions,
    },
    // TODO: Fix: Rich Text Editor requires direct access to the document
    _document: document.value,
    documentGetters,
    documentActions,
  };
};

interface ItemSheetStore extends ReturnType<typeof useItemSheetStore> {};

export { useItemSheetStore };

export type {
  ItemSheetTab,
  ItemSheetStore,
}