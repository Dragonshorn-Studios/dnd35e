import { ItemSheetDnd35e} from '@items/baseItem/index.mjs';
import { VueSheetV2Mixin } from '@vc/VueSheetV2Mixin.mjs';
import { MaterialSheetVue } from './index.mjs';
import type { DocumentSheetConfiguration } from '@client/applications/api/document-sheet.mjs';
import type { Material } from '@items/material/index.mjs';
import type { IdentifiableItemSheetRenderContext } from '@items/components/Identifiable/index.mjs';

type MaterialSheetConfig = DocumentSheetConfiguration<Material>;
type MaterialSheetRenderContext = IdentifiableItemSheetRenderContext & {
  document: Material;
};


class MaterialSheet extends VueSheetV2Mixin(ItemSheetDnd35e<Material>) {
  static get vueComponent() {
    return MaterialSheetVue;
  }
  
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
};

export type {
  MaterialSheetConfig,
  MaterialSheetRenderContext,
};
