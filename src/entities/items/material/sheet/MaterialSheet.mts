import { ItemSheetDnd35e} from '@items/baseItem/index.mjs';
import { MaterialDnd35e } from '../material.mjs';
import { VueSheetV2Mixin } from '@vc/VueSheetV2Mixin.mjs';
import MaterialSheetVue from './MaterialSheet.vue';
import { IdentifiableItemSheetRenderContext } from '@items/components/IdentifiableItem/index.mjs';
import { DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';

type MaterialSheetConfig = DocumentSheetConfiguration<MaterialDnd35e>;
type MaterialSheetRenderContext = IdentifiableItemSheetRenderContext & {
  
};

const materialDetailsPartialName = 'materialDetails';

class MaterialSheet extends VueSheetV2Mixin(ItemSheetDnd35e<MaterialDnd35e>) {
  static vueComponent = MaterialSheetVue;
  
  // static override DEFAULT_OPTIONS: DeepPartial<MaterialSheetConfig> = {
  //   id: 'dnd35e-material-sheet', // this probably should be unique
  //   tag: 'form',
  //   form: {
  //     submitOnChange: true,
  //   },
  //   window: {
  //     resizable: true,
  //   },
  // }

  //declare showUnIdentifiedDescriptionEditor: boolean;
}

export {
  MaterialSheet,
  materialDetailsPartialName,
};

export type {
  MaterialSheetConfig,
  MaterialSheetRenderContext,
};
