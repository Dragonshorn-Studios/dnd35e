import { computed, reactive } from "vue"
import type { ItemDnd35e, ItemSystemData } from "../index.mjs";
import type { DocumentSheetRenderContext } from "@client/applications/api/document-sheet.mjs";

const defaultState = {
  itemType: 'D35E.Item',
  // identifiedDescription: context.document.system.description.value || game.i18n.localize('D35E.DescriptionPlaceholder'),
  tabs: [
    {
      id: 'description',
      label: 'D35E.Description',
    },
    {
      id: 'namesetup',
      label: 'D35E.Name',
    }
  ],
  activeTab: 'description',
}

const useItemSheetStore = (context: DocumentSheetRenderContext) => {
  // Core state
  const state = reactive({
    ...defaultState,
    document: context.document as ItemDnd35e,
    isEditable: context.editable,
  });
  const setItemType = (itemType: string) => {
    state.itemType = itemType;
  };
  const getItemTypeDisplay = (fallback: string = 'D35E.Item') =>
    computed(() => game.i18n.localize(state.itemType || fallback));

  // Tabs
  const tabGetters = {
    activeTabId: computed(() => state.activeTab),
    tabs: computed(() => state.tabs),
    getIsTabOpen: (tabId: string) => computed(() => state.activeTab === tabId),
  };
  const tabActions = {
    activateTab: (tabId: string) => {
      state.activeTab = tabId;
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

export { useItemSheetStore };
export interface ItemSheetStore extends ReturnType<typeof useItemSheetStore> {};