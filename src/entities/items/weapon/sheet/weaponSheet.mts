import HandlebarsApplicationMixin from '@client/applications/api/handlebars-application.mjs';
import { DocumentSheetConfiguration, DocumentSheetRenderOptions } from '@client/applications/api/document-sheet.mjs';
import { weaponSummaryPartialName } from './index.mjs';
import { WeaponDnd35e } from '../index.mjs';
import { PhysicalItemSheet, PhysicalItemSheetConfig, PhysicalItemSheetPartialsList, PhysicalItemSheetRenderContext } from '@items/physical/index.mjs';
import { systemPath } from '@constants/paths.mjs';

type WeaponSheetConfig<TItem extends WeaponDnd35e = WeaponDnd35e> = PhysicalItemSheetConfig<TItem> & {
  // Add any additional properties needed for the physical item sheet context here
};

type WeaponSheetPartialsList = PhysicalItemSheetPartialsList & {
  headerSummary: string;
};

interface WeaponSheetRenderContext extends PhysicalItemSheetRenderContext {
  partials: WeaponSheetPartialsList;
};

class WeaponSheet extends HandlebarsApplicationMixin(PhysicalItemSheet<WeaponDnd35e, WeaponSheetConfig>) {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration> = {
    id: 'dnd35e-weapon-sheet', // this probably should be unique
    // form: {
    // },
    position: {
      width: 600,
      height: 400,
      // resizable: false,
    },
  };

  static override PARTS = {
    ...super.PARTS,
    // main: {
    //   template: `${systemPath}src/entities/items/weaponSheet.hbs`,
    // },
  };

  override async _prepareContext (options: DocumentSheetRenderOptions): Promise<WeaponSheetRenderContext> {
    const baseContext = await super._prepareContext(options) as PhysicalItemSheetRenderContext;

    return {
      ...baseContext,
      partials: {
        ...baseContext.partials,
        headerSummary: weaponSummaryPartialName,
      },
    };
  }
}

export { WeaponSheet };
export type {
  WeaponSheetConfig,
  WeaponSheetRenderContext,
  WeaponSheetPartialsList,
};
